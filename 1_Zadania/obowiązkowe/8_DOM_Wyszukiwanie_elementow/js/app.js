document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */
    const title1 = document.querySelector("div .title");

    function getDataAnimation(element){
        return element.getAttribute("data-animation");
    }

    console.log(getDataAnimation(title1));

    const home = document.querySelector("#home");
    const home2 = document.getElementById("home");
    const liElement = document.querySelector("li[data-direction]");
    const block = document.querySelector(".block");
    
    //zadanie 2
    const list = document.querySelectorAll("nav li");
    const paragraphs = document.querySelectorAll("div p");
    const divs = document.querySelectorAll("article div");
    
    console.log(list);
    console.log(paragraphs);
    console.log(divs);

    //zadanie 3
    const article = document.querySelector("article.first");
    let result = article.getElementsByTagName("h1");
    console.log(result.length);


});


