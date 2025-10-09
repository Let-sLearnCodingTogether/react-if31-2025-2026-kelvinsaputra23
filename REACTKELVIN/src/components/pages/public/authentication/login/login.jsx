import { useState } from "react";
import axios from "axios"; // Pastikan kamu install axios atau ganti dengan fetch

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/login", form);
      console.log("Login successful:", response.data);

      if (response.status === 200) {
        sessionStorage.setItem("token-bebas", response.data.data.token);
        
        // Panggil fetchSport setelah login berhasil
        fetchSport();
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  

  // Pastikan fetchSport() didefinisikan jika dipanggil
  const fetchSport = () => {
    console.log("Fetching sport data...");
    // Tambahkan logika fetch data sport di sini
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <pre>{JSON.stringify(form, null, 2)}</pre>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleFormChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleFormChange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
