Always 記得: hoisting

0101
0102
0103
ECMAScript standard
ECMAScript 2015=ES6
0201
Atom.io VSstudio
Browser:chrome Firefox edge opera brave
Atom live server
0202
Using console:shift+enter 原地換行
alert(5+7);

var date=new Date();
alert("today is "+date);

在內塞點東西
document.body.innerHTML=
"String "+date+"";

document.body.innerHTML=
"String "+(date.getMonth()+1) + (date.getDate()) + (date.getFullYear())+"";

0203
In-line JS
因為有document.body.innerHTML
若要動body內的東西
應放在</body>之後 才會執行

0204
External JS
src =script.js
若要動body內的東西
應放在</body>之後 才會執行

    var date = new Date();
    document.body.innerHTML = "<h1>Today is: " + date + "</h1>";

0205
守則：
JS大小寫相異
Use camel case
空白沒差，但最好打空白
要加分號
整齊註解// /**/

0301

不能以數字起頭
ALWAYS DECLARE 要記得宣告

var a = 5;
var b = 4;
var sum = a + b;

0302 datatype
JS datatypes:
- numeric
- string
- boolean
- null // empty but not undefined
- undefined
- symbol (ES6)

var negInteger = -3.14159265359;//number
var escQuote = "Quotes can also be \"escaped\".";//string
var theSunIsWarm = true;//boolean
var emptyInside = null;//object
var justAnotherVariable;//undefined

// 重要 常檢查型別 Try this in your console:
// console.log(typeof insertVariableName);

0303 運算 Operators

a++和++a(add before a)之不同:順序

var a = 1;
console.log(a);//1
console.log(++a);//2

var a = 1;
console.log(a);//1
console.log(a++);//1


0304 Numbers and Strings

var a = 5;
var b = "4";
var sum = a + b;//"54"


0305 Conditionals and Logic
----------------------------------
if ( condition ) {
    Do something;
} else {
    Do something;
}
----------------------------------
var a = 5;
var b = 5;
var theNumbersMatch

