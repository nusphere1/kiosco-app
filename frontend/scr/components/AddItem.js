import React, { useState } from 'react';

function AddItem() {
  const [barcode, setBarcode] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Enviando...');

    try {
      const response = await fetch('http://localhost:5000/api/stock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ barcode, name, quantity: parseInt(quantity), price: parseFloat(price) }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Producto agregado exitosamente');
        setBarcode('');
        setName('');
        setQuantity(0);
        setPrice('');
      } else {
        setMessage(`Error al agregar el producto: ${data.message || response.statusText}`);
      }
    } catch (error) {
      setMessage(`Error de red: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Agregar Nuevo Producto</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="barcode">Código de Barras:</label>
          <input
            type="text"
            id="barcode"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Cantidad:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
}

export default AddItem;