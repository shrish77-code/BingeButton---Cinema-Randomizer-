// PAGE SWITCHING
function showPage(pageName) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(pageName).classList.add("active");
}

// RANDOMIZER FUNCTION (NETFLIX STYLE)
function getRandomList() {
    let type = document.getElementById("typeSelect").value;
    const url = `http://127.0.0.1:8000/random?type=${type}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const slider = document.getElementById("slider");
            slider.innerHTML = "";

            data.forEach((item, index) => {
                slider.innerHTML += `
                    <div class="rank-card">
                        <div class="rank-number">${index + 1}</div>

                        <h3>${item.title}</h3>

                        <div class="rank-meta">
                            ${item.type.toUpperCase()} • ${item.release_year} • ⭐ ${item.rating}
                        </div>

                        <div class="rank-meta">
                            ${item.listed_in}
                        </div>

                        <div class="rank-desc">
                            ${item.description.slice(0, 180)}...
                        </div>
                    </div>
                `;
            });
        })
        .catch(err => {
            alert("Backend not reachable");
            console.error(err);
        });
}
