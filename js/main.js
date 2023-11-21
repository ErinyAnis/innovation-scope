$(document).ready(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $("nav").addClass("fixed-top");
        } else {
            $("nav").removeClass("fixed-top");
        }
    });

    // $(selector).countMe(delay,speed)
    $(".counter-y").countMe(500, 65);
    $(".counter-c").countMe(500, 65);
    $(".counter-p").countMe(500, 65);

    
});

const SENTENCE_DELAY = 1000;
let sentencesForFading = document.querySelectorAll('.faded-sentence');
let timer = null;

//split the sentence and wrap each word in a span
sentencesForFading.forEach(sentence=>{
	sentence.innerHTML = sentence.textContent.split(' ').map(word=>'<span class="faded-word">'+word+'</span>').join(' ');
});


//setup auto advance to next word after the transition completes
const wordsForFading = document.querySelectorAll('.faded-word');
wordsForFading.forEach(word=>{
	word.addEventListener('transitionend', startNextWordAnimation);
});

//either show the next word, or start the next sentence
function startNextWordAnimation(e){
	const nextWord = e.target.nextElementSibling;
	if( nextWord ){
		 	e.target.removeEventListener('transitionend', startNextWordAnimation);
			nextWord.classList.add('faded-activated');
	} else {
		const nextSentence = e.target.parentElement.nextElementSibling;
		if( nextSentence && nextSentence.classList.contains('faded-sentence') ){
			startSentence(nextSentence);			
		} else {
			console.log('last sentence complete');
		}
	}
}

function startSentence(sentenceElement){
	console.log(sentenceElement);
	if(!sentenceElement){
		return;
	}
	timer = setTimeout(()=>{
		sentenceElement.querySelector('.faded-word').classList.add('faded-activated');	
	}, SENTENCE_DELAY)
}

//querySelector grabbing the first matching queried element
startSentence(document.querySelector('.faded-sentence'));

