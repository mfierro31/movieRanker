const arr = [];
const numArr = [];

$('form').on('submit', function (evt) {
  //if we don't do this, our list items will immediately disappear because page will refresh
  evt.preventDefault();
  //check to see if movie title is at least 2 characters long
  if ($('#movie').val().length < 2) {
    alert('Movie title must be 2 characters or longer!');
    $('input').eq(0).val('');
    $('input').eq(1).val('');
    return;
  }
  $('body').append(`<li>${$('#movie').val()} - ${$('#rating').val()} out of 10</li>`);
  //adding to alphabetical array
  arr.push(`${$('#movie').val()} - ${$('#rating').val()} out of 10`);
  //adding to numerical array - we need to have the number rating as a separate value by itself, but still
  //have it be associated with the movie title, so we put them both together in an array and later
  //get the 2nd value in this array
  numArr.push([Number($('#rating').val()), `${$('#movie').val()} - ${$('#rating').val()} out of 10`]);
  $('input').eq(0).val('');
  $('input').eq(1).val('');
});

//sorting alphabetically in ascending order
$('#a-z').on('click', function () {
  if ($('li').length >= 2) {
    $('li').remove();
    arr.sort();
    arr.forEach(movie => $('<li>').text(movie).appendTo('body'));
  } else {
    return;
  }
})

//sorting alphabetically in descending order
$('#z-a').on('click', function () {
  if ($('li').length >= 2) {
    $('li').remove();
    arr.sort();
    arr.reverse();
    arr.forEach(movie => $('<li>').text(movie).appendTo('body'));
  } else {
    return;
  }
})

//sorting by rating number in ascending order
$('#zero-10').on('click', function () {
  if ($('li').length >= 2) {
    $('li').remove();
    numArr.sort(function (a, b) { return a[0] - b[0] });
    numArr.forEach(movie => $('<li>').text(movie[1]).appendTo('body'));
  } else {
    return;
  }
})

//sorting by rating number in descending order
$('#ten-0').on('click', function () {
  if ($('li').length >= 2) {
    $('li').remove();
    numArr.sort(function (a, b) { return b[0] - a[0] });
    numArr.forEach(movie => $('<li>').text(movie[1]).appendTo('body'));
  } else {
    return;
  }
})