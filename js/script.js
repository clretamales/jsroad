// Espera a que el documento se cargue completamente
document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');
    const changeContentBtn = document.getElementById('changeContentBtn');
  
    // Añade un evento 'click' al botón
    changeContentBtn.addEventListener('click', function () {
      content.textContent = '¡El contenido ha cambiado!';
    });
  });