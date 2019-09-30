var configProfile = {
  "profile": {"screenName": '_FiveM'},
  "domId": 'tweet',
  "maxTweets": 5,
  "enableLinks": false, 
  "showUser": false,
  "showTime": true,
  "showImages": true,
  "lang": 'en'
};
twitterFetcher.fetch(configProfile);

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
var i = 1;
function changeTweet(){
	var tweets = document.getElementsByTagName("li");
	var style = document.getElementById("styles");
		if (i == 0){
			style.innerHTML="<style> .twitter ul > li:nth-child(1){display:inline;} .twitter ul > li:nth-child(2) {display:none;} .twitter ul > li:nth-child(3) {display:none;} .twitter ul > li:nth-child(4) {display:none;} .twitter ul > li:nth-child(5) {display:none;} </style>";
			i=1;
		}
		else if (i==1){
			style.innerHTML="<style> .twitter ul > li:nth-child(1){display:none;} .twitter ul > li:nth-child(2) {display:inline;} .twitter ul > li:nth-child(3) {display:none;} .twitter ul > li:nth-child(4) {display:none;} .twitter ul > li:nth-child(5) {display:none;} </style>";
			i=2;
		}
		else if (i==2){
			style.innerHTML="<style> .twitter ul > li:nth-child(1){display:none;} .twitter ul > li:nth-child(2) {display:none;} .twitter ul > li:nth-child(3) {display:inline;} .twitter ul > li:nth-child(4) {display:none;} .twitter ul > li:nth-child(5) {display:none;} </style>";
			i=3;
		}
		else if (i==3){
			style.innerHTML="<style> .twitter ul > li:nth-child(1){display:none;} .twitter ul > li:nth-child(2) {display:none;} .twitter ul > li:nth-child(3) {display:none;} .twitter ul > li:nth-child(4) {display:inline;} .twitter ul > li:nth-child(5) {display:none;} </style>";
			i=4;
		}
		else if (i==4){
			style.innerHTML="<style> .twitter ul > li:nth-child(1){display:none;} .twitter ul > li:nth-child(2) {display:none;} .twitter ul > li:nth-child(3) {display:none;} .twitter ul > li:nth-child(4) {display:none;} .twitter ul > li:nth-child(5) {display:inline;} </style>";
			i=0;
		}
	}
setInterval(changeTweet,10000);
		

