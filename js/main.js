function init() {
	
	console.log("data: " + data);
	console.log("data.lessons: " + data.lessons);
	
	/*
	$('<a/>', {
		'id' : 'lesson-button',
		'href':'lecke.html',
		'class':'btn btn-default btn-lg',
	}).on('click', function(){
		console.log(this.id); // myDiv
	}).appendTo('#lesson-list');
	
	$('<span/>', {
		'id' : 'lesson-alma',
		'class':'button-name',
	}).appendTo('#lesson-button');
	
	$('#lesson-alma').html("Almakukac");
	*/
	
	for (var lesson in data.lessons) {
		console.log(data.lessons[lesson]);
		
		var lessonName = data.lessons[lesson].title_eng;
		var lessonNameLC = lessonName.toLowerCase();
		
		$('<a/>', {
			'id' : "lesson-button-" + lessonNameLC,
			'href' : 'lecke.html',
			'class' : 'lesson-button btn btn-default btn-lg',
		}).on('click', function(){
			console.log(this.id); // myDiv
		}).appendTo('#lesson-list');
		
		$('<span/>', {
			'id' : "lesson-name-" + lessonNameLC,
			'class' : 'button-name',
		}).appendTo('#lesson-button-' + lessonNameLC);
		
		$("#lesson-name-" + lessonNameLC).html(lessonName);
	}
}