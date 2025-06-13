
// add active-element class to elements
let pageIcons=document.querySelectorAll('#pageIcons li a');
pageIcons.forEach((el) => { 
    el.addEventListener('click',function(e){
        e.preventDefault();
        pageIcons.forEach(el=>el.classList.remove('active-element'))
        e.target.classList.add('active-element')
    })

 })
