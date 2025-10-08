document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("loadMap");
  const input = document.getElementById("backendUrl");
  const frame = document.getElementById("optimizerFrame");

  btn.addEventListener("click", () => {
    const url = input.value.trim();
    if (!url) return alert("Please enter your backend API URL first!");
    frame.src = url;
  });
});