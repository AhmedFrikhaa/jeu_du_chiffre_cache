var randomNumber = Math.floor(Math.random()*10);
console.log(randomNumber);
var test =false 
var i=0;
do{
	var x=prompt("C'est Quoi Le Nombre Caché ? ");
	var a =parseInt(x);
	if (a==randomNumber){
		test=true;
	}
	i++;
}while (test!==true && i<3);
if(test===true){
	alert("YOU WIN ");
}
else {
	alert("YOU LOSE ");
}