$(document).ready(function () {
  $('[name="graduate"]').change(function () {
    if ($('[name="graduate"]:checked').is(":checked")) {
      $(".ug").hide();
      $(".phd").show();
    } else {
      $(".ug").show();
      $(".phd").hide();
    }
  });
});
