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
        var md = window.markdownit();
        var resulthtml = "<div class='result-section'><h1>" + result.name + " is your soulmate!</h1><img src=" + result.photoURL + " width=400 height=400><p>" + md.render(result.bio) +  "</p></div>"
        $('#results').html(resulthtml);
        $('#results').show();
      }
    });
  }


  var soulmate = function(answers){
    var artists = [
      {name: 'Andy Warhol', points: 0, bio: 'You are a mysterious lynchpin, charismatic but difficult to pin down, with an ambiguous relationship to the American dream. More than any other artist, Andy Warhol—the pioneer of Pop Art—is synonymous with the celebrity culture, consumerism, and sexual liberation of the drug-fueled 1960s. He embodied New York-cool with his Factory—less an artist\’s studio than a melting pot for everyone from the rich and famous to runaways, underground artists and addicts. He collected friends like the Velvet Underground and Edie Sedgwick. But as boisterous as his art—and the scene at the Factory—were, Warhol remained always evasive: more the host of the party than its center of attention, and his art reflected this. It drew on graphic design and illustration, often appropriating photographs of movie stars like Marilyn Monroe or images of Americana (like his iconic Campbell\’s Soup can) and repeating them, over and over again as if manufacturing consumer goods, to remove any trace of emotion. Always the enigma, he\’s claimed both that he likes everyone, as well as \"I don\'t believe in feelings and emotions, but I have them. I wish I didn\'t."', photoURL: 'https://d32dm0rphc51dk.cloudfront.net/1oCMJ7vjexOIyB8Cu_2CiA/large.jpg'},
      {name: 'Pablo Picasso', points: 0, bio: 'You are the life of the party, and, if your personal style isn\’t French nautical, you should consider buying a striped shirt. So iconic is this signature garment that, when the Italian prankster/artist Maurizio Cattelan dressed up as a Disney-style Picasso character to greet visitors to New York\’s Museum of Modern Art, he wore a striped shirt. Pablo Picasso is arguably one of the most important artists of the 20th century, known for both his moody, blue period of the early 1900s and the watershed Cubism movement. Originally from Spain, Picasso was at the center of artistic experimentation in Paris, and his legacy has become synonymous with the figure of the bohemian genius: he was both prolific (it\’s rumored he produced over 80,000 canvas over the course of his career) and promiscuous (he was a notorious womanizer, and his many mistresses often acted as muses for the female figures in his work). But his work wasn\’t all fragmented planes (the defining trait of Cubism) or distorted, beautiful women. Perhaps one of his most famous works was the black-and-white mural _Guernica_, a brutal, semi-abstract scene of the violence of the Spanish Civil War.   After his radical innovations, in 1947 he became even ore politicized, and announced his dedication to the Communist party.', photoURL: 'http://41.media.tumblr.com/tumblr_la69q3Y80N1qzqjgzo1_1280.jpg'},
      {name: 'Salvador Dali', points: 0, bio: 'What’s up, weirdo? You are a defiant individualist, resisting convention and indulging your wild imagination whenever possible. Your soulmate? Salvador Dali, the 20th-century surrealist from Spain. Dali had superior painting skills, though he deployed them not for traditional portraits, but for other-wordly landscapes decorated with melting clocks, snails and other bizarre symbols. Maybe you guys can go ride elephants together!', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Salvador_Dali_NYWTS.jpg'}, //2
      {name: 'Georgia O\'Keefe', points: 0, bio: 'You\’re an innovative inventor with an unquenchable thirst for knowledge. Possibly  an introvert, maybe even a bit of a hermit (after spending most of her time camping and exploring the rugged desert of New Mexico in the 1930s, O\’Keefe moved to a property so remote it was called Ghost Ranch), you\’d prefer attending to details, doing watercolors, or collecting rocks and bones in the wild to attending a party. The mother of modern American art, O\’Keefe is known for her voluptuous paintings of flowers (these are often viewed as a more supple, feminine approach to abstraction than the cold, intellectual art of her male peers), as well as her paintings of the American Southwest, which often contain animal skulls and hovering antlers against arid mountain landscapes. In 2006, a fossil of an archosaur discovered in Ghost Ranch was named after her: _Effigia okeeffeae_ (\“O\’Keeffe\’s Ghost\”).', photoURL: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Georgia_O\'Keeffe.jpg'}, //3
      {name: 'Leonardo DaVinci', points: 0, bio: 'You are a curious thinker and tinkerer who can\’t resist an intellectual debate. Fiercely intelligent, indefatigable and multiply talented, you are—like da Vinci—a true Renaissance man (or woman). Da Vinci, perhaps more than any other artist of the Renaissance, embodies the infinite curiosity of that era, its dedication to humanism and emphasis on scientific observation in the face of irrational religious belief. Sources from the time portray him as a classic ENTP-personality type (these people enjoy debate and value truth over feeling). Best known of course as an artist for creating the most enigmatic smile in human history—the _Mona Lisa_—he was also a mathematician, inventor, architect, engineer, anatomist, botanist, historian, writer who created rudimentary solar power and a calculator, contributing to the flourishing cultural and scientific scene in Florence in the 15th Century.', photoURL: 'https://d32dm0rphc51dk.cloudfront.net/bH2NSf9KhfYgijoSTHvnrg/large.jpg'}, //4
      {name: 'Vincent Van Gogh', points: 0, bio: 'You are a dark and brooding soul brimming with vibrant potential. The king of Neo-Impressionism, Dutch painter Vincent van Gogh revolutionized painting in France in the 1880s with his quick brushstrokes and heavily layered paint, depicting landscapes, interiors, still-lifes, and portraits. A prolific worker and known recluse, he would have no time for parties. His stormy temperament was more evident in his early works such as the _Potato Eaters_, painted in morose colors and representing the hardship of rural farm life. Soon after cutting off his own ear during a psychotic fit in 1888, van Gogh departed from his temporary home in Paris to an asylum in Arles down south. There the sun shined brightly, and with the additional influence of vivid Japanese wood-block prints he transformed his color palette to include rich orange and yellow hues. Despite the positive change of scenery, van Gogh\’s mental health worsened, and at the age of 37 he died of a self-inflicted gunshot wound. An impoverished artist during his lifetime, he would posthumously achieve great fame through memorial retrospectives and critical acclaim. \“As we advance in life it becomes more and more difficult, but in fighting the difficulties the inmost strength of the heart is developed.\”', photoURL:'https://d32dm0rphc51dk.cloudfront.net/sr7ZCUDEf5JQDYa9-BhmQQ/large.jpg'}, //5
      {name: 'Jean Michel Basquiat', points: 0, bio:'You Radiant Child You! Insightful and perceptive, your mystique and allure come just as much from your creative genius as they do from your casual disruption of rigid rules and absolute authority. The legacy of Haitian-American painter Jean Michel Basquiat is defined both by his remarkable talent and continued celebrity and the tragedy of his early death. Writer bell hooks said that in his painting, Basquiat \“assumed the role of explorer/ colonizer,\” journeying into any cultural territory and staking claims on anything and everything around him, from jazz to hip hop, to politics to racial stereotypes, using elements of text and symbols (the symbol of the crown is perhaps best known) and refashioning them into his expressionist paintings. Though he struggled with the misconceptions of being a black artist in the mainstream artworld, Basquiat\’s talent made him a major part of New York City\’s East Village art explosion in the late 1970s through the 80s alongside artists like Keith Haring and Kenny Scharf. Outside of his art, Basquiat\’s charisma and looks quickly earned him a cult status - legendary in the street art scene for his graffiti under the moniker Samo - notorious as a partygoer and general bon vivant on the Lower East Side social scene - and beloved by celebrities like Andy Warhol, Debbie Harry and David Bowie.  Basquiat\’s brilliant life was cut short, aged just 27, in 1988, after losing a struggle with heroin addiction.', photoURL: 'https://d32dm0rphc51dk.cloudfront.net/hSjwJh-KbzDGDrSfyIOWoA/large.jpg'}, //6
      {name: 'Damien Hirst', points: 0, bio: 'You are synonymous with the gritty,  bad-boy attitude of 1990s London. Skull rings? Pills for breakfast? Who would have thought that this is what pays. Hirst broke out onto the scene as a so-called Young British Artist (YBA) alongside the likes of Tracey Emin and Marc Quinn. Their provocative, sometimes gothically-inspired and sex-and-celebrity-laden art won the attention of famed advertiser Charles Saatchi, who became a major champion of their work. Hirst made waves with his stuffed shark, suspended in a tank of formaldehyde, called _The impossibility of death in the eyes of someone living_ (this was the basis of the art-market critique _The $12 million stuffed shark_).  ', photoURL: 'http://mangoblack.com/wp-content/uploads/2010/11/damien_hirst_skull21.jpg'}, //7
      {name: 'Ai Weiwei', points: 0, bio: 'You are a gentle soul but can be fearless when speaking truth to power. Contemporary Chinese conceptual artist and activist Ai Weiwei has risked life and limb in his artistic practice, which takes aim at China\’s obsession with tradition and its repressive politics. For one series, he photographed himself flipping off historic monuments, in another he shattered a priceless Han-Dynasty urn. For his dissident actions he was brutally beaten and disappeared for a stretch of months by the Chinese government, causing an international uproar (even German chancellor Angela Merkel got involved) over China\’s human rights abuses. But Ai is no one-dimensional firebrand: around the time of the global craze for Cai’s _Gangnam Style_, he posted a youtube video of him and two friends performing the famously hilarious dance. And he\’s probably one of the top-followed artists on Instagram, where, like a true social-media maven, he frequently posts about his 40 (or so) cats.', photoURL: 'https://d32dm0rphc51dk.cloudfront.net/6SMdJZqK-haWrVYa0siDUw/large.jpg'}, //8
      {name: 'Marcel Duchamp', points: 0, bio: 'You don\’t only think outside the box, you redefine it. Many people can’t tell if you’re creative or analytical because, in the end, you’re both. French artist Marcel Duchamp is associated with the revolutionary Dada movement that arose in Europe in the late 19-teens. In 1913, he notoriously exhibited a urinal at an important exhibition at the Armory in New York, a move that radically changed the definition of art in the 20th century. Duchamp introduced the idea of \“anti-art\”: art could be about  _doing_, not just making, which meant that performance, antics and mischief all became fair game. In fact if you\’ve ever moustachified a picture, you’re paying homage to Duchamp: for his work  _LHOOQ_ from 1919, he drew a mustache on an image of the _Mona Lisa_. Duchamp learned to play chess at age 13, and at one point even gave up art-making to be a competitive chess player (he represented France in the chess Olympiads). It tuns out though that chess and art were one and the same for him. In answer to the question, \“What is art?\”, Duchamp famously responded, \“That little game that men have always played with one another.\”', photoURL:'https://d32dm0rphc51dk.cloudfront.net/kjI5KolrNWM1KPmefPUafA/large.jpg'}, //9
      {name: 'Frida Kahlo', points: 0, bio: 'You are a complex, whimsical idealist, and your work and personal life are often intertwined. One of the most recognized female artists of the twentieth century, Frida Kahlo represents the artistic renaissance in Mexico in the 1930s, and was an early champion of the selfie (or, as they are traditionally called, the self-portrait). She was fueled by her revolutionary ideals, going so far as to claim she was born in 1910 rather than 1907 to align her identity with the beginning of the Mexican Revolution. Kahlo\’s nationalist fervor and devotion to Mexican folk art inspired her festive Tehuana sartorial choices, gaining her a reputation for bold and exotic fashion choices (especially amongst the New York elite who would embrace her). Her tumultuous marriage to the revolutionary muralist Diego Rivera and her beloved pet deer only contribute to her eccentric but lovable persona. At heart though, Kahlo was a deeply troubled woman with chronic ailments from a childhood accident, and sought to express her experiences through her paintings. Refusing to be labeled a realist or a surrealist, Kahlo claimed, \“I paint my own reality. The only thing I know is that I paint because I need to, and I paint whatever passes through my head without any other consideration.\”', photoURL: 'https://d32dm0rphc51dk.cloudfront.net/l09mxAzyk2dYbBTTnWA-bw/large.jpg'}, //10
      {name: 'Yayoi Kusama', points: 0, bio: 'You are a creative force to be reckoned with, and straight up dotty! A staple on art world for decades, Japanese multi-media artist Yayoi Kusama is best known for her role in the New York avant-garde, her early contributions to the Pop movement, and for her large-scale installations that explore the nature of reality and infinity. A mover and shaker in the 1960s New York art scene along with friends Donald Judd and Eva Hesse, she produced nude happenings and psychedelic works, later returning to her native Japan in the early 1970s for a quieter life. Her obsessive-compulsive neuroses led her to voluntarily admit herself into an institution in Tokyo, where she continues to live and work, now well into her eighties. After exhibiting a dizzyingly mirrored room specked in tiny pumpkin sculptures at the 1993 Venice Biennale to great aplomb, Kusama finally began receiving her due as one of the most important living Japanese artists. Since then, she has continued to use the pumpkin as an autobiographical device, in addition to the brightly colored polka-dot, which for her physically represents the infinite. You\’re likely to find her dressed in a self-designed polka-dot outfit and red wig, sitting against a background papered in the same pattern. \“With just one polka dot, nothing can be achieved. In the universe, there is the sun, the moon, the earth, and hundreds of millions of stars. All of us live in the unfathomable mystery and infinitude of the universe. Pursuing philosophy of the universe through art under such circumstances has led me to what I call stereotypical repetition.\”', photoURL: 'http://whitney.org/image_columns/0037/7964/kusama_800_626.jpg'} //11
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
    var winner = artistsSorted[0];
    // return winner;
    return artists[9];
  }

})
