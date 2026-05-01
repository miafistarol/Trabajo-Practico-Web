import fs from "fs";

const URL = "https://69f3c943bd2396bf53105d60.mockapi.io/productos";

// leer JSON local
const usuarios = JSON.parse(
  fs.readFileSync("../recursos/data/productos.json", "utf-8")
);

async function cargarDatos() {
  for (const usuario of usuarios) {
    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
      });

      // 👇 importante: evitar error de JSON inválido
      const text = await res.text();

      if (!res.ok) {
        console.log("❌ Error:", text);
      } else {
        console.log("✔ Cargado:", text);
      }

    } catch (error) {
      console.log("❌ Error de conexión:", error.message);
    }
  }
}

cargarDatos();