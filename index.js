function search() {
    const inputTag = document.getElementById("input");
    const movieName = inputTag.value.trim();
  
    const titleTag = document.getElementById("title");
    const posterTag = document.getElementById("poster");
    const plotTag = document.getElementById("plot");
    const actorsTag = document.getElementById("actors");
  
    // Clear previous data
    titleTag.innerHTML = "";
    posterTag.src = "";
    plotTag.innerHTML = "";
    actorsTag.innerHTML = "";
  
    if (movieName === "") {
      titleTag.innerHTML = "❗ Please enter a movie name.";
      return;
    }
  
    const url = "http://www.omdbapi.com/?apikey=39b824e5&t=" + encodeURIComponent(movieName);
  
    const htmlRequest = new XMLHttpRequest();
    htmlRequest.open("GET", url);
    htmlRequest.responseType = "json";
  
    htmlRequest.onload = () => {
      const response = htmlRequest.response;
      console.log(response);
  
      if (response.Response === "False") {
        titleTag.innerHTML = `❌ Movie not found: "${movieName}"`;
        return;
      }
  
      titleTag.innerHTML = response.Title;
      posterTag.src = response.Poster !== "N/A" ? response.Poster : "";
      actorsTag.innerHTML = `<strong>Actors:</strong> ${response.Actors}`;
      plotTag.innerHTML = `<strong>Plot:</strong> ${response.Plot}`;
    };
  
    htmlRequest.send();
  }
  