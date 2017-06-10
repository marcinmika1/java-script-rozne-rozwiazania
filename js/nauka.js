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

















