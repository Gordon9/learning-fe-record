$(function () {
  $("#link-reg").on("click", function () {
    $(".login-box").hide();
    $(".reg-box").show();
  });
  $("#link-login").on("click", function () {
    $(".reg-box").hide();
    $(".login-box").show();
  });
});
