var home = document.querySelector('.home');
var me = document.querySelector('.me');
var secondPage = document.querySelector('.secondPage');
var firstPage = document.querySelector('.firstPage');

me.addEventListener('click',function(){
	firstPage.style.display = 'none';
	secondPage.style.display = 'block';
})
home.addEventListener('click',function(){
	secondPage.style.display = 'none';
	firstPage.style.display = 'black';
})