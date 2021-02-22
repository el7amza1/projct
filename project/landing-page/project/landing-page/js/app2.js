
    const sections = document.querySelectorAll('section');
    const newUl = document.getElementById("navbar__list");
    sections.forEach( element => {
        const newLi = document.createElement('li');
        const newA = document.createElement('a');
        newA.style.padding = "4px 6px 4px 6px";
        newA.style.margin = "2px 3px 2px 3px";
        newA.textContent = element.getAttribute('data-nav');
        newLi.appendChild(newA);
        newUl.appendChild(newLi); 
    } );
function liFunction (event){
    newA.style.backgruond("yellow");

}
