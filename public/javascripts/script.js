$(document).ready(function () {
  $('[name="checkbox"]').change(function () {
    if ($('[name="checkbox"]:checked').is(":checked")) {
      $(".np").hide();
      $(".sh").show();
    } else {
      $(".np").show();
      $(".sh").hide();
    }
  });
});
