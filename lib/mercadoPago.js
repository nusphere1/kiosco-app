import axios from 'axios';

export const verificarPago = async (id) => {
  const res = await axios.get(`/api/ventas/verificar-pagos?id=${id}`);
  return res.data;
};
