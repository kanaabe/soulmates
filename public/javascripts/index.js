// Clicks get started
$('.get-started').click(function(){
  var question = 1;
  var answers = [];
  var timer;
  $arr = $('fieldset')
  $('.welcome').fadeOut();

  // timer setup
  var totalSeconds = 30;
  var $seconds = $('.seconds')
  var timer;
  // Show sketcher
  $('.sketch').fadeIn(function(){
    timer = setInterval(setTime, 1000);
    $('.done').click(function(){
      totalSeconds = 0;
    });
  });
  function setTime(){
    totalSeconds--;
    $('.seconds').html(totalSeconds);
    if(totalSeconds <= 0){
      clearTimeout(timer);
      var destcanvas = document.getElementById('completed-canvas');
      var ctx = destcanvas.getContext("2d");
      ctx.drawImage(document.getElementById('colors_sketch'), 10,10,400,300 );
      $('.sketch').fadeOut(function(){
        $("fieldset[data-question=" + question + "]").fadeIn();
      })
    }

  // on the form's input change change question
  }
  $('form input').change(function(e){
    setQuestion(e)
  })

  var setQuestion = function(e){
    answers = answers.concat($(e.currentTarget)[0].value);
    $("fieldset[data-question=" + question + "]").fadeOut(function(){
      question = question + 1;
      $("fieldset[data-question=" + question + "]").fadeIn();
      if(answers.length == 11){
        var result = soulmate(answers);
        console.log(answers);
        console.log(result);
        $('#results').html(result[0])
        // $('#results').show();
        // if(result.length > 1){
        //   console.log('tie')
        // }else{
        // }
      }
    });
  }


  var soulmate = function(answers){
    var artists = [
      {name: 'Andy Warhol', points: 0}, //0
      {name: 'Pablo Picasso', points: 0}, //1
      {name: 'Salvador Dali', points: 0}, //2
      {name: 'Georgia O\'Keefe', points: 0}, //3
      {name: 'Leonardo DaVinci', points: 0}, //4
      {name: 'Vincent Van Gogh', points: 0}, //5
      {name: 'Jean Michel Basquiat', points: 0}, //6
      {name: 'Damien Hirst', points: 0}, //7
      {name: 'Ai Weiwei', points: 0}, //8
      {name: 'Marcel Duchamp', points: 0}, //9
      {name: 'Frida Kahlo', points: 0}, //10
      {name: 'Yayoi Kusama', points: 0} //11
    ]
    console.log(answers);
    if (answers[0] == "1") artists[1].points ++;
    if (answers[0] == "2") artists[3].points ++;
    if (answers[0] == "3") artists[4].points ++;
    if (answers[0] == "4") artists[5].points ++;
    if (answers[0] == "5") artists[6].points ++;
    if (answers[0] == "6") artists[10].points ++;
    if (answers[1] == "no") artists[9].points ++;
    if (answers[2] == "undecided") artists[0].points ++;
    if (answers[2] == "socialist") artists[1].points ++, artists[5].points ++;
    if (answers[2] == "conservative") artists[2].points ++;
    if (answers[2] == "oppositional") artists[8].points ++;
    if (answers[2] == "revolutionary") artists[2].points ++;
    if (answers[3] == "1960") artists[0].points ++, artists[11].points ++;
    if (answers[3] == "1900") artists[1].points ++;
    if (answers[3] == "1920") artists[2].points ++, artists[9].points ++;
    if (answers[3] == "1930") artists[3].points ++, artists[10].points ++;
    if (answers[3] == "renaissance") artists[4].points ++;
    if (answers[3] == "19thcentury") artists[5].points ++;
    if (answers[3] == "1980") artists[6].points ++;
    if (answers[3] == "1990") artists[7].points ++;
    if (answers[3] == "2000") artists[8].points ++;
    if (answers[4] == "newyork") artists[0].points ++, artists[6].points ++;
    if (answers[4] == "paris") artists[1].points ++, artists[5].points ++, artists[9].points ++;
    if (answers[4] == "madrid") artists[2].points ++;
    if (answers[4] == "santafe") artists[3].points ++;
    if (answers[4] == "florence") artists[4].points ++;
    if (answers[4] == "london") artists[7].points ++;
    if (answers[4] == "shanghai") artists[8].points ++;
    if (answers[4] == "mexicocity") artists[10].points ++;
    if (answers[4] == "tokyo") artists[11].points ++;
    if (answers[5] == "dog") artists[0].points ++;
    if (answers[5] == "deer") artists[3].points ++, artists[10].points ++;
    if (answers[5] == "dinosaur") artists[6].points ++;
    if (answers[5] == "cat") artists[8].points ++;
    if (answers[6] == "desert") artists[3].points ++;
    if (answers[6] == "tinkering") artists[4].points ++;
    if (answers[6] == "hanging") artists[6].points ++;
    if (answers[6] == "chess") artists[9].points ++;
    if (answers[6] == "redecorate") artists[11].points ++;
    if (answers[7] == "host") artists[0].points ++, artists[9].points ++;
    if (answers[7] == "life") artists[1].points ++, artists[2].points ++, artists[7].points ++;
    if (answers[7] == "planner") artists[3].points ++;
    if (answers[7] == "debator") artists[4].points ++;
    if (answers[7] == "crasher") artists[6].points ++;
    if (answers[7] == "costume") artists[10].points ++, artists[11].points ++;
    if (answers[8] == "soup") artists[0].points ++;
    if (answers[8] == "lobster") artists[2].points ++;
    if (answers[8] == "potatoes") artists[5].points ++;
    if (answers[8] == "pills") artists[7].points ++;
    if (answers[8] == "sunflowerseeds") artists[8].points ++;
    if (answers[8] == "pie") artists[11].points ++;
    if (answers[9] == "moustache") artists[2].points ++, artists[9].points ++;
    if (answers[9] == "beard") artists[4].points ++, artists[5].points ++, artists[8].points ++;
    if (answers[10] == "dots") artists[7].points ++, artists[11].points ++;
    if (answers[10] == "stripes") artists[1].points ++;

    function pointsCompare(a, b){
      return (parseInt(b.points) - parseInt(a.points));
    }

    var artistsSorted = artists.sort(pointsCompare);
    var winner = [artistsSorted[0]];
    // for (var i = 1; i < 11; i++){
    //   console.log(artistsSorted[i]);
    //   if (artistsSorted[0].points == artistsSorted[i].points) winners.push(artistsSorted[i]);
    // }
    // if (winners.length == 1) return winners[0];
    // $('.class')
    //   .html = "<div>"
    //   .transition('slidein')
    // return winner;
    return artists[0];
  }

})
