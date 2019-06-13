function showDefine() {
    $('#projects-button').click(function() {
    navAnimation('#1');
    showProjects();
  })
}

function showProjects() {
  $('.main-content .content-wrap').children().hide();
  $('.projects-wrap').fadeIn();
  $('.main-content').addClass("clear-padding");
  $('.main-content').removeClass("align-center");
}

function showAbout() {
  $('.main-content .content-wrap').children().hide();
  $('#about').fadeIn();
  $('.main-content').removeClass("clear-padding");
  $('.main-content').addClass("align-center");
}


function navAnimation(selection) {
  if (selection === '#0') {
    $('#0').addClass('nav-link-open');
    $('#1, #2').removeClass('nav-link-open');
  } else if (selection === '#1') {
    $('#1').addClass('nav-link-open');
    $('#0, #2').removeClass('nav-link-open');
  } else {
    $('#2').addClass('nav-link-open');
    $('#0, #1').removeClass('nav-link-open');
  }
}

$(function() {
  var year = new Date().getFullYear()
  navAnimation('#0');
  showDefine();
  
});