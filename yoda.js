function generateYodaSpeech(str) {
  console.log("Generate Yoda Speech");
  var answer = "";
  var key      = "ad7dfe8c9d5e4e42946ddca02995db54";

 $.getJSON('http://api.funtranslations.com/translate/yoda.json?text=' +
           encodeURIComponent(str),
           function(data) {
   answer = data.contents.translated + "!";
   console.log(answer);
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
//  answer = str + " this has been yoda-fied";
  console.log("It made it out of the get. Its returning: " + answer);
  onAjaxSuccess: return answer;
}
