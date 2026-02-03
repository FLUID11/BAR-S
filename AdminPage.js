let mediaLibrary = JSON.parse(localStorage.getItem("mediaLibrary")) || [];

displayMedia();

function addFromForm(event) {
  event.preventDefault(); // STOP page refresh

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const type = document.getElementById("type").value;
  const poster = document.getElementById("poster").value;
  const trailer = document.getElementById("trailer").value;
  const genres = document.getElementById("genres").value.split(",");

  const language = document.querySelector('input[name="language"]:checked').value;

  mediaLibrary.push({
    title,
    description,
    language,
    type,
    poster,
    genres,
    trailer
  });

  localStorage.setItem("mediaLibrary", JSON.stringify(mediaLibrary));

  displayMedia();
  alert("Media added successfully!");
}

function displayMedia() {
  const output = document.getElementById("output");
  output.innerHTML = "";

  mediaLibrary.forEach((media, index) => {
    output.innerHTML += `
      <h3>${media.title}</h3>
      <img src="${media.poster}" width="150"><br>
      <strong>Type:</strong> ${media.type}<br>
      <strong>Language:</strong> ${media.language}<br>
      <strong>Description:</strong> ${media.description}<br>
      <strong>Genres:</strong> ${media.genres.join(", ")}<br>
      <a href="${media.trailer}" target="_blank">Watch Trailer</a><br><br>

      <button onclick="deleteMedia(${index})">Delete</button>
      <hr>
    `;
  });
}

function deleteMedia(index) {
  mediaLibrary.splice(index, 1);
  localStorage.setItem("mediaLibrary", JSON.stringify(mediaLibrary));
  displayMedia();
}
