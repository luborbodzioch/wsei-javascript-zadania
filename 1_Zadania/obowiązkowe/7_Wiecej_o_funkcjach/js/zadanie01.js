
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Deklaracja funkcji "sortArray()"
function sortArray() {

    //deklaracja tablicy
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Wywolanie funkcji "sort()" na tablicy "points"
    points.sort(function (a, b) {
        //zwrocenie roznicy "a" - "b"
        return a - b;
    });

    //zwrocenie posortowanej tablicy
    return points;
}

//Wywolanie funkcji "sortArray()"
sortArray();
