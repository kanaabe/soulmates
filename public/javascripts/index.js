$('.get-started').click(function(){
  var question = 1;
  var answers = [];
  var timer;
  $arr = $('fieldset')
  $('.welcome').fadeOut();

  var totalSeconds = 30;
  var $seconds = $('.seconds')
  var timer;

  $('.sketch').fadeIn(function(){
    timer = setInterval(setTime, 1000);
  });

  function setTime(){
    totalSeconds--;
    $('.seconds').html(totalSeconds);

    if(totalSeconds == 0){
      clearTimeout(timer);
      $('.sketch').fadeOut();
      $("fieldset[data-question=" + question + "]").fadeIn();
    }

  }
  $('form input').change(function(e){
    setQuestion(e)
  })

  var setQuestion = function(e){
    answers = answers.concat($(e.currentTarget)[0].value);
    $("fieldset[data-question=" + question + "]").fadeOut();
    question = question + 1;
    $("fieldset[data-question=" + question + "]").fadeIn();
    if(answers.length == 11){
      results(answers);
    }
  }

})
