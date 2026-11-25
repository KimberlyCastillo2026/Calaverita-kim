// Creamos un dulce que empieza arriba de la pantalla y cae girando.
function crearDulce() {
  const dulce = document.createElement("div");
  const dulces = ["🍬", "🍭", "🍫", "🍬", "🍭"];
  dulce.textContent = dulces[Math.floor(Math.random() * dulces.length)];
  dulce.style.position = "fixed";
  dulce.style.top = "-50px";
  dulce.style.left = Math.random() * 100 + "vw";
  dulce.style.fontSize = 20 + Math.random() * 20 + "px";
  dulce.style.zIndex = "9999";
  dulce.style.pointerEvents = "none";
  document.body.appendChild(dulce);

  const duracion = 3 + Math.random() * 4;
  dulce.animate(
    [
      { transform: "translateY(0) rotate(0deg)" },
      { transform: "translateY(110vh) rotate(360deg)" }
    ],
    { duration: duracion * 1000, easing: "linear" }
  );
  setTimeout(() => dulce.remove(), duracion * 1000);
}

// Como en la clase: aparece un dulce cada 300 milisegundos.
setInterval(crearDulce, 300);

// El botón también deja lanzar unos dulces extra.
document.getElementById("boton-dulces").addEventListener("click", () => {
  for (let i = 0; i < 8; i++) setTimeout(crearDulce, i * 150);
});
