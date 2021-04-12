function init(){
    var a = document.getElementById('entrybutton');
    var b = document.getElementById('entryinput');
    var c = document.getElementById('textoutput');
    
	function myEventFunction(){
		alert("Hello Elizabeth Przystal-" + b.value);
        c.innerHTML = (b.value);        
	}  
    
    a.addEventListener('click', myEventFunction);    
	a.addEventListener('click', function(){
    });
}
window.addEventListener('load', init);
