const writeText =() =>{
    let target = document.getElementById("myelement1") 
    target.innerHTML= "Hello from javascript!";
} 

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('dom loaded')
    writeText()
});