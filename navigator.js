var home = document.querySelector('.home');
var me = document.querySelector('.me');
var secondPage = document.querySelector('.secondPage');
var firstPage = document.querySelector('.firstPage');
var main = document.querySelector('.main');

me.addEventListener('click',function(){
	firstPage.style.display = 'none';
	secondPage.style.display = 'block';
	main.style.backgroundImage = "url('img/bg.png')"

})
home.addEventListener('click',function(){
	secondPage.style.display = 'none';
	firstPage.style.display = 'block';
	main.style.backgroundImage ='none';
})