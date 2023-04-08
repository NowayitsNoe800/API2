
document.querySelector('button').addEventListener('click', guessAuthor)

let firstName = document.querySelector("h3").innerText

function guessAuthor(){

    let guess = document.querySelector('.who').value
  //   document.querySelector("img").src = data.drinks[0].strDrinkThumb
    document.querySelector("h3").classList.remove("hidden")

    if(guess.toLowerCase() == document.querySelector("h3").innerText.toLowerCase()){
        document.querySelector("h4").innerText = "Correct!"
    }else{
        document.querySelector("h4").innerText = "Not this time"
    }
 

}
console.log(firstName)


fetch(`https://lucifer-quotes.vercel.app/api/quotes`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector(".quote").innerText = data[0].quote
    document.querySelector(".author").innerText = data[0].author
  //   document.querySelector("img").src = data.
  //   document.querySelector("h3").innerText = data.
  })
  .catch(err => {
      console.log(`error ${err}`)
  });