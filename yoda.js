function generateYodaSpeech(str) {
  console.log("Generate Yoda Speech");
  var answer = "";
 $.getJSON('http://yoda-api.appspot.com/api/v1/yodish?text=' +
           encodeURIComponent(str),
           function(data) {
   answer = data.contents.translated + "!";
   console.log(answer);
 });
  return answer;
}
