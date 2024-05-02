export const print = (v) => {
  const el = document.createElement('h3');
  el.innerText = '🔵 ' + v;
  document.body.appendChild(el);
} 