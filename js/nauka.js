'use strict';
//**********************************************************
/*deklaracja zmiennych i nadawanie wartosci zeminnym*/

var wyplata = 5000;
var premia = 2000;
var calkowitaWyplata = wyplata + premia;

/*wyswietlenie wyniku*/

console.log(calkowitaWyplata);

//*********************************************************

/*działania na stringach*/

var wyplataStr = "5000";
var premiaStr = "2000";
var calaWyplata = wyplataStr + "\n \" dodajemy\" \n " + premiaStr;

//znaki specjalne maja na poczatku "\" np \n - nowa linia 

/*wyswietlenie wyniku */

console.log(calaWyplata);

//*************************************************************

/*metody w JS */

var imieStudenta='     Michał';

console.log(imieStudenta.indexOf('c'));
/* na ktorej pozycji jest literka c liczymy od 0*/
console.log(imieStudenta);
console.log(imieStudenta.trim());
/* usuwanie spacji na poczatku i na koncu*/

//****************************************************************

/*Użycie true i false */

var czyJestSmok;
czyJestSmok = true;

if (czyJestSmok) 
    {
        console.log('jest smog') /*wyswietl jest smog jesli prawda*/
    }
else
    {
        console.log('nie ma smogu') /*wyswietl nie ma smog jesli nie prawda*/
    }

//*******************************************************************


/* wyskozystywanie tablic */


var imiona = new Array();
/*tworzenie tablicy pustej*/
var imionaStudentow = new Array(9);
/*tworzenie pustej tablicy zdefiniowanej na 9 elementow*/
var imionaChlopakow = new Array('Marcin', 'Michal', 'wojtek', 'Marek');
/*tworzenie tablicy i nadanie wartosci*/

console.log(imionaChlopakow); 

imionaStudentow [2] = 'maciek'; /*dodanie na indeksie 3 tablicy maciek*/

console.log(imionaStudentow);

var wiek = [];
/*tworzenie tablicy pustej*/
var wiekStudentow = [20, 25, 30];
/*tworzenie tablicy i wstawianie wartosci*/

//*******************************************************************

/*obiekty jako zmienne*/

var student = {
    imie: "Marcin",
    wzrost: 152,
    wyswietlDane: function() {console.log(this.imie)}
}
/*tworzenie obiektu jest jak budowanie tablicy tylko indeksem staje sie nazwa np imie, wzrost... odwolujemy sie do nich np student.wzrost mozna wstawiac tez funkcjie */

student.wyswietlDane();
/*wywołanie funkcji */
console.log(student);

//*****************************************************************

/*objekty stałe matematyczne np Pi,*/

console.log(Math.PI);
/*wyswietle liczbę PI*/
console.log(Math.cos(0));
/*wyswietl cosinusa 0*/
/*w wyszukiwarece java script math objects*/

var r=2;

console.log(Math.PI * Math.pow(r,2)); /*obliczenia pola koła*/
//*******************************************************************

/*wyswietlanie okienka  */

//alert( 'uwazaj');   *wyswietli sie okno z napsiel 'uwaga'*/

//********************************************************************


/* if - warunki w praktyce*/

var wzrostOli = 178;
var wzrostMateusza = 178;

if (wzrostMateusza > wzrostOli){  /*sprawdz warunek czy*/
    console.log('Mateusz jest wyzszy');

}
else                               /*jesli warunek nie spełniony*/
    {
        console.log('ola jest wyzsza')
    }

//******************************************************************

/*else if warunek na wiecej nie 2 opcje rozwiazan warunku */

if (wzrostMateusza > wzrostOli){  /*sprawdz warunek czy*/
    console.log('Mateusz jest wyzszy');

}
else if (wzrostMateusza == wzrostOli) /*kolejny warunek jesli pierwszy nie spełniony */                            
    {
        console.log('Są równi')
    }

else /*jesli zaden warunek nie spełniony*/
    {
        console.log('ola jest wyzsza')
    }
//******************************************************************

/* uzycie warunku SWITCH    */

var color = 'zielony';

switch (color){
    case 'czerwony':   /*jesli kolor czerwony*/
         console.log('kolor czerwony'); /*wyslwiel */
        break;
    case 'niebieski':
        console.log('kolor niebieski');
        break;
    case  'zielony':
        console.log('kolor zielony');
        break; /* bez break-a wykoswietli się co w case mimo ze nie spelnai warunku*/
        
    default:  /* jesli nie wyminony w case-ach to zrob*/
        console.log('inny kolor');
        
             }
//*****************************************************************

/* pętla for */

//for (i= ; warunek kiedy ma sie skonczyc; zwiekszaj i o )
for (var i=0; i<4; i++){
    console.log(i);
}
//***************************************************************

/*petla while */

var i=0;

while(i<10){
    console.log(i);
    i++;
}
//**************************************************************

/*petla do while*/

var iter = 2;
do{
    console.log(iter);
    iter++;
} while (iter < 10 );
//*****************************************************************
/*break w petli while*/
var iter = 2;
do{
    console.log(iter);
    iter++;
    
    if (iter==5){   /*break do wychodzenaia z petli */
        break;
    }
} while (iter < 10 );
//***************************************************************

//i++ postinkrementacja i ++i preinkrementacja dadaj po i dodaj przed wyswietleniem 

for ( var iteracja=1; iteracja<4; ){
    console.log(++iteracja);
}

for ( var iteracja=1; iteracja<4; ){
    console.log(iteracja++);
}
//***************************************************************8
/*uzycie continue by ominąć */
for (var b=0; b<6; ++b){
    if(b == 3){     /* warunek pominiecia */
        continue; /* kontynuuj dalej bez zmian */
    }
    else {
        console.log(b);
    }
    
    console.log('--');
}
//*****************************************************************
/*operatory*/

//% dzielenie modulo /*wyswietla reszte np 7%2 = 1 */
/* x+=1 - dodawanie np x=x+1 */
/*x-=1 -II- */
/* == rowne != rozne === czy rowne i cze ten sam typ danych czy string  czy liczba   !== czy nie sa rowne i type danych nie rowne   */
/* && AND  ||  OR  ! NOT (np for (!x>3)//nie jest wieksze od 3) */
//******************************************************************
/*skrócony zapisa dla if */
(2>5) ? console.log('tak') : console.log('nie');

if (2>5){
    console.log('tak');
}
else{
    console.log('nie');
}





