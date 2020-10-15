02 1 Understanding the Need for a Debugger

002 Important jargon and concepts
breakpoints: 在此動作停止
step over:依行執行
step into:進入執行
step out:跳出
watch:i=1, i=2, i=3 ...時的變化
call stack:function call

003 Debuggers in web browsers
介紹各平台工具

004 The importance of a good editor and IDE
介紹工具

005 Why debugging AJAX can be tricky
- same-origin policy
- CORS (cross-origin resource sharing)

Solutions
- use localhost:local web server
- Chrome: disable web security
- Firefox: security.fileuri.strict_origin_policy
- Safari: disable local file restrictions

03 2 Debugger Basics
001 Debugging without a debugger
alert();
console.log();

002 Leverage more of the Console API
console.log('string',direction,event);
console.error('string',direction,event);//get call stack
console.count('swipe right');//計算執行次數

console.log('string %s object event %O',direction,event);
//兩個參數分別以字串及物件顯示

===================================
    var bigErrorStyle = 'color: red; font-size: 60px; font-weight: bold; font-family: helvetica, sans-serif; text-shadow: 1px 1px 2px black;';//CSS樣式
console.log('%c swipe right', bigErrorStyle);
//出現超巨型紅色的 console.log message: swipe right
===================================

003 Stop and look around Simple breakpoints

chrome dev tool=>sources=>點選檔案=>點選要當breakpoint的行=>再原地點一次可以取消
右方小面板:觀察scope (function)
右方小面板上方三角形:resume

要當breakpoint的行:在這行還沒執行前就停止

debugger;
//加上這行，瀏覽器如chrome會自動停止在此處

004 Explore other breakpoint options

行號的 breakpoint 右鍵
=>可以edit breakpoint 在某情況下停止動作
=>可以disable breakpoint, 
右方面板breakpoint toggle on/off
=>右方面板上方 有pause || 按鈕

右方面板
XHR breakpoints=>ajax
DOM breakpoints=>DOM
Event handler breakpoint=>若打勾click
=>當有click動作時就停止執行

檢查element=>右鍵=>break on=>node removement
移除某個node

005 Step into over and out of functions

source右方面板=>弧形圖示=>step over
箭頭向下=>step inside
箭頭向上=>step out
觀察call stack
箭頭向右=>old step into

行號右鍵=> continue here (直接跳到這裡)

跳進jquery太複雜=>右鍵=>blackbox把這個黑箱掉

006 Find out where you are using the call stack
邊按弧形邊檢查callstack


007 Monitor variables with watches

Source右方面板 watch 按加號
鍵入我們要看的variable例如actionTime
可鍵入物件 或方法
object.property.value
actionTime.toLocalTimeString()
或矩陣
returnables: Array(0)

008 Source maps to debug minified files

source條=>右方三個點
=>settings
=>Enable JavaScript source maps 要勾選

source map 可令 jquery.min.js
對照non-minified version jquey.js


ch4
001 Debugging the use of a jQuery plugin

本範例使用 Lettering.js

source panel=>command+p(重要)=>鍵入關鍵字找到目標檔案(重要)
現在要跳過所有jQuery的東西(重要)
=>任何地方右鍵=>blackbox script
=>右方面板call stack出現 11 stack frames are hidden

002 Debugging a React application in Chrome
去chrome store安裝
React developer tools
面板出現react
稍微介紹此debugger
跳過

003 Debugging on iOS using Simulator
safari 工具 跳過
004 Remote debugging on an Android device
跳過
005 Debugging a node application in WebStorm
跳過
006 Setting up the WordPress example
跳過
007 Debug a WordPress theme in Visual Studio Code
跳過
008 Use a debugger as a learning tool on a live site

Event listener Breakpoints
打勾你要的事件
=>跳入jquery時右鍵=>blackbox this
重跑一次(弧形:step over)
Watch:打入你要監看的東西例如$img.src

Next Steps:
React for web developers
Version control: Git,Hg,SVN

Source: learning js debugging
