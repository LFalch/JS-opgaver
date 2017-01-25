function vismig(sideId){
  $('.content').removeClass('visible');

  $('#'+sideId).addClass("visible");
  updateColours();
}


$('#visdato').click(function() {
  $("#datoFelt").html(new Date().toDateString());
})

{
  let pcolour = $('[name=pcolour]');
  let h1colour = $('[name=h1colour]');
  let font = $('[name=font]');

  if (!localStorage.getItem('pcolour'))
    localStorage.pcolour = "black";
  pcolour.val(localStorage.pcolour);
  if (!localStorage.getItem('h1colour'))
    localStorage.h1colour = "black";
  h1colour.val(localStorage.h1colour);
  if (!localStorage.getItem('font'))
    localStorage.font = "Arial";
  font.val(localStorage.font);
}

function updateColours() {
  var pcolour = $('[name=pcolour]').val();
  var h1colour = $('[name=h1colour]').val();
  var font = $('[name=font]').val();

  $('p').css('color', pcolour);
  localStorage.pcolour = pcolour;
  $('h1').css('color', h1colour);
  localStorage.h1colour = h1colour;
  $('body').css('font-family', font);
  localStorage.font = font;
}

$('[name=skift]').click(updateColours);
updateColours();

// Textarea work-around
$.valHooks.textarea = {
  get: function(elem) {
    return elem.value.replace(/\r?\n/g, "\r\n");
  }
};

$('[name=lavside]').click(function() {
  var sideNavn = $('[name=title]').val();
  $('[name=title]').val('');
  var id = sideNavn.replace(/\W/g, "a");
  var inner = $('[name=body]').val();
  $('[name=body]').val('');
  $('body').append('<article id="' + id + '" class="content">' +
  inner + '</article>');

  $('#navbar').append('<li><a href="#' + id + '" onclick="vismig(\''
  + id + '\')">' + sideNavn + '</a></li>');
})
