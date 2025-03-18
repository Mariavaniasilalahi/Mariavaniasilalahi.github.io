document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded! 🌸");

    // Panggil fungsi untuk membuat bunga jatuh setiap 300ms
    setInterval(createFlower, 300);
});

function createFlower() {
    let flower = document.createElement("div");
    flower.innerHTML = "🌸"; // Bisa diganti dengan emoji lain seperti 🌺 atau 🌼
    flower.style.position = "fixed";
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.top = "-50px"; // Mulai dari atas layar
    flower.style.fontSize = Math.random() * 20 + 20 + "px";
    flower.style.opacity = Math.random() * 0.8 + 0.2;
    flower.style.zIndex = "999";

    document.body.appendChild(flower);

    let speed = Math.random() * 3 + 2;
    let angle = Math.random() * 10 - 5; // Sedikit efek angin
    let move = setInterval(() => {
        let currentTop = parseFloat(flower.style.top) || 0;
        if (currentTop > window.innerHeight) {
            clearInterval(move);
            flower.remove();
        } else {
            flower.style.top = currentTop + speed + "px";
            flower.style.left = parseFloat(flower.style.left) + angle + "px";
        }
    }, 50);
}
