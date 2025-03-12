document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded!");
});
function createMoney() {
    let money = document.createElement("div");
    money.innerHTML = "💵"; // Bisa diganti dengan 💰 atau 💴 💶 💷
    money.style.position = "absolute";
    money.style.left = Math.random() * window.innerWidth + "px"; 
    money.style.top = "-50px"; // Mulai dari atas layar
    money.style.fontSize = Math.random() * 20 + 30 + "px"; 
    money.style.opacity = Math.random() * 0.7 + 0.3; 
    document.body.appendChild(money);

    let speed = Math.random() * 3 + 2;
    let rotate = Math.random() * 360;
    let move = setInterval(() => {
        let currentTop = parseFloat(money.style.top);
        rotate += 5; 
        if (currentTop > window.innerHeight) {
            clearInterval(move);
            money.remove();
        } else {
            money.style.top = currentTop + speed + "px";
            money.style.transform = rotate(${rotate}deg);
        }
    }, 50);
}

// Buat uang jatuh setiap 200ms
setInterval(createMoney, 200);
