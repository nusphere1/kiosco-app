import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addProduct = async () => {
    await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, stock, price }),
    });
    window.location.reload();
  };

  return (
    <div className="p-6 bg-gradient-to-br from-yellow-200 to-pink-200 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">Kiosco App 🍭</h1>

      <div className="bg-white p-4 rounded-xl shadow-xl max-w-md mx-auto mb-6">
        <input className="border p-2 w-full mb-2" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />
        <input className="border p-2 w-full mb-2" placeholder="Stock" type="number" value={stock} onChange={e => setStock(Number(e.target.value))} />
        <input className="border p-2 w-full mb-2" placeholder="Precio" type="number" value={price} onChange={e => setPrice(Number(e.target.value))} />
        <button className="bg-pink-500 text-white px-4 py-2 rounded w-full" onClick={addProduct}>Agregar producto</button>
      </div>

      <ul className="space-y-3 max-w-md mx-auto">
        {products.map((p: any) => (
          <li key={p.id} className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
            <div>
              <h2 className="font-bold text-lg">{p.name}</h2>
              <p className="text-sm text-gray-600">Stock: {p.stock} | ${p.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}