export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json([
      { descripcion: 'Coca-Cola', precio: 1500 },
      { descripcion: 'Galletitas', precio: 500 }
    ]);
  }
  if (req.method === 'POST') {
    // Aquí guardarías la venta en la base de datos
    return res.status(200).json({ mensaje: 'Venta registrada' });
  }
}
