1. Ajax Defined

AJAX = Asynchronous JavaScript and XML

Ajax Model
- Webpage loads JavaScript ("Ajax engine")
- User performs an action (e.g., clicking)
- Request goes to JavaScript first, not server
- JavaScript may handle the request directly
- It sends XML asynchronously using XMLHttpRequest

AJAX Components
- HTML, CSS, DOM
- XML
- XMLHttpRequest
- JavaScript

2. Ajax Client
513593_02_01_XR30_requests

AJAX Requests
- XMLHttpRequest
- new
- open(method, url, async)
- send()

var xhr = new XMLHttpRequest()
- create new variable:xhr
- Assign a new instance of the XMLHttpRequest() object
- JS takes XMLHttpRequest() this class, create new instance of the class, that we can work on italics

xhr.open("GET", "script.php", true);
- method:GET
- send request to:script.php
- true: this request is Asynchronous, 99%機率會用true

xhr.send();
- make the request
- send request Asynchronously to "script.php"

GET vs. POST
- GET requests: used for retrieving data only
- POST requests: used for sending/changing data

Sending Forms:
- need to change header for content type
- setRequestHeader(header, value):provide the header we wanna send, and the value we wanna send, setRequestHeader function
- xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); : hey, this request contains form data
- Send form data as argument to send()



var xhr = new XMLHttpRequest();
xhr.open("POST", "form_process.php", true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send("first_name=Bob&last_name=Smith");
- method:POST
- send request to:form_process.php
- true: this request is Asynchronous, 99%機率會用true
- hey, this request contains form data
- xhr.send send form data

513593_02_02_XR30_responses

Receive and handle requests
Ajax Responses
- Responses can either be text or XML
- responseText
- responseXML
- responseText 比較好用，因為包含了 text, HTML, JSON, images 等等

<重要範例 但其實不會跑要後面範例說明 因為要check status>:

var xhr = new XMLHttpRequest();
xhr.open("GET", "script.php", true);
xhr.send();
//存進xhr這個XMLHttpRequest()類別的東西
var text = xhr.respnseText;
var xml = xhr.respnseXML;
//拿到整個字串 可以顯現在網頁上 div id = main
var target = document.getElementById("main");
target.innerHTML = text;

<Parse the Response>
- XML
- JSON

<分清楚JSON和STRING>
var person = {
	'first_name': 'Bob',
	'last_name': 'Smith'
};
//person是一個JSON

var response = "{
	'first_name': 'Bob',
	'last_name': 'Smith'
}";
//response是一個string 有雙引號 別上當了
//要用以下方式來轉成JSON 重要
var person = jSON.parse(response);

<重要範例 字串轉JSON 但其實不會跑要後面範例說明 因為要check status>:

var xhr = new XMLHttpRequest();
xhr.open("GET", "script.php", true);
xhr.send();
//存進xhr這個XMLHttpRequest()類別的東西
var json = jSON.parse(xhr.responseText);
//拿到整個字串 xhr.responseText
//用jSON.parse轉json可以將部分資訊顯現在網頁上 div id = main
var target = document.getElementById("main");
target.innerHTML = json.last_name;



513593_02_03_XR30_statesandevents
States and Events
States: How do we know the response is ready?

Ready States
- readyState(function): return value indicating status of XMLHttpRequest 回傳數字 0~4
- xhr.readyState
- 0: Connection created but not yet opened
- 1: Connection opened
- 2: Request sent, received by server
- 3: Response is in progress (partial data) 有資料正在傳回但只有部分data
- 4: Response complete (success or failure)
回應完成，不是成功就是失敗

Ready States Change
偵測每次的ready state的改變
- onreadystatechange (function, XMLHttpRequest的function)
- used to store a JavaScript function
- Called each time readyState changes
- Prevents having to constantly recheck value

<EX>
var xhr = new XMLHttpRequest();
xhr.open("GET", "script.php", true);

xnr.onreadystatechange = function (){
	if(xnr.readyState ==4 && xhr.status == 200){
	var target = document.getElementById("main");
	target.innerHTML = xhr.responseText;	
	}
}

xhr.send();
</EX>

將上述改成跑更快的寫法
<EX>
function replaceElementById(id, text){
	document.getElementById(id).innerHTML = text;
}


var xhr = new XMLHttpRequest();
xhr.open("GET", "script.php", true);

xnr.onreadystatechange = function (){
	if(xnr.readyState ==4 && xhr.status == 200){
	replaceElementById("main", xhr.responseText);	
	}
}

xhr.send();
</EX>


513593_02_04_XR30_loadremotetext
<EX 按按鈕則更新內容>

