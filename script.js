$("#portada").hover(
    function () {
        $('#img_portada').css('transform', 'scale(1.05)');
    },
    function () {
        $('#img_portada').css('transform', 'scale(1)');
    });


let amenazas = $(".detalle");
let currentIndex = 0;
let opcionParrafo = ["Phishing: Es un ataque en el que el atacante se hace pasar por una entidad confiable (como un banco o servicio conocido) para engañar al usuario y obtener información sensible como contraseñas o datos financieros, generalmente a través de correos electrónicos falsos.", "Ransomware: Es un tipo de malware que cifra los archivos del dispositivo afectado y exige un rescate (generalmente en criptomonedas) para devolver el acceso a los datos.", "Malware: Término general para cualquier software malicioso diseñado para dañar o acceder a sistemas informáticos sin autorización. Incluye virus, troyanos, gusanos y spyware.", "Ataques DDoS (Distributed Denial of Service): Consisten en abrumar un sitio web o red con tráfico falso desde múltiples dispositivos, causando caídas o imposibilidad de acceso para usuarios legítimos."];

$(".detalle").click(function () {
    let src_imagen = $(this).attr("src");
    $(".image-modal").attr("src", src_imagen);
    let index = $(this).attr("data-index");
    currentIndex = parseInt(index);
    let p_fun = opcionParrafo[currentIndex];
    $(".parrafo-modal").text(p_fun);
    $(".modal").fadeIn();
});

$(".close").click(function(){
    $(".modal").fadeOut();
});

$("#prev").click(function(){
    currentIndex = (currentIndex - 1 + amenazas.length) % amenazas.length;
    let src_imagen = $(amenazas[currentIndex]).attr("src");
    $(".image-modal").attr("src", src_imagen);   
    let p_fun = opcionParrafo[currentIndex];
    $(".parrafo-modal").text(p_fun); 
});

$("#next").click(function(){
    currentIndex = (currentIndex + 1) % amenazas.length;
    let src_imagen = $(amenazas[currentIndex]).attr("src");
    $(".image-modal").attr("src", src_imagen); 
    let p_fun = opcionParrafo[currentIndex];
    $(".parrafo-modal").text(p_fun);   
});

$(".modal").click(function(event){
    if ($(event.target).is(".modal")) {
        $(this).fadeOut();
    }
});

//Inicio popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

 $(document).ready(function () {
      $('#formularioContacto').on('submit', function (e) {
        e.preventDefault(); // Evitar envío por defecto

        // Limpiar errores previos
        $('.error').text('');
        $('#resultado').addClass('d-none');

        let esValido = true;

        const nombre = $('#nombre').val().trim();
        const correo = $('#correo').val().trim();
        const mensaje = $('#mensaje').val().trim();

        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nombre === '') {
          $('#error-nombre').text('Por favor, ingresa tu nombre.');
          esValido = false;
        }

        if (correo === '') {
          $('#error-correo').text('Por favor, ingresa tu correo.');
          esValido = false;
        } else if (!regexCorreo.test(correo)) {
          $('#error-correo').text('Por favor, ingresa un correo válido.');
          esValido = false;
        }

        if (mensaje === '') {
          $('#error-mensaje').text('Por favor, escribe un mensaje.');
          esValido = false;
        }

        if (esValido) {
          $('#resultado')
            .removeClass('d-none alert-danger')
            .addClass('alert-success')
            .text('Gracias por tu consulta. Nos pondremos en contacto contigo pronto.');

          $('#formularioContacto')[0].reset();
        }
      });
    });

    $(document).ready(function () {

      $('#verificarBtn').on('click', function () {

        // Obtener respuestas seleccionadas
        const respuesta1 = $('input[name="pregunta1"]:checked').val();
        const respuesta2 = $('input[name="pregunta2"]:checked').val();

        // Limpiar resultados anteriores
        $('#resultado1').text('').removeClass('correcta incorrecta');
        $('#resultado2').text('').removeClass('correcta incorrecta');
        $('#mensajeFinal').addClass('d-none');

        let todasCorrectas = true;

        // Verificar pregunta 1
        if (respuesta1 === 'a') {
          $('#resultado1').text('✅ Correcta').addClass('correcta');
        } else {
          $('#resultado1').text('❌ Incorrecta').addClass('incorrecta');
          todasCorrectas = false;
        }

        // Verificar pregunta 2
        if (respuesta2 === 'b') {
          $('#resultado2').text('✅ Correcta').addClass('correcta');
        } else {
          $('#resultado2').text('❌ Incorrecta').addClass('incorrecta');
          todasCorrectas = false;
        }

        // Mostrar mensaje final si ambas son correctas
        if (todasCorrectas) {
          $('#mensajeFinal')
            .removeClass('d-none alert-danger alert-success')
            .addClass('alert alert-success')
            .text('🎉 ¡Felicidades! Has respondido correctamente a todas las preguntas.');
        }
      });
    });