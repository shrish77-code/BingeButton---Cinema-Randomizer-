/* ===============================
   DG-CINEMA 3D PARALLAX REEL
   =============================== */

const posters = [
  "17f97282cae8905886bff3604ccc070d.jpg",
  "f00ef4ef28062a3ffe32c80cfa039c86.jpg",
  "16cbfef3206fad8ef559c7730728ae85.jpg",
  "a6addb485d79b2246dedbc45cfed2616.jpg",
  "f7dd241a6bdae327b144fd513d6b61d0.jpg",
  "574d86de3450dd976e2cb9eadaed49e2.jpg",
  "7321f4b02b636e681b8f5ff1893a21bd.jpg",
  "99f8702093bd74454c4636a33f558c4a.jpg",
  "a9003d8ce7369b151b1d6c905f54a1f1.jpg",
  "9e969b4cb93c422fbbb23f97aa4ba4e4.jpg"
];

const reel = document.getElementById("reel");

function makePoster(src) {
    const img = document.createElement("img");
    img.className = "poster";
    img.src = src;
    return img;
}

function populateReel() {
    reel.innerHTML = "";
    posters.forEach(src => reel.appendChild(makePoster(src)));
    posters.forEach(src => reel.appendChild(makePoster(src))); // duplicate for loop
}

let anim;

function initAnimation() {
    populateReel();

    const postersEls = [...reel.querySelectorAll(".poster")];
    const totalWidth = reel.scrollWidth / 2;
    const speed = 95; // adjust to match DG-Cinema
    const duration = totalWidth / speed;

    if (anim) anim.kill();

    // infinite horizontal scroll
    anim = gsap.fromTo(
        reel,
        { x: -totalWidth },
        {
            x: 0,
            duration,
            ease: "none",
            repeat: -1,
            onRepeat: () => gsap.set(reel, { x: -totalWidth })
        }
    );

    // 3D tilt + depth effect
    gsap.ticker.add(() => {
        const reelRect = reel.getBoundingClientRect();
        postersEls.forEach(p => {
            const r = p.getBoundingClientRect();
            const center = (r.left + r.right) / 2;
            const middle = window.innerWidth / 2;

            const dist = (center - middle) / middle; // -1 to +1

            const rotate = dist * -25;      // rotateY tilt  
            const depth = Math.abs(dist) * -180; // Z depth  
            const scale = 1 - Math.abs(dist) * 0.25; // scale

            p.style.transform =
                `translateZ(${depth}px) rotateY(${rotate}deg) scale(${scale})`;
        });
    });
}

window.addEventListener("load", initAnimation);
window.addEventListener("resize", () => {
    clearTimeout(window._resizeTimer);
    window._resizeTimer = setTimeout(initAnimation, 200);
});









// TRUE FOCUS ANIMATION FOR BINGE WATCH
const words = document.querySelectorAll("#binge-focus .focus-word");
const frame = document.querySelector("#binge-focus .focus-frame");
const container = document.querySelector("#binge-focus");

let index = 0;

function animateFocus() {
    words.forEach(w => w.classList.remove("active"));
    const active = words[index];
    active.classList.add("active");

    const parent = container.getBoundingClientRect();
    const rect = active.getBoundingClientRect();

    frame.style.transform = `translate(${rect.left - parent.left}px, ${rect.top - parent.top}px)`;
    frame.style.width = rect.width + "px";
    frame.style.height = rect.height + "px";

    index = (index + 1) % words.length;
}

setInterval(animateFocus, 1200);
animateFocus();
