document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-ejecutar');
  const frame = document.getElementById('demo-frame');

  if (btn && frame) {
    btn.addEventListener('click', () => {
      alert('¡Acción del ejemplo ejecutada con éxito!');
    });
  }
});
