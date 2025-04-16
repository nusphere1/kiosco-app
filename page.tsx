// stock-control-app/src/app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const supabase = createClient(
  'https://zkrmwjprtjtrnmcyydul.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inprcm13anBydGp0cm5tY3l5ZHVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MDU0NjUsImV4cCI6MjA2MDM4MTQ2NX0.P7-fwp3X3DtvzkamhjHoAohGnKcMcuj27qL4euKsU9Y'
);

interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
}

export default function Home() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [precio, setPrecio] = useState(0);

  const cargarProductos = async () => {
    const { data, error } = await supabase.from('stock').select('*');
    if (data) setProductos(data);
  };

  const agregarProducto = async () => {
    if (!nombre || cantidad <= 0 || precio <= 0) return;
    await supabase.from('stock').insert([{ nombre, cantidad, precio }]);
    setNombre('');
    setCantidad(0);
    setPrecio(0);
    cargarProductos();
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <main className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Control de Stock</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <Input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
        <Input type="number" placeholder="Cantidad" value={cantidad} onChange={e => setCantidad(Number(e.target.value))} />
        <Input type="number" placeholder="Precio" value={precio} onChange={e => setPrecio(Number(e.target.value))} />
      </div>
      <Button onClick={agregarProducto}>Agregar producto</Button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {productos.map(p => (
          <Card key={p.id}>
            <CardContent className="p-4">
              <h2 className="font-semibold text-lg">{p.nombre}</h2>
              <p>Cantidad: {p.cantidad}</p>
              <p>Precio: ${p.precio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
