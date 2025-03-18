document.addEventListener("DOMContentLoaded", function() {
    function createFlower() {
        let flower = document.createElement("div");
        flower.classList.add("bunga");
        flower.innerHTML = "🌸"; // Emoji bunga

        // Posisi awal bunga secara acak
        flower.style.left = Math.random() * window.innerWidth + "px";
        flower.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Durasi jatuh acak

        document.body.appendChild(flower);

        // Hapus bunga setelah jatuh
        setTimeout(() => {
            flower.remove();
        }, 5000);
    }

    // Buat bunga setiap 300ms
    setInterval(createFlower, 300);
});
