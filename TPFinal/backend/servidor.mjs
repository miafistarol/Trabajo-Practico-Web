
import express from "express";
import cors from "cors";

const app = express();

// 👇 ESTO TIENE QUE ESTAR ARRIBA DE TODO
app.use(cors());

const URL = "https://69f3c943bd2396bf53105d60.mockapi.io/productos"
app.get("/productos", async (req, res) => {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      const text = await response.text();
      console.log("Error real:", text);
      return res.status(500).json({ error: text });
    }

    const data = await response.json();
    res.json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

