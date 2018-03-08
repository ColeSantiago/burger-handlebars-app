$(function() {
  $('.eat-burger').on('click', function(event) {
    let id = $(this).data('id');
    let newDevour = $(this).data('newDevour');

    let newDevourState = {
      devoured: 1
    };

    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: newDevourState
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $('.create-form').on('submit', function(event) {
    event.preventDefault();
    let newBurger = {
      burger_name: '"' + $('#burger-name').val().trim() + '"',
      devoured: 0
    };
    console.log(newBurger);
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(
      function() {
        console.log('created new burger');
        location.reload();
      }
    );
  });
});