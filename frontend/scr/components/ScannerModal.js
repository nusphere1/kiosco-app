import React from 'react';
import useBarcodeScanner from '../hooks/useBarcodeScanner';

function ScannerModal({ onClose, onBarcodeScanned }) {
  const { scannedBarcode, isScanning, startScan, stopScan } = useBarcodeScanner();

  useEffect(() => {
    if (scannedBarcode) {
      onBarcodeScanned(scannedBarcode);
      onClose();
    }
  }, [scannedBarcode, onClose, onBarcodeScanned]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        <h2>Escanear Código de Barras</h2>
        {isScanning ? <p>Escaneando...</p> : <button onClick={startScan}>Iniciar Escaneo</button>}
        {scannedBarcode && <p>Código escaneado: {scannedBarcode}</p>}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default ScannerModal;