'use strict'

// const encoding = document.querySelector("meta").getAttribute("charset");
// console.log(encoding);

function getMeta(){
    document.querySelectorAll("meta").forEach(meta => {
        console.log(meta.nodeName);
        for (let i = 0; i < meta.attributes.length; i++){
            console.log(`${meta.attributes.item(i).name} : ${meta.attributes.item(i).value}`)
            
        }
        
        
    })
}

getMeta();