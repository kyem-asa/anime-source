document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.jikan.moe/v4/anime?q=${choice}`

  document.getElementById("result").innerHTML = ""

  fetch(url)
      .then(res => res.json()) // parse response as JSON then is a method
      .then(data => { // what we get from server we pass into parameter of data
        if (data.data[0].source === "Manga") {
          document.getElementById("result").innerHTML = `Yes, ${choice} is based on a manga!`
        } else {
          document.getElementById("result").innerHTML = `${choice} is an original anime!`
        } 
        
        // log what we get back from server
        
      })
      .catch(err => { //gives us an error message
          console.log(`error ${err}`)
          document.getElementById("result").innerHTML = "No anime with this title. Search again?"
      });


}



// https://api.jikan.moe/v4/anime?q=Naruto

// data.data[0].source)