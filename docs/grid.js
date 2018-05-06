var gridd=document.querySelectorAll(".pixel");
var grid=document.querySelector("#grid");
var colorInput=document.querySelector("input");
var swatches=document.querySelectorAll(".swatch");
var currentColor="blue";
var pall=document.querySelector("#pallet");
var dump=document.querySelector("#dump");
var saves=document.querySelector("#saves");
var load=document.querySelector("#load")
var saveArray=[];
initSave();
function initSave(){
	for (var i=0;i<gridd.length;i++){
		gridd[i].style.backgroundColor="red";
	}
}

var colorz=[

"aqua", 
"black",
"blue",
"fuchsia",
"gray",
"green",
"lime",
"maroon",
"navy",
"olive",
"purple",
"red",
"silver",
"teal",
"white",
"yellow"

];

for (var i=0; i<swatches.length;i++){
	swatches[i].style.backgroundColor=colorz[i];

	swatches[i].addEventListener("click",function(){
		
		currentColor=this.style.backgroundColor;
		grid.style.borderColor=currentColor;
		pall.style.borderColor=currentColor;
	});

}
/*
colorInput.addEventListener("change", function(){
	
	currentColor = this.value;
	console.log(currentColor);
});
*/
dump.addEventListener("click",function(){
	
	for (var i=0;i<gridd.length;i++){
		saveArray[i]=gridd[i].style.backgroundColor;
		
	}
	saves.value=saveArray;

});

load.addEventListener("click",function(){
	
	saveArray=saves.value.split(',');
	for (var i=0;i<gridd.length;i++){
		gridd[i].style.backgroundColor=saveArray[i];
		
	}
	

});

for (var i=0;i<gridd.length;i++){
	//gridd[i].backgroundColor="yellow";
	gridd[i].addEventListener("click",function(){
		
		this.style.backgroundColor=currentColor;
	});
}