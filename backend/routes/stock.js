const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Obtener todos los items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener un item por código de barras
router.get('/:barcode', async (req, res) => {
  try {
    const item = await Item.findOne({ barcode: req.params.barcode });
    if (!item) {
      return res.status(404).json({ message: 'Item no encontrado' });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Agregar un nuevo item
router.post('/', async (req, res) => {
  const item = new Item({
    barcode: req.body.barcode,
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Actualizar un item (por código de barras)
router.patch('/:barcode', async (req, res) => {
  try {
    const item = await Item.findOne({ barcode: req.params.barcode });
    if (!item) {
      return res.status(404).json({ message: 'Item no encontrado' });
    }
    if (req.body.name != null) {
      item.name = req.body.name;
    }
    if (req.body.quantity != null) {
      item.quantity = req.body.quantity;
    }
    if (req.body.price != null) {
      item.price = req.body.price;
    }
    const updatedItem = await item.save();
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar un item (por código de barras)
router.delete('/:barcode', async (req, res) => {
  try {
    const result = await Item.deleteOne({ barcode: req.params.barcode });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Item no encontrado' });
    }
    res.json({ message: 'Item eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;