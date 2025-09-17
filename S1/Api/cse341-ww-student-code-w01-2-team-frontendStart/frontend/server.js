const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

// middleware CORS 
app.use(cors());


// Objeto de datos con la estructura correcta que espera script.js
const professionalData = {
  professionalName: "Wilberth Alejandro Camacho Doblado", // Combiné firstName y lastName en un solo campo
  base64Image: "iVBORw0KGgo...", // IMPORTANTE: Quita el prefijo "data:image/png;base64,". El script.js lo añade por sí mismo.
  primaryDescription: "Estudiante de Desarrollo Web en BYU-I.",
  workDescription1: "Desarrollador de APIs con Node.js y Express.",
  workDescription2: "Experto en conectar sistemas con MongoDB.",
  linkTitleText: "Mis Enlaces", // Campo que faltaba
  
  // Objeto anidado que faltaba
  nameLink: {
    firstName: "Wilberth ",
    url: "#" // URL a la que quieres que lleve tu nombre
  },

  // Objeto anidado que faltaba
  linkedInLink: {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/wilberth-alejandro-camacho-doblado-330374198/" 
  },

  // Objeto anidado que faltaba
  githubLink: {
    text: "GitHub",
    link: "https://github.com/WTHACD/CSE341" // Tu URL de GitHub
  }
};

// Define la ruta GET
app.get('/professional', (req, res) => {
  res.status(200).json(professionalData);
});
// Ini server
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});