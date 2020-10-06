04
AJAX
asynchronous JavaScript and XML
requests without reload
talks to server through XHR

AJAX request can be in any format
- text file
- HTML
- JSON object

05 
Using a synchronous XHR request
ex0102

06
Making requests asynchronous
ex0103

readyState:0~4; 4=completed傳送成功

var request = new XMLHttpRequest();
request.open('GET', 'data.txt');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		console.log(request);
		document.writeln(request.responseText);
	}
}
request.send();


07
Scripting for backwards compatibility
處理IE相容性

08 
Updating the DOM with getElementById
EX0201
		var modify = document.getElementById('update');
		modify.innerHTML = request.responseText;

09
Modifying elements with getElementsByTagName
EX0202

		var modify = document.getElementsByTagName('li');
		for (var i = 0; i < modify.length; i++) {
			modify[i].innerHTML = request.responseText;	

10
Parsing XML using AJAX
EX0203
the XHR object comes with a special 
attribute called responseXML.		
It's sort of like the responseText 
property, except that it converts the data
into an object that you can 
manipulate through JavaScript.

11
Reading JSON files
EX0204
JSON parse 在舊IE不支持
使用jQuery較省力

12
Using event-driven AJAX
EX0205

<button onclick="loadAJAX():">Load</button>
//按下按鈕觸發

<body onload="loadAJAX();">
//onload不要用在button, 用在body
-----------------------------------
<button id = "loadbutton">Load</button>

var mybutton = document.getElementById('loadbutton');
mybutton.onclick = function() {...}
-----------------------------------

13
Understanding and installing jQuery
EX0301
簡單

14
Working with jQuery and AJAX
EX0302

<div class="update"></div>
<div class="update"></div>
<div class="update"></div>
<div class="update"></div>

$('.update:even').load('data.txt');
//選取偶數格 並載入data.txt的內容
//<div class="update"></div>
//<div class="update">hi</div>
//<div class="update"></div>
//<div class="update">hi</div>

15
Reading data with jQuery
EX0303

jQuery=>GETJSON method
-----------------------------------------
$.getJSON('data.json', function(data)
{	
});
-----------------------------------------
$.getJSON('data.json', function(data) {
	var output = '<ul>';
	$.each(data, function(key, val) {
		output += '<li>' + val.name + '</li>';
	});
	output +='</ul>';
	$('#update').prepend(output);
});
-----------------------------------------
16
Preparing a live search AJAX app
EX0401
即時更新的小搜尋引擎 快速建雛形

17
Sending JSON data to the page
EX0402

-----------------------------------------
$.getJSON('data.json', function(data){
		console.log(data);
});
//傳回一堆 object 則成功
-----------------------------------------

18
Searching JSON data
EX0403



19
Styling an application
EX0404



20
Adding CSS3 animations
EX0405



Next Steps:




Source:JavaScriptandAJAXIntegrationTechniques