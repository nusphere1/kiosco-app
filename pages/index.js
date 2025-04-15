import Head from 'next/head'

export default function Home() {
  return (
    <div className="p-4">
      <Head><title>Kiosco App</title></Head>
      <h1 className="text-2xl font-bold">Bienvenido al Kiosco</h1>
      <p>Controla tu stock, ingresos y ventas.</p>
    </div>
  );
}
