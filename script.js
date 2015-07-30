var time = 1000;
//функція довільної позиції
function leftPosition () {
	var left = Math.floor(Math.random()*(460-1)+1);
	return left;
}
// функція довільного кольору
function getRandomColor() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
    	return color;
}
//функція створення нового елементу
function createElement() {
	time = Math.floor(Math.random()*(5000-1000)+1000);
	var newDiv = document.createElement("div");
	newDiv.setAttribute("class","elem");
	var wrap = document.getElementById("wrap");
	wrap.appendChild(newDiv);
	newDiv.style.left = leftPosition() + 'px';
	newDiv.style.backgroundColor = getRandomColor();
}
//функція видалення еленентів
// function deleteNode () {
// 	document.getElementById("wrap").removeChild(document.getElementById("wrap").children[0]);
// }
// setInterval(deleteNode,4000);
setInterval(createElement,time);