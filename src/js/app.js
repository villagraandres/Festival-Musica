

document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});

function iniciarApp(){
    navegacionFija();
    crearGaleria();
}
function navegacionFija(){
    const barra=document.querySelector('.header')
    const sobreFestival=document.querySelector('.sobre-festival')
    const body=document.querySelector('body')

    window.addEventListener('scroll',function(){
        if (sobreFestival.getBoundingClientRect().top<0 && window.matchMedia("(min-width: 400px)").matches) {
            barra.classList.add('fijo')
            body.classList.add('body-scroll')
        }else{
            barra.classList.remove('fijo')
            body.classList.remove('body-scroll')
            
        }

    })
}
/* function scrollNav(){
    const enlaces=document.querySelectorAll('.navegacion-principal a')

    enlaces.forEach(enlace  => {
        enlace.addEventListener('click',function(e){

            e.preventDefault();

            const seccionScroll=e.target.attributes.href.value;
           const seccion= document.querySelector(seccionScroll);
           seccion.scrollIntoView({behavior:"smooth"});
        });
    })
}
 */

function crearGaleria(){
    const galeria=document.querySelector('.galeria-imagenes')
    for(let i=1; i<=12;i++){
        const imagenes=document.createElement('picture')
        imagenes.innerHTML=`
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria ">
        
        `
        imagenes.onclick=function(){
            mostrarImagen(i);
        }
        galeria.appendChild(imagenes)
        
        
        
    }
}
function mostrarImagen(id){
    const imagenes=document.createElement('picture')
    imagenes.innerHTML=`
            <source srcset="build/img/grande/${id}.avif" type="image/avif">
            <source srcset="build/img/grande/${id}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen galeria ">
        
        `;
        // crear overlay con imagen
        const overlay=document.createElement('DIV');
        overlay.appendChild(imagenes);
        overlay.classList.add('overlay');

        //boton para cerrar ventana
        const cerrarModal=document.createElement('P');
        cerrarModal.textContent='X';
        cerrarModal.classList.add('btn-cerrar');
        cerrarModal.onclick=function(){
            const body=document.querySelector('body');
            body.classList.remove('fijar-body')
            overlay.remove();
        }
        overlay.appendChild(cerrarModal)

        const body=document.querySelector('body');
        body.appendChild(overlay);
        body.classList.add('fijar-body')
    
}