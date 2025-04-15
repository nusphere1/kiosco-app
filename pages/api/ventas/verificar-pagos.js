export default async function handler(req, res) {
  const { id } = req.query;

  // Simulación de verificación con Mercado Pago
  if (id === '123') {
    return res.status(200).json({ estado: 'aprobado', monto: 1500 });
  }
  res.status(404).json({ error: 'Pago no encontrado' });
}
