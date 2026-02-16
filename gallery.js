const imageBoxes = document.querySelectorAll(".image-box");

imageBoxes.forEach(box => {

    const img = box.querySelector("img");
    const overlay = box.querySelector(".overlay");

    box.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.1)";
        overlay.style.opacity = "1";
    });

    box.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
        overlay.style.opacity = "0";
    });

});

const imageboxes = document.querySelectorAll(".image-box");

imageboxes.forEach((box, index) => {

    box.addEventListener("click", () => {

        if (index === 0) {
            window.open("https://naruto.fandom.com/wiki/Special:Search?scope=internal&navigationSearch=true&query=naruto", "_blank");

        }

        if (index === 1) {
            window.open("https://onepiece.fandom.com/wiki/Monkey_D._Luffy", "_blank");
        }

        if (index === 2) {
            window.open("https://jujutsu-kaisen.fandom.com/wiki/Yuji_Itadori", "_blank");
        }

        if (index === 3) {
            window.open("https://attackontitan.fandom.com/wiki/Eren_Yeager", "_blank");
        }

        if (index === 4) {
            window.open("https://dragonball.fandom.com/wiki/Goku", "_blank");
        }

        if (index === 5) {
            window.open("https://onepunchman.fandom.com/wiki/Saitama", "_blank");
        }

        if (index === 6) {
            window.open("https://myheroacademia.fandom.com/wiki/Izuku_Midoriya", "_blank");
        }

        if (index === 7) {
            window.open("https://kimetsu-no-yaiba.fandom.com/wiki/Tanjiro_Kamado", "_blank");
        }
    });

});