if ( a == b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

console.log(theNumbersMatch);
----------------------------------
5 == "5" //true

5 === "5" //false
----------------------------------
if (a == true){} //同下
if (a){}
----------------------------------
if (a == false){} //同下
if (a != true){}//同下
if (!a){}
----------------------------------
0306
----------------------------------
if (a == b && c == d){}
if (a == b || c == d){}
//either Q or P or both are true
XOR (交集處為空)
if (a == b || c == d)&&((a == b) != (c == d))
//either Q or P, but not both are true
----------------------------------
Ternary Operator
Condition ? T : F
a == b ? console.log("a=b"):console.log("a!=b");


----------------------------------
0307 Arrays
JS:Arrays are Objects
0308 Properties and Methods(重要)
Objects = properties & methods
Property:
Meta information about the object
Methods:
Functions that belongs to the object

----------------------------------
var pens;
pens = ["red", "blue", "green", "orange"];

console.log("Before: ", pens);

// PROPERTIES:
// Get a property of an object by name:
// console.log("Array length: ", pens.length);

// METHODS:
// Reverse the array:
// pens.reverse();

// Remove the first value of the array:
// pens.shift(); //拿掉矩陣第一個值

// Add comma-separated list of values to the front of the array:
// pens.unshift("purple", "black");
// 矩陣前面塞入值們

// Remove the last value of the array:
// pens.pop();//拿掉矩陣最後一個值

// Add comma-separated list of values to the end of the array:
// pens.push("pink", "prussian blue");
// 矩陣後面塞入值們

// Find the specified position (pos) and remove n number of items from the array. 
// 矩陣中間某處去除值 pos=position 要開始去掉的位置 n=去除幾個
//Arguments: pens.splice(pos,n):
// pens.splice(pos, n) // Starts at the seccond item and removes two items.
//pens = ["red", "blue", "green", "orange"];pens.splice(2, 1);變成pens = ["red", "blue", "orange"];


// console.log("After: ", pens);

// 重要:複製矩陣
// Create a copy of an array. Typically assigned to a new variable:
// var newPens = pens.slice();//複製此矩陣
// console.log("New pens: ", newPens);

// 搜尋矩陣:(小重要)
// Return the first element that matches the search parameter after the specified index position. Defaults to index position 0. Arguments: pens.indexOf(search, index):
// var result = pens.indexOf(search, index);
// console.log("The search result index is: ", result);
/*範例:
 pens = ["red", "blue", "green", "orange"];
 var result = pens.indexOf("orange", 1);
 //找orange，從位置1開始找，傳回所在位置
 console.log("The search result index is: ", result);//result=3
  console.log("The value is: ", pens[result]);//"orange"
*/

// 矩陣串接為字串:(重要)
// PHP: implode(separator,array)及相反explode
// Return the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: pens.join(separator):
// var arrayString = pens.join(separator);
// console.log("String from array: ", arrayString);
/*範例:
 pens = ["red", "blue", "green", "orange"];
 var arrayString = pens.join(",");//以逗號串接矩陣
 console.log("String from array: ", arrayString);//red,blue,green,orange
*/


// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

ch4 Functions and Objects
0401 Functions

三種 functions:
- Named functions //excuted, call by name 呼叫名字時執行
- Anonymous functions // run by event triggered 觸發執行
- Immediately invoked function expressions
//run when browser encounters them 碰到立刻執行

// Regular function, called explicitly by name:
function multiply() {
    var result = 3 * 4;
    console.log("3 multiplied by 4 is ", result);
}
multiply();

//上述的第二種寫法
function multiply(a, b) {
    var result = a * b;
    console.log("a multiplied by b is ", result);
	return result;//若外面要呼叫之，要記得return不然會變undefined
}
var multiplied = multiply(3, 4);


// Anonymous function stored in variable.
// Invoked by calling the variable as a function:
var divided = function() {
    var result = 3 / 4;
    console.log("3 divided by 4 is ", result);
}
divided();

// Immediately Invoked Function Expression.
// Annonymous
// Runs as soon as the browser finds it:
(function() {
    var result = 12 / 0.75;
    console.log("12 divided by 0.75 is ", result);
}())

0402 Build a basic function
變數最好在前面都先宣告

0403 重要 要記得
function multiply(a, b) {
    var result = a * b;
    console.log("a multiplied by b is ", result);
	return result;//若外面要呼叫之，要記得return不然會變undefined
}
var x = 3;
var y = 4;

var multiplied = multiply(x, y);
//或直接 multiply(x, y); 傳回 12

----------------------------------
function findBiggestFraction() {
    a>b ? console.log("a: ", a) : console.log("b: ", b);
}

var a = 3/4;
var b = 5/7;

findBiggestFraction()
----------------------------------
04 04 Return values from a function
function findBiggestFraction(a,b) {
    a>b ? console.log("a: ", a) : console.log("b: ", b);
}

var firstFraction = 3/4;
var secondFraction = 5/7;

findBiggestFraction(firstFraction,secondFraction);
------------------------------------

function findBiggestFraction(a,b) {
    var result;
    a>b ? result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var fractionResult = findBiggestFraction(firstFraction,secondFraction);

console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!");

0405 Annonymous functions 重要
以上都是有名字
此章討論沒名字的 Annonymous functions
和 variables,events 綁在一起 run

//重要----------------------------
var theBiggest = function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
}

//var theBiggest();//呼叫變數來執行這個函式
console.log(theBiggest(7/9,13/25));
//或直接使用這個var

0406 Immediately invoked functional expressions

//另一種重要寫法-------------------------
var theBiggest = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
})(7/9,13/25)

console.log(theBiggest);
//["a", 0.7777777777777778]
-----------------------------------------
//因為他立即觸發 要用到的變數要放函式上面
//常和 event 綁在一起

