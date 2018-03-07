$(function() {
  $(".eat-burger").on("click", function(event) {
    let id = $(this).data("id");
    let newDevour = $(this).data("newDevour");

    let newDevourState = {
      devour: newDevour
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    let newBurger = {
      name: $("#burger-name").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});