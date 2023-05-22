const express = require('express');
const cors = require('cors');
const { PORT } = require('./config');
const indexRoutes = require('./routes/index.routes');
const taskRoutes = require('./routes/tasks.routes');

const app = express();

// Middleware para analizar el cuerpo de la solicitud en formato JSON
app.use(cors())
app.use(express.json());



// Rutas
app.use(indexRoutes);
app.use(taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
