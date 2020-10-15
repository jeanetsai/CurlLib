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

















Source: learning js debugging