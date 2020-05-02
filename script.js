let arr = [];
let numArr = [];

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
  $('#list-container').append(`<li>${$('#movie').val()} - ${$('#rating').val()} out of 10 <button class="delete-btn">Delete</button></li>`);
  //adding to alphabetical array
  arr.push(`${$('#movie').val()} - ${$('#rating').val()} out of 10`);
  //adding to numerical array - we need to have the number rating as a separate value by itself, but still
  //have it be associated with the movie title, so we put them both together in an array and later
  //get the 2nd value in this array
  numArr.push([Number($('#rating').val()), `${$('#movie').val()} - ${$('#rating').val()} out of 10`]);
  $('input').eq(0).val('');
  $('input').eq(1).val('');
});

//delete button event listener.  We have to put it on the grandparent element, #list-container, because
//both .delete-btn and its parent li are not created when the script runs.  We need to put it on something
//that already exists on the page when the script runs.  

//Before we delete the list item, we delete the matching movie from our arr and numArr as well
$('#list-container').on('click', '.delete-btn', function () {
  arr = arr.filter(movie => $(this).parent().text() !== movie + " Delete");
  numArr = numArr.filter(movie => $(this).parent().text() !== movie[1] + " Delete")
  $(this).parent().remove();
})

//sorting alphabetically in ascending order
$('#a-z').on('click', function () {
  if ($('li').length >= 2) {
    $('li').remove();
    arr.sort();
    arr.forEach(movie => $('<li>').html(`${movie} <button class="delete-btn">Delete</button>`).appendTo('#list-container'));
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
    arr.forEach(movie => $('<li>').html(`${movie} <button class="delete-btn">Delete</button>`).appendTo('#list-container'));
  } else {
    return;
  }
})

//sorting by rating number in ascending order
$('#zero-10').on('click', function () {
  if ($('li').length >= 2) {
    $('li').remove();
    numArr.sort(function (a, b) { return a[0] - b[0] });
    numArr.forEach(movie => $('<li>').html(`${movie[1]} <button class="delete-btn">Delete</button>`).appendTo('#list-container'));
  } else {
    return;
  }
})

//sorting by rating number in descending order
$('#ten-0').on('click', function () {
  if ($('li').length >= 2) {
    $('li').remove();
    numArr.sort(function (a, b) { return b[0] - a[0] });
    numArr.forEach(movie => $('<li>').html(`${movie[1]} <button class="delete-btn">Delete</button>`).appendTo('#list-container'));
  } else {
    return;
  }
})