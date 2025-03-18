document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded!");

    // Jalankan animasi bunga jatuh setiap 300ms
    setInterval(createFallingFlower, 300);
});

function createFallingFlower() {
    let flower = document.createElement("div");
    flower.innerHTML = "🌸"; // Emoji bunga
    flower.style.position = "fixed";
    flower.style.left = Math.random() * window.innerWidth + "px"; // Posisi jatuh acak
    flower.style.top = "-50px"; // Mulai dari atas layar
    flower.style.fontSize = Math.random() * 20 + 20 + "px"; // Ukuran random
    flower.style.opacity = Math.random() * 0.7 + 0.3; // Transparansi random
    flower.style.zIndex = "999"; // Supaya di atas elemen lain

    document.body.appendChild(flower);

    // Animasi jatuh dengan CSS
    let duration = Math.random() * 5 + 3; // Kecepatan jatuh random (3 - 8 detik)
    let rotateAngle = Math.random() * 360; // Putaran acak saat jatuh

    flower.animate(
        [
            { transform: translateY(0px) rotate(${rotateAngle}deg), opacity: 1 },
            { transform: translateY(${window.innerHeight + 50}px) rotate(${rotateAngle + 180}deg), opacity: 0 }
        ],
        {
            duration: duration * 1000,
            easing: "linear",
            iterations: 1
        }
    );

    // Hapus bunga setelah animasi selesai
    setTimeout(() => {
        flower.remove();
    }, duration * 1000);
}
