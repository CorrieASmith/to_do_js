$(function() {
  $("form#task").submit(function(event) {
    event.preventDefault();
    var inputtedTask = $("input#new-task").val();
    var description = $("input#new-description").val();

    var newTask = { task: inputtedTask, newDescription: description };

    $("ul#each-task").append("<li><div class='checkbox'><input type='checkbox'></div><span class='task'>" + newTask.task + ": " + newTask.newDescription + "</span></li>");
    $(".task").last().click(function() {
      $("#each-task").show();
    });
  $("input#new-task").val("");
  $("input#new-description").val("");

    $("li").click(function() {
      $(this).appendTo("#completed");
      $(".checkbox").hide(this);
      $(".checkbox").show(this);
      event.preventDefault();
    });
  });
});
