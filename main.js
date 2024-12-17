
// 1

// function qaytarilmaganElementniTop(massiv) {
//     return massiv.find((element) => massiv.indexOf(element) === massiv.lastIndexOf(element));
// }

// let massiv1 = [1, 2, 3, 2, 1, 4];
// console.log(qaytarilmaganElementniTop(massiv1));





// 2

// function elementlarniOzgarit(massiv) {
//     return massiv.map((element) => (element > 0 ? -element : Math.abs(element)));
// }

// let massiv2 = [1, -2, 3, -4, 5];
// console.log(elementlarniOzgarit(massiv2));





// 3

// function elementlarniKvadratQil(massiv) {
//     return massiv.map((element) => element ** 2);
// }

// let massiv3 = [2, 3, 4];
// console.log(elementlarniKvadratQil(massiv3));





// 4

// function kopMartaUchraganElementlarniOlibTashla(massiv) {
//     return massiv.filter((element) => massiv.indexOf(element) === massiv.lastIndexOf(element));
// }

// let massiv4 = [1, 2, 2, 3, 4, 4, 5];
// console.log(kopMartaUchraganElementlarniOlibTashla(massiv4));





// 5

// function bolinmaydiganElementlarSoni(massiv, n) {
//     return massiv.filter((element) => element % n !== 0).length;
// }

// let massiv5 = [2, 3, 4, 5, 6, 7];
// console.log(bolinmaydiganElementlarSoni(massiv5, 2));





// 6

// function juftElementlarIndekslariniTop(massiv) {
//     return massiv.reduce((indekslar, element, indeks) => {
//         if (element % 2 === 0) indekslar.push(indeks);
//         return indekslar;
//     }, []);
// }

// let massiv6 = [1, 2, 3, 4, 6];
// console.log(juftElementlarIndekslariniTop(massiv6));





// 7

// function engKattaElementniOchir(massiv) {
//     let engKatta = Math.max(...massiv);
//     return massiv.filter((element) => element !== engKatta);
// }

// let massiv7 = [1, 5, 3, 9, 7];
// console.log(engKattaElementniOchir(massiv7));





// 8

// function massivniTeskariChiqaring(massiv) {
//     return massiv.reverse();
// }

// let massiv8 = [1, 2, 3, 4, 5];
// console.log(massivniTeskariChiqaring(massiv8));
