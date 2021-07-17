$(() => {

  $('.all-dark').hide();

  /* $('#botao').click(() => {
    $('#caixa').slideToggle();
  }); */

  $('#botao').click(() => {
    $('#caixa').append(
      "<strong>Hello World!</strong>"
    );
  });

  /* $(window).resize(() => {
    if ($(window).width() < 511) {
      $('#buton').show();
    }
    else {
      $('#buton').hide();
    } 
  }); */

  $('#buton').click(() => {
    $('#caja').show();
    $('#caja').addClass('cajaAnimation');
    $('.all-dark').fadeIn();
  });

  $('#excluir').click(() => {
    $('#caja').removeClass('cajaAnimation');
    $('.all-dark').fadeOut();
  });

});