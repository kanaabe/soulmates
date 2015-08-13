$('.get-started').click(function(){
  var question = 1;
  var answers = [];
  $arr = $('fieldset')
  $('.welcome').fadeOut();

  $("fieldset[data-question=" + question + "]").fadeIn();

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