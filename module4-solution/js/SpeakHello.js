
( function(window){
	var helloSpeaker = {};
	helloSpeaker.name = ["Oscar","Ana", "Hector", "Carolina", "Marlene", "Daniel"];
	helloSpeaker.name.length=name;

var speakWord = "Hello";

helloSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}
window.helloSpeaker = helloSpeaker;

})(window);
