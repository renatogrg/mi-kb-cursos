document.addEventListener('DOMContentLoaded', function() {
  const downloadBtn = document.createElement('button');
  downloadBtn.innerHTML = '📥 Descargar PDF';
  downloadBtn.className = 'pdf-download-btn';
  downloadBtn.title = 'Descargar esta página en PDF';
  
  // Estilos más visibles
  downloadBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 999;
    padding: 12px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  `;
  
  // Hover effect
  downloadBtn.onmouseover = function() {
    this.style.transform = 'scale(1.08)';
    this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
  };
  
  downloadBtn.onmouseout = function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
  };
  
  downloadBtn.onclick = function() {
    window.print();
  };
  
  document.body.appendChild(downloadBtn);
});