'use strict';

function startApp() {
  loadData();
  
}

function loadData() {

  const success = images => displayPage(images);
  const failure = error => console.error(error);

  $.get('data/page-1.json', 'json')
    .then(success)
    .catch(failure);
}

function displayPage(images) {

  images.forEach(image => {
    const $newImage = $('#photo-template').clone();

    $newImage.find('h2').text(image.title);
    //    $newImages.find('h3').text(image.rank);
    //    $newImages.find('p').text(image.type);

    //    $newSnack.removeClass('snack-template');
    //    $newSnack.attr('data-type'.snack

    $('.photo').append($newImage);

    // $('h2').text(Image.name);
    // $('h3').text(snack.rank);
    // $('p').text(snack.type);
  })
  // console.log('snacks', snacks)
}
$(startApp)