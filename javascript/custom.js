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












 function tooltip(btnClass, toolClass) {
    var btns = document.getElementsByClassName(btnClass);  // Buttons with the specified class.
    var tools = document.getElementsByClassName(toolClass);  // Tooltips with the specified class.
    var open = false;

    // Prevent tooltip from closing if clicked directly.
    Array.from(tools).forEach(function(tool) {
        tool.addEventListener('click', function(event){
            event.stopPropagation();
        });
    });

    // Add click event listener to each button with the specified class.
    Array.from(btns).forEach(function(btn) {
        btn.addEventListener('click', function(event){
            event.stopPropagation();
            
            // If the tooltip was closed.
            if(!open){
                Array.from(tools).forEach(function(tool) {
                    tool.classList.add('abierto');
                });
                open = true;

                // Click anywhere on the page to hide the tooltip.
                document.addEventListener('click', ocultar);

            // If the tooltip was open.
            } else {
                // Hide the tooltip.
                Array.from(tools).forEach(function(tool) {
                    tool.classList.remove('abierto');
                });
                open = false;
                
                // Remove the event listener to close the tooltip when clicking anywhere on the document.
                document.removeEventListener('click', ocultar);
            }
        });
    });

    // Function to hide the tooltip when clicking anywhere on the document.
    function ocultar() {
        // Hide the tooltip.
        Array.from(tools).forEach(function(tool) {
            tool.classList.remove('abierto');
        });
        open = false;
        
        // Remove the event listener to conserve resources.
        document.removeEventListener('click', ocultar);
        
        console.log('Click anywhere and hide the tooltip');
    }
}

// Call the function with the button class and tooltip class.
tooltip('boton', 'tooltip');


 








 $(document).ready(function() {
    $('.toggle_cls').click(function() {
        // Toggle 'active' class on the sidebar
        $('.sidebar').toggleClass('active');

        // Toggle 'home-dashboard' class on the content
        $('.home-dashboard').toggleClass('active');
    });
});












$(".mainnav div").click(function() {
    $("ul").slideToggle();
    $("ul ul").css("display", "none");
    $(".mainnav .on").toggleClass("on");
  });
  $(".hasDD").click(function(e) {
    $(this)
      .find("> ul")
      .slideToggle();
    $(this)
      .find("> ul ul")
      .css("display", "none");
    $(this)
      .find("> ul li")
      .removeClass("on");
    $(this).toggleClass("on");
    e.stopPropagation();
  });
  









  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }