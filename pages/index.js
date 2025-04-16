// pages/index.tsx import Link from "next/link";

export default function Home() { return ( <div className="p-6 text-center"> <h1 className="text-3xl font-bold mb-6">Bienvenido a Kiosco App</h1> <div className="space-x-4"> <Link href="/stock" className="text-blue-500 underline">Stock</Link> <Link href="/ventas" className="text-green-500 underline">Ventas</Link> <Link href="/ingresos" className="text-purple-500 underline">Ingresos</Link> <Link href="/egresos" className="text-red-500 underline">Egresos</Link> </div> </div> ); }

// pages/stock.tsx import { useState } from "react";

export default function Stock() { const [productos, setProductos] = useState([]);

return ( <div className="p-6"> <h1 className="text-2xl font-semibold mb-4">Gestión de Stock</h1> <button className="mb-4 px-4 py-2 bg-blue-600 text-white rounded">Agregar Producto</button> {/* Tabla de productos */} <div className="bg-white p-4 shadow rounded"> <p>No hay productos aún</p> </div> </div> ); }

// pages/ventas.tsx export default function Ventas() { return ( <div className="p-6"> <h1 className="text-2xl font-semibold mb-4">Ventas</h1> <p className="mb-2">Listado de productos vendidos, filtro y sumatoria de ganancias.</p> <div className="bg-white p-4 shadow rounded"> <p>No hay ventas aún</p> </div> </div> ); }

// pages/ingresos.tsx export default function Ingresos() { return ( <div className="p-6"> <h1 className="text-2xl font-semibold mb-4">Ingresos de Productos</h1> <form className="space-y-4"> <input type="text" placeholder="Nombre del producto" className="w-full p-2 border rounded" /> <input type="number" placeholder="Precio" className="w-full p-2 border rounded" /> <input type="number" placeholder="Cantidad" className="w-full p-2 border rounded" /> <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Guardar</button> </form> </div> ); }

// pages/egresos.tsx export default function Egresos() { return ( <div className="p-6"> <h1 className="text-2xl font-semibold mb-4">Gastos y Egresos</h1> <form className="space-y-4"> <input type="text" placeholder="Descripción" className="w-full p-2 border rounded" /> <input type="number" placeholder="Monto" className="w-full p-2 border rounded" /> <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded">Registrar Egreso</button> </form> </div> ); }

