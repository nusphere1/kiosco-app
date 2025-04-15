import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Ventas() {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    axios.get('/api/ventas/registrar').then(res => setVentas(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Ventas</h1>
      <ul>
        {ventas.map((venta, index) => (
          <li key={index}>{venta.descripcion} - ${venta.precio}</li>
        ))}
      </ul>
    </div>
  );
}
