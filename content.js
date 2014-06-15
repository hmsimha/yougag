window.setTimeout(function() {
  var adbutton = document.querySelectorAll('.videoAdUiSkipButton')[0];
  if (adbutton) {
    var mutebutton = document.querySelectorAll(".ytp-button-volume")[0];
    mutebutton.click();
    window.setTimeout(function() {
      adbutton.click();
      mutebutton.click();}, 6000);
  }}, 500);