var x = 7/9;
var y = 13/25

var theBiggest = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
})(x,y);

console.log(theBiggest);

0407 variable scope

記得要return
宣告變數時永遠要加var
否則會全部變成全域變數
 (即使在函式內也會變全域)

0408 ES 2015: let and const

const:
constant 常數，定義後不變
can't be changed once defined

let:
Block Scope Variable
Smaller scope than var

----------------------------------
const MYCONSTANT=5;
console.log(MYCONSTANT);
----------------------------------
function logScope(){
	var localVar = 2;
	
	console.log(localVar);
	
}
logScope();
//Output:2
----------------------------------
function logScope(){
	var localVar = 2;
	
	if(localVar){
		var localVar = "i'm different"
		console.log("inner:" + localVar);
	}
	
	console.log("outer:"+localVar);
	
}
logScope();

/*inner:i'm different
  outer:i'm different
發現兩個都變了 ... 
var 不可以巢狀
hoisting 要用let解決*/
----------------------------------
function logScope(){
	let localVar = 2;
	
	if(localVar){
		let localVar = "i'm different"
		console.log("inner:" + localVar);
	}
	
	console.log("outer:"+localVar);
	
}
logScope();

/*inner:i'm different
  outer:2
  */
----------------------------------
function logScope(){
	var localVar = 2;
	
	if(localVar){
		let localVar = "i'm different"
		console.log("inner:" + localVar);
	}
	
	console.log("outer:"+localVar);
	
}
logScope();

/*inner:i'm different
  outer:2
  同上 但 var localVar 是 global*/
----------------------------------

0409 Objects

var course = new Object();

course.title = "JS ET";
course.instructor = "MR";
----------------------------------
var course = {
    title: "JS ET",
    instructor: "MR",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course);
console.log(course.title);
console.log(course.instructor);
----------------------------------

0410 Object constructors
Object constructors are templates

var course = {
    title: "JS ET",
    instructor: "MR",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course);

var currentDate = new Date();

var course02 = new Course();

------------------------------------
//(重要)
//constructor, 物件以大寫開頭
function Course(title,instructor,level,published,views){
	this.title = title;
	this.instructor = instructor;
	this.level = level;
	this.published = published;
	this.views = views;
	this.updateViews = function() {
        return ++this.views;//this.views = Course.views
    };
}

var course01 = new Course();//有以下的敘述即可省略
var course02 = new Course();//有以下的敘述即可省略

var course01 = new Course("JS ET","MR",1,true,0);
var course02 = new Course("UR","RR",1,true,123456);

console.log(course01);
console.log(course02);
/* Output:
Course {title: "JS ET", instructor: "MR", level: 1, published: true, views: 0, …}
Course {title: "UR", instructor: "RR", level: 1, published: true, views: 123456, …}
*/
-------------------------------------------
//另一種寫法(重要)
//constructor, 物件以大寫開頭
function Course(title,instructor,level,published,views,updateViews){
	this.title = title;
	this.instructor = instructor;
	this.level = level;
	this.published = published;
	this.views = views;
	this.updateViews = function() {
        return ++this.views;
		//注意是this, this.views = Course.views
    };
}
var courses = [
	new Course("JS ET","MR",1,true,0),
	new Course("UR","RR",1,true,123456)
];

//Output:同上

console.log(courses[1].instructor);
//RR
console.log(courses[1].updateViews());
//123457
------------------------------------------
0411 Sidebar: Dot and bracket notation
------------------------------------------
//property=title inside object=course

Dot notation:
course.title

Bracket notation:
course["title"]

------------------------------------------
Dot notation://常會出現錯誤
course.WP:image//出現錯誤

Bracket notation:
course["WP:image"]//正確


0412 Closures

------------------------------------------
function doSomeMath() {
	var a = 5;
	var b = 4;
	var sum = a + b;

	return sum;
}

var theResult = doSomeMath();

