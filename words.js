'use strict'

let arrayNodes = Array.from(document.body.childNodes).filter(node => node.nodeName !== "#text" && node.innerText.length > 0);

console.log(arrayNodes);
arrayNodes.forEach(el => console.log(el.innerText));

const nbreMots = arrayNodes.map(arr => arr.innerText).map(phrase => phrase.split(' ')).reduce((sum, current) => sum + current.length, 0);

console.log(arrayMots);


// 2e solution

// function checkBodyElements(node){
//     let numberOfWords = 0;
//     function traverseBody(node, count = 0){
//         numberOfWords += count;
//         console.log(numberOfWords)
//         if (node.childNodes.length) {        
//             node.childNodes.forEach( child => {   
//                 console.log(child.nodeType)
                
//                 if (child.nodeName !== "#text") {
//                     console.log(child.nodeName);
//                     console.log("innerHTML : "+ child.innerHTML);
                    
//                     const mots = child.innerText.split(' ').filter(el => el.length > 0);
//                     let nbreMots = mots.length;

//                     // shitty solution : innerText renvoit tous les mots des noeuds enfants concaténés.
//                     // du coup, comme on est dans une boucle forEach, les calculs sont répétés autant de fois que de balises vides, faussant les calculs.
//                     //
//                     if (child.innerHTML[0] === '<') {
//                         nbreMots = 0;
//                     }
//                     console.log(mots);
//                     traverseBody(child, nbreMots);
//                 }        
//             }   
//             )     
// }
//         return numberOfWords;
//     }
//     const body = node.querySelector("body");
//     if (body) {
//         return traverseBody(body);
//     }
// }

// window.onload = console.log("nombre de mots : " + checkBodyElements(document));
