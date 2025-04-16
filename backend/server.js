const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const stockRoutes = require('./routes/stock');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB (reemplaza con tu URI real)
mongoose.connect('mongodb://localhost:27017/kiosco-stock', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});

app.use('/api/stock', stockRoutes);

app.listen(port, () => {
  console.log(`Servidor backend corriendo en el puerto ${port}`);
});