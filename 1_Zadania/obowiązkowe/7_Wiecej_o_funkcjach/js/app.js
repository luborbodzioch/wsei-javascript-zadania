/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//deklaracja pierwszej funkcji
function jeden() {

    //deklaracja zmiennej "zmienna1" jest dostepna w zakresie funcji "jeden()"
    var zmienna1 = 1;

    //deklaracja drugiej funkcji wewnatrz funkcji "jeden()"
    function dwa() {

        //Wypisanie w konsoli wartosci zmiennej "zmienna1"
        console.log(zmienna1);

        //deklaracja zmiennej "zmienna2" wewnatrz funkcji "dwa()"
        var zmienna2 = 3;
    }

    //Wywolanie funkcji "dwa()"
    dwa();

    //Wypisanie wartosci "zmienna2" - jednak nie zadziala gdyz zmienna ta znajduje sie jedynie wewnatrz funkcji "dwa()"
    console.log(zmienna2)
}

//wywolanie funkcji "jeden()"
jeden()