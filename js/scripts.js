$(function() {
  $("form#task").submit(function(event) {
    event.preventDefault();
    var inputtedTask = $("input#new-task").val();
    var description = $("input#new-description").val();

    var newTask = { task: inputtedTask, newDescription: description };

    $("ul#each-task").append("<li><span class='task'>" + newTask.task + ": " + newTask.newDescription + "</span></li>");
    $(".task").last().click(function() {
      $("#each-task").show();
    });
  $("input#new-task").val("");
  $("input#new-description").val("");
  });

});
