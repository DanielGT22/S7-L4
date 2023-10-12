fetch("https://api.pexels.com/v1/search?query=kittens", {
  headers: {
    Authorization: "RrPXSd4rbs5vKDAuqO5BwnTIWhTFh5VZGgugbooZnLf0U9P6cX1DwcSB",
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore");
    }
  })
  .then((data) => {
    console.log(data.photos);

    const cards = document.getElementsByClassName("card");
    const cardsArray = [...cards];
    const load = document.getElementById("load");

    load.addEventListener("click", function () {
      for (let i = 0; i < cardsArray.length; i++) {
        const imageUrl = data.photos[i].url;
        console.log(imageUrl);
        const currentCard = cardsArray[i];
        console.log(currentCard);
        const currentImg = currentCard.querySelector("img");
        console.log(currentImg);

        currentImg.src = imageUrl;
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });
