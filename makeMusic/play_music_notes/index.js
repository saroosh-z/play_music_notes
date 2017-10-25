


$ (document).ready (function () {
	
	//sound for note 'a'
	var note_a = document.getElementById('aAudio');

	$('.a').mouseover (function() {
		 note_a.currentTime = 0;
		 note_a.play();
		
		console.log('done');
	});
	
	//sound for note_b
	var note_b = document.getElementById('bAudio');
	$('.b').mouseover (function(){
		note_b.currentTime = 0;
		note_b.play();
		});

	//note_c sound
	var note_c = document.getElementById('cAudio');
	$('.c').mouseover (function(){
		note_c.currentTime = 0;
		note_c.play();
		});
	
	//note_d
	var note_d = document.getElementById('dAudio');
	$('.d').mouseover (function(){
		note_d.currentTime = 0;
		note_d.play();
		}) ;

	//note_e
	var note_e = document.getElementById('eAudio');
	$('.e').mouseover (function(){
		note_e.currentTime = 0;
		note_e.play();
		}) 


	


}); 