console.log("The result: ", theResult);
------------------------------------------
function doSomeMath() {
	var a = 5;
	var b = 4;
	function multiply(){
		var result = a*b;
		return result;
	}
	return multiply;
}

var theResult = doSomeMath();

console.log("The result: ", theResult());

------------------------------------------
Closure之意

有一個 function 在另一個 function 裡面
裡面的 function 靠外面 function 宣告的變數執行
------------------------------------------
function giveMeEms(pixels){
	var baseValue = 16;
	
	function doTheMath(){
		return pixels/baseValue;
	}
	
	return doTheMath;	
}

var smallSize = giveMeEms(12);
console.log("small size: ", smallSize() );

------------------------------------------
0501 DOM
Browser is an object {window, document, navigation button, location, url}=> BOM (Browser Object Model)
Document is an object too

~> window.innerWidth
~> window.open() //method

Window is the Top Object in the BOM

~> window.document
~> document //同上

DOM (Document Object Model)

Window => Document => (HTML) Meta/Body => ...

0502 Target elements in the DOM with querySelector methods
---------------------------------------
Document.body;
Document.title;
Document.URL;
---------------------------------------
document.getElementById("ID");
document.getElementsByClassName("class");
document.getElementByTagName("HTML tag");
---------------------------------------
function addBook(){
	var book = document.getElementById("book");
}
---------------------------------------
document.getElementByTagName("li");
---------------------------------------
/*傳回第一個符合的element*/
document.querySelector(".main-nav a");
/*傳回所有符合的element 傳回 node tree*/
document.querySelectorAll(".post-content p");
/*以逗號分隔兩個條件 
傳回所有符合這兩個條件聯集的element*/
document.querySelectorAll(".menu li a, .social-nav li a");
---------------------------------------


0503 Access and Change Elements
---------------------------------------
//querySeletor method, innerHTML property
~> document.querySelector(".main-title").innerHTML
//"Hi"
//傳回內部html

~> document.querySelector(".main-title").outerHTML
//"<h2 class="main-title">Hi</h2>"
//傳回外部html
---------------------------------------
//取代內部html
~> document.querySelector(".main-title").innerHTML = "Hello"
//"Hello"
//Hi 被取代成 Hello
---------------------------------------
~> document.querySelector("#showcase").id = "Hello"
//將id內的東西取代成 Hello
---------------------------------------
~> document.querySelector(".masthead")
//傳回html 發現他屬於兩個class: masthead clear
~> document.querySelector(".masthead").className
//"masthead clear"
~> document.querySelector(".masthead").classList
//DOMTOkenList[2]
~> document.querySelector(".masthead").classList[1]
//傳回"masthead clear"第二個值"clear"
//因為是唯讀，classList不可直接設值
---------------------------------------

0504 Access and Change Classes
---------------------------------------
~>document.querySelector(".masthead").classList
//["masthead","clear"]
~>document.querySelector(".masthead").classList.add("new-class")//加入項目
~>document.querySelector(".masthead").classList
//["masthead","clear","new-class"]
~>document.querySelector(".masthead").classList.remove("clear")
//["masthead","new-class"] //移除項目

//toggle 切換關閉打開
~>document.querySelector(".masthead").classList.toggle("masthead")
//關閉 masthead 傳回false, removed class name
~>document.querySelector(".masthead").classList.toggle("masthead")
//打開 masthead 傳回true, class name back

//看看這個class有沒有包含某些class字串
~>document.querySelector(".masthead").classList.contains("masthead")
//傳回 true 因為有包含這個class
~>document.querySelector(".masthead").classList.toggle("masthead")
~>document.querySelector(".masthead").classList.contains("masthead")
//傳回false 因為toggle關閉了masthead


0505 Access and Change attributes
Attribute: href attribute always have a value
Attribute:包含 link, href, alt, src 等等

hasAttributed()回傳T/F
檢查某個attribute是否存在

