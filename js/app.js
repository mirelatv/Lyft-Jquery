/* Splash*/
$(document).ready(function(){

   $('.initial').fadeOut(1000);

  
  })
/* Solo campos numericos*/
$('.input-phone').on('input', function() {
  this.value = this.value.replace(/[^0-9]/g, '');
  $('.next').attr("disabled", true);
});

/* Habilitando  buton next con el ingreso de 10 digitos*/
  
$('.input-phone').keypress(function( ) {
    if($('.input-phone' ).val().length==10 ){
      $('.next').attr("disabled", false);
      
    }
  
  });
  
/* Mostrando contenido Oculto luego de  hacer next*/

function rand_code(chars, lon) {
  code = '';
  for (x = 0; x < lon; x++) {
    rand = Math.floor(Math.random() * chars.length);
    code += chars.substr(rand, 1);
  }
  return code;
}
  caracteres = '0123456789';
  longitud = 3;

// Mostrando codigo aleatorio
$('.next').click(function() {
  alert('Tu codigo LAB -' + rand_code(caracteres, longitud));
  $('#next').attr('href', 'page2.html');
});