div id ="main"
var button 取出 id=ajax-button之按鈕
然後按下button觸發
button.addEventListener("click", replaceText)
打開replaceText函式

    <script>
      function replaceText() {
        var target = document.getElementById("main");
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'new_content.txt', true);
        xhr.onreadystatechange = function () {
          console.log('readyState: ' + xhr.readyState);
          //加入這行來偵錯，訊息欄會出現xhr.readyState =2 3 4
		  //沒有1因為已經連線
		  if(xhr.readyState == 2) {
            target.innerHTML = 'Loading...';
          }
          if(xhr.readyState == 4 && xhr.status == 200) {
            target.innerHTML = xhr.responseText;
          }
        }
        xhr.send();
      }
	
	//觸發按鈕 去執行上面的replaceText函式載入AJAX
      var button = document.getElementById ("ajax-button");
      button.addEventListener("click", replaceText);
    </script>



513593_02_05_XR30_loadremotejson
<遠端載入JSON>
本範例輸入zip code 則連線到google api
然後回傳位置資訊 

div id = entry
input id = zipcode
button id = "ajax-button"

div id = location:放傳回位置資訊

function findLocation :送出資訊
function outputLocation(data):傳回output位置資訊

      var button = document.getElementById ("ajax-button");
      button.addEventListener("click", findLocation);
	  
	  按下按鈕則觸發function findLocation

<EX>	  
	  
    <script>
      // Google asks for all API users to sign up for an API key
      // For simple tests, still works without an API key
      var api = 'http://maps.googleapis.com/maps/api/geocode/json';

      function findLocation() {
        var zipcode = document.getElementById('zipcode');
		//zipcode 是 element 使用者鍵入的郵遞區號element 不是值
        var url = api + '?address=' + zipcode.value;
		//注意zipcode 是 element
		//zipcode.value才是值	使用者鍵入的郵遞區號值
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
          if(xhr.readyState < 4) {
            showLoading();
          }
          if(xhr.readyState == 4 && xhr.status == 200) {
            outputLocation(xhr.responseText);
          }
        };
        xhr.send();
      }

      function showLoading() {
        var target = document.getElementById('location');
        target.innerHTML = 'Loading...';
      }

      function outputLocation(data) {
		  //傳入的data是string 之後要用parse轉換成JSON
        var target = document.getElementById('location');
		//傳入的data是string 要用parse轉換成JSON
        var json = JSON.parse(data);
        var address = json.results[0].formatted_address;
        target.innerHTML = address;
      }

      var button = document.getElementById ("ajax-button");
      button.addEventListener("click", findLocation);
    </script>


513593_02_06_XR30_usingjquery


<統整版: AJAX request>
$.ajax({
	type: "GET".
	url: "script.php",
	async:true, //若沒寫則預設為true
	data:{},//有form data
	dataType: "text", //資料可為text xml json
	success: function(data){
		$("#main").html(data);
		//div id=main的地方塞入html data
	},
	error: function(jqXHR, textStatus, error){}
	
});

<精簡版: 一個 GET AJAX request>

$.get({
	url: "script.php",
	dataType: "text",
	success: function(data){
		$("#main").html(data);
		//div id=main的地方塞入html data
	},	
});
//以此類推 $.post 可送出 POST request

513593_03_01_XR30_detectajaxrequests

Detect Ajax Requests
- page assumes request was AJAX
- page detects if request was AJAX
- Handle regular requests and Ajax requests differently
- Request Header: X-Requested-With

//AJAX
xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');

//PHP
//if it is ajax, return true

function is_ajax_request(){
	return isset($_SERVER['HTTP_X_REQUESTED_WITH']) &&
	$_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest';	
}
if(is_ajax_request()){
	echo "Ajax response";
}else{
	echo "Non-Ajax response";
}

513593_03_02_XR30_respondwithhtmlpartials
Respond with HTML partials

EX0302


513593_03_03_XR30_respondwithjsondata
Respond with JSON Data

JSON Data
Ready for use in JavaScript
=>Not actually return JSON, but string representation
-------------------------
$assoc=array('a'=>1. 'b'=>2, 'c'=>3);
json_encode($assoc);
//'{"a":1,"b":2,"c":3}'
-------------------------
$array = array('a', 'b', 'c');
json_encode($array);
//'["a","b","c"]'
-------------------------
json_encode($array, JSON_FORCE_OBJECT);
//'{"0":"a", "1":"b", "2":"c"}'

-------------------------
class User{
	public $first_name = "Joe";
	public $last_name = "Public";
	private $secret_name ="Happy Joe";
}
$user = new User();
json_encode($user);
//'{"first_name":"Joe","last_name":"Public"}'
-------------------------
EX0303重要可複習

513593_03_04_XR30_updatepageonchange
Update Page on Change
回傳選單(好範例)
及時更新選單 EX0304 重要可複習











Source: Ajax with PHP
