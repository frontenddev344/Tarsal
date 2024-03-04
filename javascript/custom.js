$(function () {

    $('.drop-box').click(function () {
        $('#ul')
            .fadeToggle();
    });

    $('.drop-box').on('click', function () {
        $(this).toggleClass('marked');
        $('.drop-text').toggleClass('marked1');
    });

    $(".drop-box").click(function () {
        $('.rotate').toggleClass("down");
    });

});



function tooltip (btn, tool) {
    var btn = document.getElementById(btn);  // El botón.
    var tool = document.getElementById(tool);  // El tooltip.
    var open = false;
 
    // Evito que se cierre el tooltip si hago click sobre el tooltip.
     tool.addEventListener('click', function(event){
          event.stopPropagation();
     });
 
    // Al hacer click en el botón.
    btn.addEventListener('click', function(event){
       event.stopPropagation();
       // Si estaba Cerrado.
       if(!open){
          tool.classList.add('abierto');
          open = true;
          // Cuando hago click en cualquier parte de la página.
          document.addEventListener('click', ocultar);
  
       // Si estaba abierto.
       }else{
          // Oculto el tooltip.
          tool.classList.remove('abierto');
          open = false;
          // Quito el evento que hace que al hacer click en cualquier parte del document se cierre el tooltip.
          document.removeEventListener('click', ocultar);
       }
    });
 
    // Función para ocultar el tooltip si hago click en cualquier parte del document.
    function ocultar () {
       // Oculto el tooltip.
       tool.classList.remove('abierto');
       open = false;
       // Quito el evento para que no gaste tantos recursos del computador.
       document.removeEventListener('click', ocultar);
       
       console.log('Click en cualquier parte y oculto el Tooltip');
    }
 
 }
 
 tooltip('boton', 'tooltip');



