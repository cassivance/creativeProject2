function generateYodaSpeech(str) {
  console.log("generateYodaSpeech");


  // convert str to yoda text

  // curl --get --include 'https://yoda.p.mashape.com/yoda?sentence=You+will+learn+how+to+speak+like+me+someday.++Oh+wait.' \
  // -H 'X-Mashape-Key: lQQL9xr2yDmsh1XwiBGjh2KZkhVBp1GpuhnjsnzNdw9GYUcSuE' \
  // -H 'Accept: text/plain'


  var output = $.ajax({
     url: 'https://yoda.p.mashape.com/yoda?sentence='+str,
     type: 'GET',
     data: {}, // Additional parameters here
     dataType: 'json',
     success: function(data) {
         //Change data.source to data.something , where something is whichever part of the object you want returned.
          console.log(data);
        	document.getElementById("output").innerHTML = data.source;
         },
     error: function(err) { alert(err); },
     beforeSend: function(xhr) {
     xhr.setRequestHeader("X-Mashape-Authorization", "fGHnIOQRL6mshzfTGFZwCFludwkmp1nyzdNjsnAjd2Mnfkdulc"); // Enter here your Mashape key
     }
 });




  return str;
}
