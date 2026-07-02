let navigation = 
[
    { nombre:"Frontend", url: "/"},
    { nombre:"Graphic Designer", url: "/design.html"},
    { nombre:"Email Designer", url: "/mailing.html"},
    { nombre:"Video Game", url: "/gaming.html"}
]

let currentPath = window.location.pathname;
let nav = '<nav class="nav-menu">';

for (var i = 0; i < navigation.length; i++) {
    let url = navigation[i].url;
    let nombre = navigation[i].nombre; 

    let clase = (currentPath === url) ? "seleccionado" : "";
    
	nav += `<a href="${ url }"><div class=${clase}>${ nombre }</div></a>`;
}
nav += '</nav>';

document.getElementById('nav').innerHTML = nav;