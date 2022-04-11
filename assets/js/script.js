$(function () {
    $('.carousel').carousel();

    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });

    $("#añadirFavoritos").click(function () {
        alert("Añadido a favoritos correctamente...");
    });

    $(document).ready(function(){
        $('[data-bs-toggle="tooltip"]').tooltip();   
    });
    
    $("h4").dblclick(function () {
        $(this).css("color", "red");
    });

    $(".card-body").click(function () {
        $("p").toggle();
    });

})