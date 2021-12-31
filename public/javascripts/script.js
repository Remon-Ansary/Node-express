$(document).ready(function () {
  $('[name="graduate"]').change(function () {
    if ($('[name="graduate"]:checked').is(":checked")) {
      $(".np").hide();
      $(".sh").show();
    } else {
      $(".np").show();
      $(".sh").hide();
    }
  });
});