getAttributeetAttribute
回傳某個attribute內的值
例如回傳href attribute內的value

setAggribute(attribute name, its value)
修改/設定attribute

removeAttribute
移除某個attribute

-----------------------------------------
const CTAELLEMENT = document.querySelector(".cta a");

if(CTAELLEMENT".hasAttribute("target")){
	//檢查是否有屬性target	
console.log(CTAELLEMENT".getAttribute("target"));

}else{
	//若沒有屬性target 則加入target="_blank"
	CTAELLEMENT.setAttribute("target","_blank")
}

console.log("CTAELLEMENT".attributes);

0506 Add DOM elements
-----------------------------------------
// Get an element
const ELEM = document.querySelector(".main-title");
// Set inner HTML
ELEM.innerHTML="hi";
// Set outer HTML
ELEM.outerHTML='<h1 class="main-title">hi<h1>';
-----------------------------------------
1. create the element
2. create the text node that goes inside
the element
3. Add the text node to the element
4. Add the element to the DOM tree
-----------------------------------------
.createElement();//建立一個element
.createTextNode();//建立 text node
.appendChild();//放入child node
-----------------------------------------
const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector(img);

var altText = THEIMAGE.getAttribute("alt");
var captionElement = document.createElement("figcaption");
var captionText = document.createTextNode(altText);

captionElement.appendChild(captionText);

console.log(captionElement);

FEATURED.appendChild(captionElement);
THEIMAGE.setAttribute("alt","");//清空alt
-----------------------------------------
//上述的另一種寫法 但較舊的瀏覽器例如IE9不適用
const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector(img);

var altText = THEIMAGE.getAttribute("alt");
var captionElement = document.createElement("figcaption");

captionElement.append(altText);
FEATURED.append(captionElement);

THEIMAGE.setAttribute("alt","");//清空alt
-----------------------------------------



0507 Apply inline CSS to an element

加入 inline CSS (不會去動到.css檔案)
Attribute:style
-----------------------------------------
document.querySelector(".cta a").style
document.querySelector(".cta a").style.color="green"
//style="color:green"
document.querySelector(".cta a").style.backgroundColor="blue"
//style="color:green; background-color:blue"
-----------------------------------------

document.querySelector(".cta a").style.cssText="padding:1em; color:white; background-color:red"

-----------------------------------------
.hasAttribute("style");
// 這個element含有style attribute嗎? T/F

.getAttribute("style");
//Get inline styles

.setAttribute("style");
//Add CSS property

.removeAttribute("style");
//Remove inline styles

-----------------------------------------
document.querySelector(".cta a").style.cssText="padding:1em; color:white; background-color:red"

//另一種寫法
document.querySelector(".cta a").setAttribute("style","padding:1em; color:white; background-color:red")

-----------------------------------------
ch06 analog clock
ch07 JS and the DOM: Events
0701 DOM events
任何在browser發生的事情=event
開視窗、鍵入url...都是
1. 想好要 bind 什麼東西 例如一個 button
2. 要用什麼 event 例如 click
3. 建立 function 例如跳出新的 window

0702 Some typical DOM events
browser自己就是一個object

Browser-level events:
Browser behavior(load, window resize, etc.)
- Load: finished loading
- Error: failed to load
- Online/offline: self-explanatory
- Resize: viewport is resized
- Scroll: when a viewport is scrolled (上下左右)


DOM-level events:
Content interaction(click, focus, submit, etc.)
在viewport裡面發生的事
- Focus: clicked, tabbed to =>
when an element receives focus
- Blur: when an element loses focus => 
leaving form field
- Reset/submit: form-specific events
- Mouse events: click, double-click, mouseover, drag, drop, wheel, select ...


Other events:
- Media events: relate to audio/video playback
- Progress events: monitor ongoing browser progress
- CSS transition events: transition start/run/end

//MDN event reference



//Mozilla Developer Network Event Reference

0703 Trigger functions with event handlers
-------------------------------------------
//根據按鈕CTA被按下的事件 toggle class=hide的 ON/OFF
const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");//移除class hide
ALERT.classList.add("hide");//加入class hide

//event object e
function reveal(e){
	e.preventDefault();
	//防止網頁捲回上面 按了仍舊停在某個頁面
	
	CTA.classList.toggle("hide");
	ALERT.classList.toggle("hide");
}
//重要
CTA.onclick = reveal;//不需加()
//光是這樣 要觸發很多event是不行的 要下一章節

0704 Add and use event listeners

如果上例再加一個 CTA按鈕.onclick 後面的事件會覆蓋掉前面的
Event Listener:
一個動作，觸發多個 event
或是browser-level event 時
要用Event Listener

-------------------------------------------
//根據按鈕CTA被按下的事件 toggle class=hide的 ON/OFF
const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");//移除class hide
ALERT.classList.add("hide");//加入class hide

//event object e
function reveal(e){
	e.preventDefault();
	//防止網頁捲回上面 按了仍舊停在某個頁面
	
	CTA.classList.toggle("hide");
	ALERT.classList.toggle("hide");
}

//重要 加入event listener 一次點擊可以觸發多個函式
//false為預設
CTA.addEventListener("click", reveal, false);
CTA.addEventListener("click", function(){console.log("hi")}, false);

0705 Pass arguments via event listeners
-------------------------------------------
//根據按鈕CTA被按下的事件 toggle class=hide的 ON/OFF
const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");//移除class hide
ALERT.classList.add("hide");//加入class hide

//event object e
function reveal(e, current){//加入current
	//e.preventDefault();
	//防止網頁捲回上面 按了仍舊停在某個頁面
	current.innerHTML = "Book Now" ? CTA.innerHTML="oops" : CTA.innerHTML= "Book Now";
	
	ALERT.classList.toggle("hide");
}

//重要 加入event listener 一次點擊可以觸發多個函式
//false為預設
CTA.addEventListener("click",function(e){reveal(e, this);} , false);
//this refers to the object CTA
CTA.addEventListener("click", function(){console.log("hi")}, false);



ch08 type speed tester
ch09 Loops
0901 Loops
-------------------------------------------
for(var i=0;i<10;i++){
}
-------------------------------------------
var i=0;
while(i<10){
	console.log(i);
	i++;
}
-------------------------------------------
//至少執行一次:do while
var i=0;
do{
	console.log(i);
	i++;
}while(i<10)

-------------------------------------------
0902 Looping through arrays
-------------------------------------------
//重要
var extLinks=document.querySelectorAll('a[href^-"http"]')
//傳回所有http開頭的連結包括https
console.log(extLinks);

for(var i=0; i<extLinks.length; i++){
	console.log(extLinks[i]);
	
	//如果沒有target屬性 則加入target=_blank屬性
	if(!extLinks[i].hasAttribute("target")){
		extLinks[i].setAttribute("target","_blank");
	}
}
-------------------------------------------
0903 Break and Continue
-------------------------------------------
Break:終止目前迴圈
Continue:終止再回去一開始跑下一個迴圈
-------------------------------------------
//break範例
const MIN = 0;
const MAX = 36;
//在min/max之間隨機出現數 當數=testNumber=15時跳出迴圈
var testNumber = 15;
var i = 1;

while (MAX) {//無限迴圈 MAX永遠是true 靠break來跳出
    let randomValue = Math.floor(Math.random() * (MAX - MIN)) + MIN;

    if (randomValue == testNumber) {
        break;
    }

    console.log("Round " + i + ": " + randomValue);
    i++;
}

console.log("The script went " + i + " rounds before finding " + testNumber + ".");

-------------------------------------------
//continue範例; 找出1到100之間的質數
const CEILING = 100;


function primeTest(testValue) {
    let isPrime = true;
	//先假設所有的數都是質數
    for ( let i = 2; i<testValue; i++ ) {
        if ( testValue % i === 0 ) {
			//如果能被i整除 那就不是質數
            isPrime = false;
        }
    }
    return isPrime;
}

for (let i = 2; i<=CEILING; i++) {
    let result = primeTest(i);
	
	if(result == false){
		continue;
		//如果不是質數就不列出 跳回for迴圈
	}
	
    console.log(i + " is a prime number.");
}
-------------------------------------------
如果是就 ... break
如果不是就 ... continue
-------------------------------------------
ch10 automated responsive images markup
1001 說明project
Ch11 Troubleshooting, validating and minifying
1101 JS validating and troubleshooting
easy
1102 Troubleshooting JS
easy
1103 Send troubleshooting info to the console
MDN console methods

console.info 出現藍色的i會發現跟別的console.log不同
console.error 出現紅色的error訊息

1104 Step through your JS with browser tools
Source panel=>點擊行號 pause
點擊向下的箭頭:逐行執行

1105 Online script linting

JS online quality checker:

- jslint.com
打勾 ES6
會跳出一堆錯誤 極嚴格

- jshint.com
右邊要打勾 ES6


1106 Automate script linting
Course:U and R NPM

Atom - ESLint JavaScript Linter 

~> npm install -g eslint
//下載eslint包
~> npm init
//全部按enter跳過 最後打yes
~> eslint --init
//選擇answer questions about your style
//are you using ES6? y
//are you using ES6 modules? n
//where will ur code run?browser
//Do u use CommonJS? n
//Do u use JSX? n
//what style of indentation do u use? tabs
//what quotes do you use for strings? Double
//what line endings do you use? Unix
//do u require semicolons? Y
//what format do you want your config file to be in?JavaScript
//答完後創建了.eslintre.js儲存你的答案
//如果上述答錯了 就重來 ~>eslint --init
File=>settings=>+install=>search for eslint
=>按下packages=>linter-eslint=>install=>yes
=>關閉 回到code會發現很多錯誤 紅點

1107 Online script minification
線上縮JS 省流量 加速下載時間
minifier.org

另存為 script.min.js 並讓網站引用之

若想unminify他成可讀，
去chrome dev tool=>source=>按{} 即可

1108 Autoomate script minification
Uglify-js:
去npmjs.com/package/uglify-js
check out UglifyJS-ES6 package

~>npm install -g uglify-js-es6
//安裝ES6包

~>uglifyjs script.js -o script.min.js
//縮js

Ch12 bonus
1201 Arrow functions
很省空間
-------------------------------------------
//原本的寫法
var sumTotal = function(price,tax){
	return price*((tax/100)+1);
}
console.log(sumTotal(6,12));
-------------------------------------------
//箭頭函式寫法
var sumTotal = (price,tax)=>price*((tax/100)+1);

console.log(sumTotal(6,12));
-------------------------------------------

1202 Typescript
Typescript: strict typed language

1203 ES2015 strings
-------------------------------------------
//原本的寫法
let a=12;
let b=4;
console.log(a+" divided by "+b+' is '+(a/b));

-------------------------------------------
//ES6寫法
let a=12;
let b=4;
console.log(`${a} divided by ${b} is ${a/b}`);
//12 divided by 4 is 3
-------------------------------------------

1204 % symbol
mod/remainder
一個數不能被大於等於2至小於自己的數 mod=0
則其為 prime number

1205 Why use querySelector() & querySelectorAll() methods?
Document.getElementsByClassName();//要加s
Document.getElementById();//不加s
//只能取單一的物

Document.querySelector();
//只傳回第一個match者
Document.querySelectorAll();
//更好用 可以同時取一堆class和IDs
//傳回所有match者

Document.querySelector('input[name="login"]');
//好用


Next steps:
Documentation: 
Javascript site:developer.mizilla.org
ECMAScript


Sourse: JS ESST 20170517~20190401 updated
