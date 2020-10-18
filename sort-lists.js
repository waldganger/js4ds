'use strict'

let arr = [1, 2, 3];

console.log(arr.filter(c => c > 2));

const sortLists = () => {
    const lists = Array.from(document.querySelectorAll('.sorted'))
    lists.forEach((list) => {
        console.log(list);
        
      const children = Array.from(list.childNodes)
            .filter(c => c.nodeName !== '#text')
      children.sort((left, right) =>
                    left.textContent.localeCompare(right.textContent))
      while (list.firstChild) {
        list.removeChild(list.firstChild)
      }
      children.forEach(c => list.appendChild(c))
    })
  }

// const sortLists = () => {
//     const lists = Array.from(document.querySelectorAll('.sorted'))
//     lists.forEach((list) => {
//       const children = Array.from(list.childNodes)
//             .filter(c => c.nodeName !== '#text')
//       children.sort((left, right) =>
//                     left.textContent.localeCompare(right.textContent))
//       while (list.firstChild) {
//         list.removeChild(list.firstChild)
//       }
//       children.forEach(c => list.appendChild(c))
//     })
//   }

//   document.addEventListener("load", (event) =>{
//       sortLists();
//   })