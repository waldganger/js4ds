'use strict'

// function getIndices(data, input) {
//   return data.reduce((prev, curr, index) => {
//     const year = curr.date.split("-")[0];
//     if (input.year === year && curr.sex === input.sex) {
//       prev.push({
//         seq: index + 1,
//         year,
//         sex: curr.sex,
//         species: curr.species,
//       });
//     }
//     return prev;
//   }, []);
// }

// const data = [
//   { date: "1977-7-16", sex: "M", species: "NL" },
//   { date: "1977-7-16", sex: "M", species: "NL" },
//   { date: "1977-7-16", sex: "F", species: "DM" },
//   { date: "1977-7-16", sex: "M", species: "DM" },
//   { date: "1977-7-16", sex: "M", species: "DM" },
//   { date: "1977-7-16", sex: "M", species: "PF" },
//   { date: "1977-7-16", sex: "F", species: "PE" },
//   { date: "1977-7-16", sex: "M", species: "DM" },
// ];

// const input = {
//   year: "1977",
//   sex: "F",
// };

// console.log(getIndices(data, input));

// const test = [1, 2, 3]

// const pure = (values) => {
//   return values.reduce((sum, current) => sum +current, 0)
// }

// console.log(pure(test));


// let data = [
// {'date': '1977-7-16', 'sex': 'M', 'species': 'NL'},
// {'date': '1977-7-16', 'sex': 'M', 'species': 'NL'},
// {'date': '1977-7-16', 'sex': 'F', 'species': 'DM'},
// {'date': '1977-7-16', 'sex': 'M', 'species': 'DM'},
// {'date': '1977-7-16', 'sex': 'M', 'species': 'DM'},
// {'date': '1977-7-16', 'sex': 'M', 'species': 'PF'},
// {'date': '1977-7-16', 'sex': 'F', 'species': 'PE'},
// {'date': '1977-7-16', 'sex': 'M', 'species': 'DM'}
// ]

// function annote(arraydObjet){
//   let resultat = [];
//   let objet = {};
  
//   arraydObjet
//     .filter(obj => obj['sex'] == 'F')
//     .forEach(element => {
//     objet['year'] = new Date(element['date']).getFullYear();
  
//   if (element['sex'] == 'F') objet['sex'] = element['sex'];
//   objet['species'] = element['species'];
//   resultat.push(objet)
  
//     });
//   return resultat;
// }

// console.log(annote(data));
