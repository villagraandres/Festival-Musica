function iniciarApp(){navegacionFija(),crearGaleria()}function navegacionFija(){const e=document.querySelector(".header"),n=document.querySelector(".sobre-festival"),t=document.querySelector("body");window.addEventListener("scroll",(function(){n.getBoundingClientRect().top<0?(e.classList.add("fijo"),t.classList.add("body-scroll")):(e.classList.remove("fijo"),t.classList.remove("body-scroll"))}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const t=document.createElement("picture");t.innerHTML=`\n            <source srcset="build/img/thumb/${n}.avif" type="image/avif">\n            <source srcset="build/img/thumb/${n}.webp" type="image/webp">\n            <img loading="lazy" width="200" height="300" src="build/img/thumb/${n}.jpg" alt="imagen galeria ">\n        \n        `,t.onclick=function(){mostrarImagen(n)},e.appendChild(t)}}function mostrarImagen(e){const n=document.createElement("picture");n.innerHTML=`\n            <source srcset="build/img/grande/${e}.avif" type="image/avif">\n            <source srcset="build/img/grande/${e}.webp" type="image/webp">\n            <img loading="lazy" width="200" height="300" src="build/img/grande/${e}.jpg" alt="imagen galeria ">\n        \n        `;const t=document.createElement("DIV");t.appendChild(n),t.classList.add("overlay");const i=document.createElement("P");i.textContent="X",i.classList.add("btn-cerrar"),i.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()},t.appendChild(i);const a=document.querySelector("body");a.appendChild(t),a.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map
