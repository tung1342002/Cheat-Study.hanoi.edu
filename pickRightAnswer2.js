//Chon dap an dung (fixed)
var buttons = document.querySelectorAll('input[type="radio"]');
var hon = JSON.parse(localStorage.getItem("ans"));
z=0;
for(i=0; i<buttons.length; i+=4){
	for(t=i; t<i+4; t++){
		if(buttons[t].parentNode.innerText == hon[z]){
			buttons[t].onclick();
		}else{
		continue;
		}
	}
	z++;
}

