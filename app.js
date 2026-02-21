fetch("matches.json")
  .then(response => response.json())
  .then(data => {
    const resultsDiv = document.getElementById("results");

    data.forEach(match => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.border = "1px solid #ccc";
      card.style.padding = "10px";
      card.style.margin = "10px 0";

      card.innerHTML = `
        <strong class="score">${match.date}</strong><br>
        ${match.teamA} vs ${match.teamB}<br>
        <strong>${match.score}</strong><br>
        会場: ${match.venue}
      `;

      resultsDiv.appendChild(card);
    });
  })
  .catch(error => console.error("Error:", error));