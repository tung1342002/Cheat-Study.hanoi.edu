cauHoi = document.getElementsByClassName("col-11 question-box-title");
ans = JSON.parse(localStorage.getItem("ans"));
var buttons = document.querySelectorAll('input[type="radio"]');
for(i=0;i<cauHoi.length;i++){
	for(i2=0; i2<ans.length; i2++){
		if(cauHoi[i].innerText == ans[i2]){
			for(i3=i*4; i3<i*4+4; i3++){
				if(buttons[i3].parentNode.nextElementSibling.innerText == ans[i2+1]){
					buttons[i3].onclick();
				}
			}
		}
	}
}
