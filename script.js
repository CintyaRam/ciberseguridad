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