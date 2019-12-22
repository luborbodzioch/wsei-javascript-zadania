document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
    */

    //zadanie 0
    


    function getDatasInfo(elements){
        
        let arr = [];
        for(let i = 0; i < elements.length; i++){
            arr.push(elements[i].getAttribute("data-color"));
        };

        return arr;

    }

    getDatasInfo(links);

    //zadanie 1

    console.log(childElements);
    console.log(homeElement);
    console.log(banner);
    console.log(blocks);
    console.log(links);

    for(let i = 0; i < childElements.length; i++){
       console.log(childElements[i].tagName);
       console.log(childElements[i].classList);
    }

    for(let i = 0; i < links.length; i++){
        console.log(links[i].tagName);
        console.log(links[i].classList);
     }

     
     for(let i = 0; i < blocks.length; i++){
        console.log(blocks[i].tagName);
        console.log(blocks[i].classList);
     }
 
    //zadanie 2

    for(let i = 0; i < blocks.length; i++){
        console.log(blocks[i].innerHTML);
        console.log(blocks[i].outerHTML);
        blocks[i].innerHTML = 'Nowa wartosc diva o klasie blocks';
    }
        //innerHTML zwraca wartos tagu
        //outerHTML zwraca wartosc tagu razem z tagiem
        

    //zadanie 3

    var mainFooter = document.getElementById("mainFooter");

    function getId(element){

        console.log(element.id);
        return element.id;

    }

    getId(mainFooter);

    //zadanie 4

    function getTags(elements){

        let arr = [];
        console.log(elements);
        for(let i =0;i< elements.length; i++){
            arr.push(elements[i].tagName);
        }
        console.log(arr);
        return arr;
    }

    getTags(childElements);

    //zadanie 5

    function getClassInfo(element){
       
        var classes = [];
        
        for(let i = 0; i<element.classList.length ; i++){
            classes.push(element.classList[i]);
        }
        console.log(classes);
        return classes;

    }

    getClassInfo(banner);

    //zadanie 6

    const liElements = document.querySelectorAll('nav li');
    const setDataDirection = elements => elements.forEach(el => el.getAttribute('data-direction') && el.setAttribute('data-direction','top'));

    setDataDirection([...liElements]);


});




