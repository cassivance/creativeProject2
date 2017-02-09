// run dat code
$("#submit").on("click", function() {
  var yodaSpeech = generateYodaSpeech($("#speech").val());

  var key      = "ad7dfe8c9d5e4e42946ddca02995db54";
  var question = $("#speech").val();
  var answer   = "";

  if (!question) {
    $.speech({
        key  : key                  ,
        src  : 'Put a question, you did not!',
        hl   : 'en-us'              ,
        r    : -2                   ,
        c    : 'mp3'                ,
        f    : '44khz_16bit_stereo' ,
        ssml : false
    });
  }
  else {
    $.getJSON("https://8ball.delegator.com/magic/JSON/" +
              encodeURIComponent(question),
              function(data) {
      answer = data.magic.answer + "!";
      console.log("This is the answer: "+ answer);
    })
    .done(function() {
      $.speech({
          key  : key                  ,
          src  : answer               ,
          hl   : 'en-us'              ,
          r    : -2                   ,
          c    : 'mp3'                ,
          f    : '44khz_16bit_stereo' ,
          ssml : false
      });
    });
  }
  $("#speech").val("").focus();
});
