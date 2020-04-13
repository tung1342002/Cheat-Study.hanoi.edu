var test = document.getElementsByClassName("text-success");
for(i=2; i<test.length; i+=3){
	test[i].className = "text-primary";
}
var f = document.getElementsByClassName("text-primary");
ans = [];
for(i=1;i<f.length;i++){
	var text = " " + f[i].parentNode.innerText;
	ans.push(text);
}
localStorage.setItem("ans",JSON.stringify(ans));
