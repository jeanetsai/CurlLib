基本架構

        $("document").ready(function() {
			//你的code
            $("body").append("<p>The page just loaded!</p>");
        });

004 What is jQuery
open-source js library
cross-browser issues
005 Your first jQuery-enabled page

<!-- insert the script to reference jQuery here -->
    <script type="text/javascript" src="../jquery-1.11.1.js"></script>

    <script type="text/javascript">
        $("document").ready(function() {
			//domument loading, DOM is ready. Call back function when ready event is triggered
            $("body").append("<p>The page just loaded!</p>");
        });
		
		//上述JQ的JS版本
		//window object, addEventListener method, DOMContentLoaded event
        window.addEventListener("DOMContentLoaded", function(evt) {
            //get body
			var elem = document.getElementsByTagName("body")[0];
            //create<p>
			var para = document.createElement("p");
			//create text
            var text = document.createTextNode("The page just loaded!");
			//text appended to p
            para.appendChild(text);
			//p appended to body
            elem.appendChild(para);
        });
    </script>

006 Introduction to selectors and filters
Selectors:
$("p") 傳回一個list
Filters
$("p:first")傳回第一個$("p") 

    <script type="text/javascript">
        $("document").ready(function() {
//            $("p").css("border", "3px solid red");
//選p加上CSS樣式 實心紅線

//            $(".selectors").css("border", "3px solid red");
//選class=selectors 加上CSS樣式 實心紅線

//            $("#intro").css("border", "3px solid red");
//選ID=intro 加上CSS樣式 實心紅線

//            $("p:first").css("border", "3px solid red");
//選第一個p 加上CSS樣式 實心紅線

//            $("h2:not(.selectors)").css("border", "3px solid red");
//選class不是selectors者 加上CSS樣式 實心紅線
        });
    </script>

007 Creating and changing page content

   <script type="text/javascript">
        $("document").ready(function () {
            // create some new content
			//建立一個新DOM叫做<p>
            var newP = $("<p>");
			//<p>內放<em>
            newP.append("<em>Hello There</em>");
            
			//選擇div ID=example 執行 html function 塞入 newP
            $("#example").html(newP);
            
			//選擇h2 ID=creation 在裡面的所有東西之前放入字串"Watch This! "
            //$("#creation").prepend("Watch This! ");
            
            // change the existing content
			//在DIV ID=example內call html function 放入一段 html
            //$("#example").html("<h2>This is a new H2</h2>");
            
			//在DIV ID=example內call text function 放入一段 text, 和上面html function不同的是<h2>標籤會顯示而不會被當成html處理
            //$("#example").text("<h2>This is a new H2</h2>");
        });
    </script>

008 Handling events	
	//一段回傳滑鼠坐標位置的code
	//ON function: start listening for an event
	//jQuery unified event object:evt
    <script type="text/javascript" src="../jquery-1.11.1.js"></script>
    <script type="text/javascript">
        $("document").ready(function() {
            //ON function: start listening for an event
			//聽 mousemove event 自訂call back function onMouseOver
			$("#example").on("mousemove", onMouseOver);
			//聽 click event  自訂call back function onMouseClick
            $("#example").on("click", onMouseClick);
            //聽 mouseleave event  自訂call back function onMouseLeave
			$("#example").on("mouseleave", onMouseLeave);
        });
        //jQ unified event object:evt
        function onMouseOver(evt) {
            //滑鼠在上方滑過時回傳坐標
			//mousemove:283,202 Button:0 Key:false
			$("#example").text(evt.type + ": " + evt.pageX + ", " + evt.pageY
                               + "\n" + "Button: " + evt.which + 
                               " Key: " + evt.metaKey);
        }
        function onMouseClick(evt) {
            $("#example").text(evt.type + ": " + evt.pageX + ", " + evt.pageY);
			//按下時顯示 click:166,244
			//evt.type=click evt.pageX=坐標
			//turn off mousemove listener
			//mousemove function停止執行
            $("#example").off("mousemove", onMouseOver);
        }
		//離開div ID=example時顯示mouseleave
        function onMouseLeave(evt) {
            $("#example").text("mouseleave");
        }
    </script>	
	
009 Using jQuery animations	
//點擊按鈕go, DIV#testDiv就會產生一連串的動畫變化
    <script type="text/javascript">
        $("document").ready(function() {
			//點擊按鈕go觸發
            $("#go").click(function() {
					//寬度變400, 經過300毫秒
                    $("#testDiv").animate({width: 400}, 300)
					//寬度變300, 經過400毫秒
                    .animate({height: 300}, 400)
					//移動離左邊距離200, 經過500毫秒
                    .animate({left: 200}, 500)
					//移動離上面距離+=100px, 框線變粗, 慢慢地約600-800毫秒
                    .animate({top: "+=100", borderWidth: 10}, "slow")});
        });
    </script>	
	
	
010 AJAX made simple	
//主要要顯示文字的的DIV(#example)
//有兩個按鈕叫Get Text(#getcontent)和Load HTML(#loadhtml)
//按下Get Text則載入sampletextcontent.txt的內容
//按下Load HTML則載入samplehtml.html的內容
   <script type="text/javascript">
        $("document").ready(function() {
			//按下#getcontent按鈕則觸發自訂的getContent函式
            $("#getcontent").click(getContent);
			//按下#loadhtml按鈕則觸發自訂的loadHTML函式
            $("#loadhtml").click(loadHTML);
        });
        
        function getContent() {
            $.ajax("sampletextcontent.txt", 
                   { success: setContent, type: "GET", dataType: "text" });
        }//type: 呼叫自訂的setContent函式 "GET"/"POST" 
        
		//data = sampletextcontent.txt
        function setContent(data, status, jqxhr) {
            $("#example").text(data);
        }//text function 將 data 塞入 div#example
        
        function loadHTML() {
            $("#example").load("samplehtml.html");
        }//load function samplehtml.html 塞入 div#example
    </script>	
	
	
011 Overview of selectors and filters
假設你有很多個圖片<img>

var images = $("img");
//retrieve all the image tags
//選擇全部圖片
images.each(function(){
	//你要對圖片做的事
});

012 Basic selectors
var selectTag = $("tagname");//選擇tag
var selectID = $("#id");//選擇ID
var selectClass = $(".class");//選擇class
//星號 * =>select all
--------------------------------------------
    <script type="text/javascript">
        $("document").ready(function() {
            //call css function
			//$("p").css("border", "3px solid red");
            //$(".a").css("border", "3px solid red");
            //$("#example").css("border", "3px solid red");
            
			//$("p.b").css("border", "3px solid red");
			//選擇所有屬於class.b的<p>			
        });
    </script>
--------------------------------------------

013 Basic filters
--------------------------------------------
:first, :last
第一個或最後一個

:even, :odd
偶數或奇數個 是從0開始算!注意! 

:gt(), :lt(), :eq()
greater than大於, less than小於 equal等於
某個index 是從0開始算!注意! 

:animated
正在有動畫的項目，例如想取消動畫

:focus
現在有被focus的項目

:not(某條件)
不符合某條件的項目

--------------------------------------------
    <script type="text/javascript" src="../jquery-1.11.1.js"></script>
    <script type="text/javascript">
        $("document").ready(function() {
            //$("#example p:first").css("border", "3px solid red");//我要選#example內第一個<p>
            //$("#example p:last").css("border", "3px solid red");//我要選#example內最後一個<p>
            //$("#example p:even").css("border", "3px solid red");//我要選#example內偶數個<p>
			//但是是從0開始算!注意! 
			//所以選出0 2 4=>顯現出是1 3 5
            //$("#example p:odd").css("border", "3px solid red");//我要選#example內奇數個<p>
			//但是是從0開始算!注意! 
			//所以選出1 3 5=>顯現出是2 4 6
            //$("#example .a:first").css("border", "3px solid red");//我要選#example內第一個class.a
            //$("#example .b:even").css("border", "3px solid red");//我要選#example內偶數個class.b
            //$("#example p:gt(1)").css("border","3px solid red");
			//我要選#example內的p但是是大於Index=1
			//但是index是從0開始算!注意! 所以 0 1 都不會出現
            //$("#example p:not(p:eq(2))").css("border", "3px solid red");
			//我要選#example內的p但是不等於Index=2者
			//但是index是從0開始算!注意! 所以是第三個不顯示
        });
    </script>

014 Advanced selectors

<script type="text/javascript" src="../jquery-1.11.1.js"></script>
<script type="text/javascript">
    $("document").ready(function() {
        // The child selector "parent > child" selects "child" elements that are
        // immediate descendants of the "parent"
		// 選擇直屬的child >
		// 我要選擇div下所有直屬的<p> (非直屬不算 例如在<body>下的就不會選)
        //$("div > p").css("border", "3px solid red");
        
        // The descendant selector "ancestor descendant" selects "descendant" elements
        // as long as they have an "ancestor" element somewhere above them
		//我要選擇div下屬於class.a的<p> 
        //$("div p.a").css("border", "3px solid red");

        
        // The next adjacent selector "prev + next" selects the "next" element if it
        // is immediately preceded by a "prev" element
        // 鄰居選擇器 +
		// 選擇 <ul> 的鄰人而且是 <div> 者
		//$("ul + div").css("border", "3px solid red");
        
		
        // Next sibling selector "prev ~ siblings" selects all "siblings" elements that come
        // after a "prev" element
		// 下面所有人選擇器 ~
		// 選擇在id=#para1 下面的所有的p
        //$("#para1 ~ p").css("border", "3px solid red");
    });
</script>


015 Advanced filters

    <script type="text/javascript">
        $("document").ready(function() {
    //        $("p[class]").css("border", "3px solid red");
	//			class是attribute 以中括號包圍
	//			選出<p>內有類別 class attribute者
	
    //        $("p[id=para1]").css("border", "3px solid red");
	//			選出<p>內有ID 為para1者


    //        $("p[id^=para]").css("border", "3px solid red");
	//			^=start with
	//			選出<p>內ID名稱以para開頭者


    //        $("p[id^=para][lang*=en-]").css("border", "3px solid red");
	//			尋找more than 1 attribute
	//			選出<p>內ID名稱以para開頭
	//			並且<p>內lang attribute 內以en開頭者

	});
    </script>

        <p id="para4" lang="en-us">This is paragraph 4</p>
        <p id="para5" lang="en-gb">This is paragraph 5</p>
 

016 Attribute filters	
	
    <script type="text/javascript">
        $("document").ready(function() {
            //$("p:contains('3')").css("border", "3px solid red");
			//重要 找出<p>內文字有字串3者
			//選擇<p class="b">This is paragraph 3</p>
			
			
            //$("p:parent").css("border", "3px solid red");
            //parent:either has a tag inside it or a text node
			//傳回<p>下面至少有一child者
			//只要<p>內有東西都被選起來了
			
			
			//$("div:has(p[class=a])").css("border", "3px solid red");
			//has filter
			//找出div有此性質者:<p>裡面有class且class=a之物
            //選出本範例的<div id="example">

			
            //$("div p:first-child").css("border", "3px solid red");
			//空白 跟上例的 has 不一樣喔
			//本範例是選出div下的<p>回傳第一個child
			//選出本範例的<p class="a">This is paragraph 1</p>
			
            //$("div p:last-of-type").css("border", "3px solid red");
			//本範例是選出div下的<p>回傳最後一個
			//選出本範例的        <p id="para5" lang="en-gb">This is paragraph 5</p>
			
            //$("div p:nth-child(3)").css("border", "3px solid red");
			//注意本處nth-child是以1開始起算，不同於even odd和index filter
			//本範例是選出div下的<p>回傳第三個child
			//<p class="b">This is paragraph 3</p>
			
			
            //$("div p:nth-child(2n)").css("border", "3px solid red");			//注意本處nth-child是以1開始起算，不同於even odd和index
			//本範例是選出div下的<p>回傳第偶數個child
			//<p id="para1">This is paragraph 2</p>
			//<p id="para4" lang="en-us">This is paragraph 4</p>


            //$("div p:nth-child(n)").css("border", "3px solid red");	
			//本範例是選出div下的<p>回傳全部child

            //$("div p:nth-child(3n)").css("border", "3px solid red");	
			//本範例是選出div下的<p>回傳3倍數的child
			//<p class="b">This is paragraph 3</p>
			
        });
    </script>

    <div id="example">
        <p class="a">This is paragraph 1</p>
        <p id="para1">This is paragraph 2</p>
        <p class="b">This is paragraph 3</p>
        <p id="para4" lang="en-us">This is paragraph 4</p>
        <p id="para5" lang="en-gb">This is paragraph 5</p>
    </div>
	
017 Traversing documents with jQuery

html的child=>head,body
siblings=>head,body
    html          |
     |            |
	body          |        |
	 |			  |parents |parentsUntil($("HTML"))
   DIV=>parent()  |        |
   / | \
<p> <p> <p>
prev()  next()
---------------------------------------------------	
    <script type="text/javascript">
        $("document").ready(function() {
            //甲。
			// The children() function retrieves the immediate (that is, first-level down) child
            // elements of the matched set, excluding text nodes.
			//選取div#example下的所有children並apply css
            //$("#example").children().css("border", "3px solid red");
			
			
//乙。
//            var elem = $("#para1");
//            elem.prev().css("border", "3px solid red");
//選取id是#para1的前一個鄰居

//            elem.next().css("border", "3px solid green");
//選取id是#para1的下一個鄰居

//            elem.parents().css("border", "3px solid blue");
//向上選取#para1的parents直到包含<HTML>

//            elem.parentsUntil($("body")).css("border", "3px solid blue");
//向上選取#para1的parents但不包括body
//所以會選到<div id="example">
           
            //丙。
			// use the find function to locate content within particular elements
            //$("#example").find("#para4").css("border", "3px solid red");
			//在div id=#example內找出id=#para4

			//丁。each
            // use the each function to iterate over a set of elements and operate on them
//            var leftmargin = 0;
//            var border = 3;
			//重要 找出div#example下的所有<p> 進each loop
			//element回傳DOM 並隨著越下面的element 線愈粗 愈朝右移
//            $("#example p").each(function(index, element) {
//                $(element).css("border", border+"px solid red")
//                          .css("margin-left", leftmargin);
//                border += 2;
//                leftmargin += 10;
//            });
        });
    </script>	

        <div id="example">
            <p class="a">This is paragraph 1</p>
            <p id="para1">This is paragraph 2</p>
            <p class="b">This is paragraph 3</p>
            <p id="para4" lang="en-us">This is paragraph 4</p>
            <p id="para5" lang="en-gb">This is paragraph 5</p>
        </div>


	
018 jQuery statement chaining
- call multiple functions on a result set in the same line
$(selector).fn1();
$(selector).fn1().fn2().fn3();//statement chain


019 Challenge - Annotate page content
<ul id="restaurants">
	<li data-type="meat"><a href="#">你的內容</a></li>
	<li data-type="veg"><a href="#">你的內容</a></li>
	<li data-type="veg"><a href="#">你的內容</a></li>
	<li data-type="meat"><a href="#">你的內容</a></li>
	<li data-type="meat"><a href="#">你的內容</a></li>
</ul>	
	//目標:在data-type="veg"的"你的內容"後面加上<v>

020 Solution - Annotate page content


        $("document").ready(function() {
			//上述解法
            $("#restaurants li[data-type='veg']").append(" <v> ");
        });

021 Creating content

  <script type="text/javascript">
  $("document").ready(function() {

            document.getElementById("create").addEventListener("click", function (evt) {
                createContent();//點擊觸發自訂函式
            });
            document.getElementById("change").addEventListener("click", function (evt) {
                changeContent();//點擊觸發自訂函式
            });
            document.getElementById("changeAll").addEventListener("click", function (evt) {
                changeAllTheContent();//點擊觸發自訂函式
            });
            // use the html() function to get the current HTML of an element
            //alert($("#example").html());
        });
        function createContent() {
            // use the html() function to change the content of the div
            $("#example").html("<p>Hi there!</p>");
			//.html函式會取代掉目標div#example內的所有東西
        }
        
        function changeContent() {
            // set the text content of the last paragraph
            var newItem = $("<p>This is a new paragraph</p>");
			//var newItem=jQuery object,存一段html string
            $("#para1").html(newItem);
			//.html函式會取代掉目標p#para1內的所有東西
        
		}
        
        function changeAllTheContent() {
            $("#example p").text("<p>This is a paragraph</p>");
			//.text函式會取代掉目標#example p內的所有東西
			//.text和.html函式不一樣的是 <p>這些tag會顯示出來而不是當成html處理
			}
    </script>
        <div id="example">
            <p class="a">This is paragraph 1</p>
            <p id="para1">This is paragraph 2</p>
            <p class="b">This is paragraph 3</p>
            <p id="para4" lang="en-us">This is paragraph 4</p>
            <p id="para5" lang="en-gb">This is paragraph 5</p>
        </div>
        <div>
            <button id="create">Create Content</button>
            <button id="change">Change Content</button>
            <button id="changeAll">Change All</button>
        </div>

022 Inserting page content
--------------------------------------
<body>
	<p>你的文字</p>
	<p>你的文字</p>
</body>


$("p").append("新文字")
<body>
	<p>你的文字新文字</p>
	<p>你的文字新文字</p>
</body>


$("p").prepend("新文字")
<body>
	<p>新文字你的文字</p>
	<p>新文字你的文字</p>
</body>

$("新文字").appendTo("p:first")
<body>
	<p>你的文字新文字</p>
	<p>你的文字</p>
</body>

$("新文字").prependTo("p:last")
<body>
	<p>你的文字</p>
	<p>新文字你的文字</p>
</body>

$("p").before("新文字")
<body>
	新文字<p>你的文字</p>
	新文字<p>你的文字</p>
</body>

$("p").after("新文字")
<body>
	<p>你的文字</p>新文字
	<p>你的文字</p>新文字
</body>
--------------------------------------
    <script type="text/javascript">
        $("document").ready(function() {
           //甲。在<p>裡面插入東西
		   // Insertion functions for inserting inside of content
            //$("#example p").append(" with some content appended");
			//div#example內的<p>內尾端都加入文字
			
            //$("#example p").prepend("Hello! ");
			//div#example內的<p>內開頭都加入文字
			
            //$("#example p:last").appendTo("#example p:first");
			//將最後一行paragraph5 append至第一行的後面
			//並移除paragraph5(注意)
			
            //$("#example p:last").prependTo("#example p:first");
            //將最後一行paragraph5 append至第一行的前面
			//並移除paragraph5(注意)
			
			//乙。在<p>外面插入東西
            // Insertion functions for inserting outside of content
            //$("#example p").after("--");
            //$("#example p").before("**");
            
			
			//$("<p>New Para after</p>").insertAfter("#example p:first");
            //將<p>New Para after</p>放到第一行後面
			
			//$("<p>New Para before</p>").insertBefore("#example p:last");
			//將<p>New Para before</p>放到最後一行前面
        });
    </script>
        <div id="example">
            <p class="a">This is paragraph 1</p>
            <p id="para1">This is paragraph 2</p>
            <p class="b">This is paragraph 3</p>
            <p id="para4" lang="en-us">This is paragraph 4</p>
            <p id="para5" lang="en-gb">This is paragraph 5</p>
        </div>	

023 Altering page content

script type="text/javascript">
        $("document").ready(function() {
        //$("#example p").wrap("<div style='color:red'/>");
		//wrap選取div#example<p>並以新div包圍每單個<p>
		//<div id="example">
		//	<div style="color:red"><p></p></div>
		//	<div style="color:red"><p></p></div>
		//	<div style="color:red"><p></p></div>		
		
        //$("#example p").wrapAll("<div style='border:3px solid red'/>");
		//wrapAll選取div#example<p>並以新div包圍所有<p>		
		//<div id="example">
		//	<div style='border:3px solid red'><p></p><p></p><p></p></div>		
		
		
        //$("#example").empty();
		//把div#example下面的child清空
		
		
		
        //$("#example p.a, #example p.b").remove();
 		//把div#example下面的class=a和class=b之<p>清空
		//和detach不同的是 remove會把整個event listener都清掉
		
		//$("#example p.a, #example p.b").detach();
        //把div#example下面的class=a和class=b之<p>刪掉
		//但是event handler會留住
		
		
		
		//$("<div>replaced</div>").replaceAll("#example p[id]");
        //所有擁有ID的<p>且在div#example裡的東西
		//都被取代成<div>replaced</div>
		
		//$("#example p[id]").replaceWith("<div>replaced</div>");
         //所有擁有ID的<p>且在div#example裡的東西
		//都被取代成<div>replaced</div>
		
		//replaceWith和replaceAll不同之處在於可以塞function
		//$("#example p").replaceWith(replacementFn);
		//所有擁有ID的<p>且在div#example裡的東西
		//都被取代成自訂函式replacementFn回傳的東西
    });
    
    function replacementFn() {
        if ($(this).text().indexOf("1") != -1) {
			//this=current element of each $("#example p")
			//this = <p> object
			//如果<p>的text內容包含string"1"
			//就return<p>This is paragraph uno</p>
            return "<p>This is paragraph uno</p>";
			//output:第一行被取代成This is paragraph uno
        }
        else {
            return this.outerHTML;
			//this = <p> object
			//若<p>的text內容不包含string"1"
			//就回傳原本的內容
        }
    }

    </script>
        <div id="example">
            <p class="a">This is paragraph 1</p>
            <p id="para1">This is paragraph 2</p>
            <p class="b">This is paragraph 3</p>
            <p id="para4" lang="en-us">This is paragraph 4</p>
            <p id="para5" lang="en-gb">This is paragraph 5</p>
        </div>	

024 Manipulating attributes

   <script type="text/javascript">
        $("document").ready(function() {
            
			//甲。(未說明)
			// Read the alt attributes from all images
            //$("#example").after("<p id='alts'>");
            //$("img").each(function() {
            //    $("#alts").append($(this).attr("alt") + " ");
            //});
            
			
			
			//乙。加上tooltip(title屬性)
            // Add a title attribute to all of the images
            //$("a").attr("title", "Photo by some photographer");
			//output:<a title="Photo by some photographer"></a>
			
			
			//丙。開新視窗
            // Make each image open in a new window
            $("a").attr("target", "_blank");
			//output:<a target="_blank"></a>

			
			
			//丁。移除屬性
            // Remove the href from the <a> tags, making images unclickable
            //$("a").removeAttr("href");
			//移除超連結

			
			
			//戊。attr修改多個屬性
            // Modify multiple attributes at once
            //$("img").attr({ src: "images/Spring.jpg", title: "Spring all the things!" });
			//加入含有許多屬性的js object
			//output:所有的img都變成<img src: "images/Spring.jpg" title="Spring all the things!"></a>
			
			
			
        });
    </script>

	        <div id="example">
            <a href="images/Grass.jpg"><img src="images/Grass.jpg" alt="Grass" /></a>
            <a href="images/Leaf.jpg"><img src="images/Leaf.jpg" alt="Leaf" /></a>
            <a href="images/Spring.jpg"><img src="images/Spring.jpg" alt="Spring" /></a>
            <a href="images/Water.jpg"><img src="images/Water.jpg" alt="Water" /></a>
        </div>
	
025 Working with CSS
------------------------------------
- css()
- css(propName)
在一個元素上的propName property取值
- css(propName, value)
將CSS property propName設定值
- css(propName, fn())
call back function
以fn回傳的result將CSS property propName設定值
- css(properties)
js object contain name value pairs
一次設定多個property values
------------------------------------
- hasClass(某類別名稱)
檢查這個元素是否有"某類別名稱"
- addClass(某類別名稱) 
將這個元素加上"某類別名稱"
- removeClass(某類別名稱)
移除這個元素的"某類別名稱"
- toggleClass(某類別名稱)
切換這個"某類別名稱"為開/關
------------------------------------

  <script type="text/javascript">
        $("document").ready(function() {
			//甲。按下按鈕則設定CSS
            $("#setProp").click(function(evt) {
                $("#example p").css("text-decoration", "overline")
                                .css("font-size", "+=1pt");
				//用.css()一次增加一個property
				//按下按鈕#setProp選取#example下的<p> 將字型加上1pt和上橫線
            });

            $("#setProps").click(function(evt) {
                $("#example p").css({
                    "font-weight" : "bold",
                    "color" : "red",
                    "text-decoration" : "underline"
                });
				//按下按鈕#setProp選取#example下的<p> 
				//一次加上多個屬性設定(這是個js object傳入.css()函式)
				//字變成紅色粗體且有下底線
            });

            
			//乙。按按鈕則新增/移除/切換 類別開關
			$("#addCl").click(function(evt) {
                $("#example p").addClass("pClass");
				//將DIV#example<p>加上類別pClass
            });

            $("#rmCl").click(function(evt) {
                $("#example p").removeClass("pClass");
				//將DIV#example<p>移除類別pClass
            });

            $("#toggleCl").click(function(evt) {
                $("#example p").toggleClass("pClass");
				////將DIV#example<p> toggle 類別pClass開關
            });
        });
    </script>
	    <style>
        .pClass {
            color: green;
            text-transform: uppercase
        }
        
        button {
            margin: 5pt 5pt 0 0;
        }
    </style>
	
     <div id="example">
            <p class="a">This is paragraph 1</p>
            <p id="para1">This is paragraph 2</p>
            <p class="b">This is paragraph 3</p>
            <p id="para4" lang="en-us">This is paragraph 4</p>
            <p id="para5" lang="en-gb">This is paragraph 5</p>
        </div>
        <button id="setProp">Set Property</button>
        <button id="setProps">Set Properties</button>
        <button id="addCl">Add Class</button>
        <button id="rmCl">Remove Class</button>
        <button id="toggleCl">Toggle Class</button>
    </div>


026 Positioning with CSS

<script type="text/javascript">

        $(function() {
            showValues();//自訂函式showValues
            
            $("#example").click(changeValues);
			//按下DIV#example後呼叫自訂函式changeValues
        });
        
        function changeValues() {
            $("#example").height(100);
			//DIV#example高度設100
            $("#example").width(200);
			//DIV#example寬度設200
            
            showValues();//自訂函式showValues
        }
        
        function showValues() {
            $("#height").html($("#example").height());
			//span#height秀出div#example之高度
			//注意這個和以下值在不同瀏覽器可能不同
			//就算你前面DIV#example寬度設200 還是可能出現小數
			
            $("#width").html($("#example").width());
			
			
            $("#innerH").html($("#example").innerHeight());
			
			
            $("#innerW").html($("#example").innerWidth());
			
			
            $("#outerH").html($("#example").outerHeight());
			
			
            $("#outerW").html($("#example").outerWidth());
			
			
            $("#offset").html($("#example").offset().top + ", " + $("#example").offset().left);
			//span#offset 秀出 top 和 left 的值
			
            $("#position").html($("#example").position().top + ", " + $("#example").position().left);
			//span#position 秀出 top 和 left 的值
        }
    </script>
        <div id="example">
            Example DIV Element
        </div>
        <div><span>Height: </span><span id="height"></span></div>
        <div><span>Width: </span><span id="width"></span></div>
        <div><span>innerHeight: </span><span id="innerH"></span></div>
        <div><span>innerWidth: </span><span id="innerW"></span></div>
        <div><span>outerHeight: </span><span id="outerH"></span></div>
        <div><span>outerWidth: </span><span id="outerW"></span></div>
        <div><span>offset: </span><span id="offset"></span></div>
        <div><span>position: </span><span id="position"></span></div>
    </div>


027 Embedding custom data
.data(key,value)
.data(obj)

.data(key)
.data()
=>return a js object



<script>
        $("document").ready(function() {
            document.getElementById("show").addEventListener("click", function (evt) {
				//或是$("#show").click(function(evt){你的程式}
				//點擊按鈕show將div#example json化並跳窗顯示
                // if there is any data, display it
                alert(JSON.stringify($("#example").data(), null, "  "));
				//data-key3="data attribute"
				//跳出視窗為{
				//	"key3": "data attribute"
				//}
            });
            document.getElementById("store").addEventListener("click", function (evt) {
				//或是$("#store").click(function(evt){你的程式}
                // store some arbitrary data on the DIV object
				// 點擊#store按鈕將一些data存進DIV#example
                $("#example").data("key1", 1234);
                $("#example").data("key2", "J");
				//<div id="example" data-key1="1234" data-key2="J">
            });
            document.getElementById("remove").addEventListener("click", function (evt) {
				//或是$("#remove").click(function(evt){你的程式}
				// 點擊#remove按鈕將DIV#example的key2移除
				// 若是.removeData();則是清除全部資料
                // clear the data from the DIV
                $("#example").removeData("key2");
				//<div id="example" (後面key2被清除)data-key3="data attribute">
            });
        });
    </script>

    <div id="content">

        <div id="example" data-key3="data attribute">
		<!-- data:html5 tag; key3=data attribute-->
            <p class="a">This is paragraph 1</p>
            <p id="para1">This is paragraph 2</p>
            <p class="b">This is paragraph 3</p>
            <p id="para4" lang="en-us">This is paragraph 4</p>
            <p id="para5" lang="en-gb">This is paragraph 5</p>
        </div>
        <p>
            <button id="store">Store data</button>&nbsp;
            <button id="remove">Remove data</button>&nbsp;
            <button id="show">Show data</button></p>
    </div>

028 Challenge - Generate a table of contents
---------------------------------------
建立一連串超連結內容
<div class="content">
<h1>
<h2>
<h3>
<p>

---------------------------------------

029 Solution - Generate a table of contents
        $("document").ready(function() {
			var headings = $(".content h2");
			//選取DIV.content下的所有h2
			
			var list =$("<ul id='bookmarks'>");
			//建立一串ul來存超連結
			
			var cAnchorCount = 0;
			
			headings.each(function(indx,elem){
				
				$(this).html("<a name='bookmark" + cAnchorCount + "'></a>"+ $(this).html());
				//elem=h2,給所有的h2值
				
				list.append($("<li><a href='#bookmark"+cAnchorCount++ +"'> "+ $(this).text() +"</a></li>"));
				//var list <ul>下放<li>內容
				//cAnchorCount++
				
			});
			
			$(".content h1").after(list);
			//在h1後面放入 list 內容
			
        });




030 jQuery event-handling features
簡單說明
031 Binding and unbinding events

   <script type="text/javascript">
        $(function() {//和document.ready一樣
            // Older versions of jQuery used the "bind" and "unbind" functions
			//舊版的JQ是用bind和unbind
			
            // $("#evtTarget").bind("mouseover mouseleave", highlight);

            // $("#evtTarget").bind("click", function(evt) {
            //     $("#evtTarget").unbind("mouseover mouseleave", highlight);
            //     $("#evtTarget").html("<p>You shut off the hover effect!</p>");
            // });

            // jQuery as of 1.7/1.8 provides the universal "on" and "off" functions
            $("#evtTarget").on("mouseover mouseleave", highlight);
			//滑鼠移到DIV#evtTarget時呼叫自訂的highlight函式
			//.on函式底下的event handler:click mouseover mouseleave keypress等等
			
            $("#evtTarget").on("click", function(evt) {
				//點擊DIV#evtTarget時做如下三個行動
				
                $("#evtTarget").off("mouseover mouseleave", highlight);
				//甲。DIV#evtTarget移除當"mouseover mouseleave",便 highlight這個行為
				
                $("#evtTarget").html("<p>You shut off the hover effect!</p>");
				//乙。DIV#evtTarget裡面html被取代為一段文字
				
                $("#evtTarget").removeClass("highlighted");
				//丙。DIV#evtTarget的highlighted背景紅色類別被移除
            });
            
            $("#textEntry").on("keypress", function(evt) {
                //keypress event當在input id="textEntry"裡面按下按鍵
				//就觸發以下事件
				
				$("#keyPress").text(String.fromCharCode(evt.charCode));
				//在<span id="keyPress">中顯示出你按了什麼按鍵
				//(String.fromCharCode(evt.charCode))
				//為character that user typed
				//in the event object evt, I passed charCode
				
            });
        });

        function highlight(evt) {
            $("#evtTarget").toggleClass("highlighted");  
				//自訂的highlight函式選取DIV#evtTarget
				//切換class.highlighted 的CSS樣式:背景顏色紅色
        }
    </script>
    <style type='text/css'>
        .highlighted {
            background-color: Red;
        }
    </style>
	
	    <div id="content">

        <div id="evtTarget" class="box">Mouse over this div to see the effect. Click on it to unbind the mouseover.</div>
        <p>Type in this text field</p>
        <input id="textEntry" type="text" />
        <p>Last character typed: <span id="keyPress"></span></p>
    </div>


032 Event-helper features

   <script type="text/javascript">
        $(function() {
            $("#evtTarget").hover(highlight, highlight);
			//(highlight, highlight)=>hover over, hover removed
			//這兩件事情發生時都呼叫自訂的highlight函式

            $("#evtTarget").click(fnClick1);
			//DIV#evtTarget被點擊時呼叫自訂的fnClick1函式
            
            $("#evtTarget").dblclick(fnClick2);
			//DIV#evtTarget被雙擊時呼叫自訂的fnClick2函式
            
            $(window).resize(fnResize);
			//window視窗被resize時呼叫自訂函式fnResize

            $("#evtTarget").one("click", function() {
                $(this).css({ borderWidth: "4px",
                    cursor: "pointer"
                });
				//本段未說明
            });
        });
        
        function highlight(evt) {
			//自訂的highlight函式
			//將DIV#evtTarget切換類別highlighted(背景顏色:紅色)
            $("#evtTarget").toggleClass("highlighted");
        }
        function fnClick1() {
            $("#evtTarget").html("Click");
			//DIV#evtTarget裡出現html"Click"
        }
        function fnClick2() {
            $("#evtTarget").html("Double Click");
			//DIV#evtTarget裡出現html"Double Click"
        }
        function fnResize() {
            $("#evtTarget").html("Browser window resized");
			//DIV#evtTarget裡出現html"Browser window resized"
        }
    </script>
    <style type='text/css'>
        .highlighted {
            background-color: Red;
        }
    </style>
	    <div id="content">

        <ul>
            <li><code>hover()</code>: use this instead of mouseover and mouseleave events</li>
            <li><code>click()</code>: listens for click events</li>
            <li><code>dblclick()</code>: listens for double-click events</li>
            <li><code>resize()</code>: fired on the window object when the browser window resizes</li>
        </ul>
        <div id="evtTarget" class="box">Mouse over this div to see the hover effect. Try clicking and double-clicking.</div>
    </div>

033 Using the jQuery event object
event包括
pageX, pageY 滑鼠坐標
which 檢查你按了什麼按鍵
metaKey 檢查你按了什麼特殊鍵
-----------------------------------------------------------
範例檔案有三個DIV
一個text field
以及各種event details例如event type, pageX...等
  <script type="text/javascript">
        $(function() {
            $("#Div1").on("click dblclick", { name: "Div 1" }, function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
			//DIV#Div1被單擊或雙擊時 
			//pass data object { name: "Div 1" }
			//呼叫自訂函式updateEventDetails顯示event細節
			
			
            $("#Div2").on("click dblclick", { name: "Div 2" }, function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
			//DIV#Div2被單擊或雙擊時
			//pass data object { name: "Div 2" }
			//呼叫自訂函式updateEventDetails顯示event細節
			//預設函式.stopPropagation 停止這個event
			
            $("#Div3").on("click dblclick", { name: "Div 3" }, function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
			//DIV#Div3被單擊或雙擊時
			//pass data object { name: "Div 3" }
			//呼叫自訂函式updateEventDetails顯示event細節
			//預設函式.stopPropagation 停止這個event
			
            $("div.smallbox").on("mouseenter", function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
			//DIV#類別smallbox被滑鼠滑入時
			//呼叫自訂函式updateEventDetails顯示event細節
			//預設函式.stopPropagation 停止這個event
			
            $("div.smallbox").on("mouseleave", function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
			//DIV#類別smallbox被滑鼠離開時
			//呼叫自訂函式updateEventDetails顯示event細節
            //預設函式.stopPropagation 停止這個event
			
			$("div.smallbox").on("mousemove", function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
			//DIV#類別smallbox有滑鼠移動時
			//呼叫自訂函式updateEventDetails顯示event細節
            //預設函式.stopPropagation 停止這個event
			
            $("#input1").keypress(updateEventDetails);
			//文字區塊#input1有按下按鍵時
			//呼叫自訂函式updateEventDetails顯示event細節
        });
        
        function updateEventDetails(evt) {
			//自訂函式updateEventDetails
            // clear any current text before we update the value fields
            $(".detailLine span[id]").text("");
            //DIV.detailLine有ID的span 預設內容文字為空
			
            $("#evtType").text(evt.type);
            $("#evtWhich").text(evt.which);
            $("#evtTarget").text(evt.target.id);
            if (evt.relatedTarget)
				//若evt.relatedTarget存在則顯示related目標
                $("#evtRelated").text(evt.relatedTarget.tagName+"#"+evt.relatedTarget.id);
            $("#evtPageX").text(evt.pageX);
            $("#evtPageY").text(evt.pageY);
            $("#evtClientX").text(evt.clientX);
            $("#evtClientY").text(evt.clientY);
            $("#evtMetaKey").text(evt.metaKey);
			//metaKey傳回特殊鍵是否被按:true/false
			
            if (evt.data)
                $("#evtData").text(evt.data.name);
			//如果有 data passed in, display the name inside data
			//{ name: "Div 1" }就是pass進去的data
			//evt.data.name => output:Div 1
        }
    </script>

   <div id="content">

        <div id="Div1" class="smallbox inline">Mouse over and click here (Div1)</div>
        <div id="Div2" class="smallbox inline">Mouse over and click here (Div2)</div>
        <div id="Div3" class="smallbox inline">Mouse over and click here (Div3)</div>
        <div>Type some text here: <input type="text" id="input1"></div>
        <div id="eventDetails">
            <h3>Event Details</h3>
            <div class="detailLine">
                <span class="lineitem">Event type: </span><span class="lineitem" id="evtType"></span>
                <span class="lineitem">Key/Button: </span><span class="lineitem" id="evtWhich"></span>
            </div>
            <div class="detailLine">
                <span class="lineitem">Target: </span><span class="lineitem" id="evtTarget"></span>
                <span class="lineitem">Related Target: </span><span class="lineitem" id="evtRelated"></span>
            </div>
            <div class="detailLine">
                <span class="lineitem">pageX: </span><span class="lineitem" id="evtPageX"></span>
                <span class="lineitem">pageY: </span><span class="lineitem" id="evtPageY"></span>
            </div>
            <div class="detailLine">
                <span class="lineitem">clientX: </span><span class="lineitem" id="evtClientX"></span>
                <span class="lineitem">clientY: </span><span class="lineitem" id="evtClientY"></span>
            </div>
            <div class="detailLine">
                <span class="lineitem">Meta Key: </span><span class="lineitem" id="evtMetaKey"></span>
                <span class="lineitem">data: </span><span class="lineitem" id="evtData"></span>
            </div>
        </div>
		
034 Challenge - Create a hover effect
---------------------------------
<div class="event">你的內容</div>
目標:滑鼠hover過DIV.event時，改變CSS樣式
---------------------------------
<style>
.highlightEvent{
	background-color: cornsilk;
}

</style>
---------------------------------
035 Solution - Create a hover effect
---------------------------------
        $("document").ready(function() {
			$("div.event").hover(highlight); 
		//hover過的時候
		//將div.event呼叫自訂的highlight函式來改CSS樣式
        });
		
		function highlight(){
			$(this).toggleClass("highlightEvent");
		}

---------------------------------
036 Introduction to jQuery animations
.hide()
.show()
.toggle()

.fadeIn()
.fadeOut()
.fadeTo()
.fadeToggle()

.slideDown()
.slideUp()
.slideToggle
037 Hiding and showing elements

  <script type="text/javascript">
        $(function() {
            $("#show").click(function() {
                $("#theDiv").show("normal");
            });
			//點擊按鈕#show 
			//.show() 直接秀出DIV#theDiv
			//.show() 可加入速度:normal/fast約200ms/slow約600ms
			
            $("#hide").click(function() {
                $("#theDiv").hide(1000, "swing");
            });
            //點擊按鈕#hide
			//.hide() 直接隱藏DIV#theDiv
			//.hide() 速度1000毫秒 樣式swing慢慢縮小/linear
			
			$("#toggle").click(function() {
                $("#theDiv").toggle("slow", completion);
            });
			//點擊按鈕#toggle 切換DIV#theDiv
			//.toggle() 速度slow 
			//animation完成後 呼叫自訂函式completion
			
        });
        
        function completion() {
			// 自訂函式completion
            // the value of this is set to the DOM element being affected
            $(this).text("Animation complete");
			//this=有在動的目標DIV#theDiv 內顯示文字Animation complete
        }
    </script>
   <div id="content">
        <ul>
            <li><code>show()</code>: Reveals the matched elements using an optional animation</li>
            <li><code>hide()</code>: Hides the matched elements using an optional animation</li>
            <li><code>toggle()</code>: Toggles the visible state of the matched elements using an optional animation</li>
        </ul>
        <div id="theDiv" class="box">
        </div>
        <button id="show">Show</button>
        <button id="hide">Hide</button>
        <button id="toggle">Toggle</button>
    </div>

038 Fading elements
    <script type="text/javascript">
        $(function() {
            $("#fadein").click(function() {
                $("#theDiv").fadeIn("normal");
            });
			//淡入速度normal/fast/slow 也可以留空.fadeIn()
			//也可以.fadeIn(200)以200ms速度淡入
			
            $("#fadeout").click(function() {
                $("#theDiv").fadeOut("normal");
            });
			//display:none
			//淡出速度normal 也可以留空.fadeOut()
			
			
            $("#fadeto3").click(function() {
                $("#theDiv").fadeTo("slow", 0.3);
            });
			//fadeTo 速度slow 將DIV#theDiv淡出成透明度30%=0.3
			
			
            $("#fadeup").click(function() {
                $("#theDiv").fadeTo("slow", 1.0, onComplete);
            });
			//fadeTo 速度slow
			//將DIV#theDiv淡出成透明度100%=1.0全不透明
			//執行完動畫後呼叫自訂函式onComplete
			
			
			
            $("#pulse").click(function() {
				//按下按鈕#pulse 
				//DIV#theDiv產生一連串淡入淡出動畫
                $("#theDiv").fadeTo("fast", 0.3)
                            .fadeTo("fast", 1.0)//不透明
                            .fadeTo("fast", 0.3)
                            .fadeTo("fast", 1.0);//不透明
            });
        });
        
        function onComplete() {
            $(this).text("Fading effect complete");
			//DIV#theDiv內文字變成"Fading effect complete"
			
        }
    </script>
	    <div id="content">

        <div id="theDiv" class="box">
        </div>
        <button id="fadein">Fade In</button>
        <button id="fadeout">Fade Out</button>
        <button id="fadeto3">Fade To 30%</button>
        <button id="fadeup">Fade To 100%</button>
        <button id="pulse">Pulsate</button>
    </div>



039 Sliding elements
    <script type="text/javascript">
        $(function() {
            $("#slideup").click(function() {
                $("#theDiv").slideUp(1000);
            });
			//按下按鈕#slideup 將DIV#theDiv以1000ms速度向上收合
			//也可以留空.slideUp()
			
			
            $("#slidedown").click(function() {
                $("#theDiv").slideDown(200);
            });
            //按下按鈕#slidedown將DIV#theDiv以200ms速度向下展開
			//也可以留空.slideDown();
			//或.slideDown("fast", "linear")快速以linear方式展開
			
			$("#toggle").click(function() {
                $("#theDiv").slideToggle("slow");
            });
			//按下按鈕#toggle
			
			$("#toggle").click(function() {
                $("#theDiv").toggle("slow", completion);
            });
			//慢慢toggle 動畫完後呼叫自訂函式completion
			

        });
		function completion() {
            // the value of this is set to the DOM element being affected
            $(this).text("Animation complete");
			
			console.log("slideToggle complete on" + this.id);
			//this就是目前在動的東西DIV#theDiv
			//console結果為this.id=theDiv
			}
    </script>
    <style type="text/css">
        div#theDiv {
            width: 250px;
            height: 180px;
            margin: 10px;
            padding: 20px;
            background: #b3c8d0;
            border: 1px solid gray;
            cursor: pointer;
        }
        
        p,
        span {
            font-size: 16pt;
        }
        
        button {
            margin: 5pt 5pt 0 0;
        }
    </style>
    <div id="content">
        <div id="theDiv">
        </div>
        <button id="slideup">Slide Up</button>
        <button id="slidedown">Slide Down</button>
        <button id="toggle">Toggle Slide</button>
    </div>

040 Custom animations
-------------------------------------------------
animate(properties, duration, easing, complete)

animate(properties, parameters)

[duration]
default:400ms
"slow"/"fast"

[easing]
"swing"/"linear"

[complete]
可呼叫自訂callback函式
-------------------------------------------------
   <script type="text/javascript">
        $(function() {
            $("#right").click(function() {
                $("#theDiv").animate({ width: "500px" }, 1000);
            });
			//按下按鈕#right
			//DIV#theDiv寬度以1000ms速度變500px
			
            $("#text").click(function() {
                $("#theDiv").animate({ fontSize: "24pt" }, 1000);
            });
			//按下按鈕#text 
			//DIV#theDiv裡面的字變大
			
            $("#move").click(function() {
                $("#theDiv").animate({ left: "500" }, 1000, "swing");
            });
			//按下按鈕#move
			//DIV#theDiv向右移動500px 速度1000毫秒 動畫swing
			
            $("#all").click(function() {
                $("#theDiv").animate({ left: "+=500", fontSize: "24pt", width: "500px" }, 1000, "swing");
            });
			//按下按鈕#all
			//DIV#theDiv一次進行一堆動畫
			//left: "+=500" 不管身在哪裡 朝左距離都加上500px
			
        });
    </script>
    <style type="text/css">
        #theDiv {
            position: relative;
            width: 250px;
            height: 180px;
            margin: 10px;
            padding: 20px;
            background: #b3c8d0;
            border: 1px solid black;
            font-size: 16pt;
            cursor: pointer;
            left: 100px;
        }
        
        button {
            margin: 5pt 5pt 0 0;
        }
    </style>
	    <div id="content">
        <div id="theDiv">Animate Me</div>
        <button id="right">Grow Right</button>
        <button id="text">Animate Text</button>
        <button id="move">Move Element</button>
        <button id="all">All Properties</button>
    </div>


041 Challenge - Build an image rotator 圖片輪播

輪播DIV#hero內的圖片
-----------------------------------------
<div id ="hero">
	<div class="current"><img src="圖片網址"></div>
	<div><img src="圖片網址"></div>
	<div><img src="圖片網址"></div>
	<div><img src="圖片網址"></div>	
</div>
-----------------------------------------
<style>
#hero{
	height:300px;
	width:960px
}
#hero div{
	position:absolute;
	z-index:0;
}
#hero div.previous{
	z-index:1;
}
#hero div.current{
	z-index:2;
}

</style>
-----------------------------------------
042 Solution - Build an image rotator
觀察得知DIV.current之z-index=2 其他人z-index=1

$(function(){
	//create the image rotator
	setInterval("rotateImages()", 3000);
	//每三秒執行自訂函式rotateImages()
});

function rotateImages(){
	var oCurPhoto=$('#hero div.current');
	//選取目前的div
	var oNxtPhoto=oCurPhoto.next();
	//取鄰近的下一個div
	if(oNxtPhoto.length == 0)
		oNxtPhoto = $('#hero div:first');
	//下一個div沒圖了 就回到DIV#hero的第一個div第一個圖片

	oCurPhoto.removeClass('current').addClass('previous');
	//將class=current改為class=previous z-index=1 把圖片移到新圖後面
	oNxtPhoto.css({opacity:0.0}).addClass('current').animate({opacity:1.0}, 1000,
	function(){
		oCurPhoto.removeClass('previous');
	});
	//動畫  
	//下一個div $oNxtPhoto設定css
	//由透明至不透明 加上類別current以讓z-index=2
	//動畫以1000ms速度播放
	
}

043 jQuery and AJAX 載入txt

<p id="ajaxContent"></p>

<script type="text/javascript">
    $("document").ready(function() {
        getData();//自訂的AJAX函式getData
      });
      
      function getData() {
        $.ajax({
          // the URL for the request
		  // 你要 retrieve 的 data testdata.txt
          url: "testdata.txt",

          // whether this is a POST or GET request
		  // 不改動server上的data時通常用GET
		  // 要改data時通常用POST
          type: "GET",
         
          // the type of data we expect back
          dataType : "text",
          
          // function to call for success
		  // 成功時呼叫自訂函式successFn
          success: successFn,

          // function to call on an error
		  // 失敗時呼叫自訂函式errorFn
          error: errorFn,
                           
          // code to run regardless of success or failure
          complete: function( xhr, status ) {
            console.log("The request is complete!");
          }
        });
      }
      
      function successFn(result) {
        console.log("Setting result");
      	$("#ajaxContent").append(result);
		//result是個參數 成功時就把testdata.txt內容append進去
		//若去console=>source面板 滑鼠移到result
		//即發現result是testdata.txt內的內容
	  }
      function errorFn(xhr, status, strErr) {
        console.log("There was an error!");
      }
  </script>


044 Helper functions 載入html

 <p id="ajaxContent"></p>

<script type="text/javascript">
        $("document").ready(function() {
            getData();//自訂的AJAX函式getData
        });
        
        function getData() {
			
			//甲。載入txt
            // use the get() shorthand method to request a resource
			// 成功時呼叫自訂函式successFn
            $.get("testdata.txt", successFn);
            
			//乙。載入遠端或本機html 使用load
            // the load() shorthand method performs the common task of retrieving HTML content
            // and inserts the returned content into the specified element. 
            //$("#content").load("testdata.html");
            
			//丙。載入遠端或本機html的一部分
            // you can also specify a portion of the content to load
            //$("#content").load("testdata.html #p2");
			//或$("#content").load("testdata.html p:last");
			//傳入最後一段<p>
        }

        function successFn(result) {
            console.log("Setting result");
            $("#ajaxContent").append(result);
        }
        function errorFn(xhr, status, strErr) {
            alert(strErr);
        }
    </script>


045 Working with different data types 載入json xml

-------testxmldata.xml------------------------

<data>//層一<data>
	<name>yourname</name>//層二<name> 
	<title>yourcourse</title>//層二<title>
</data>
//data child = name,title
//name child = yourname
----------------------------------------------


<script type="text/javascript">
        $("document").ready(function() {
            //getXMLData();//甲。自訂的AJAX函式getXMLData
            getJSONData();//乙。自訂的AJAX函式getJSONData
        });

        //甲。自訂的AJAX函式getXMLData
		function getXMLData() {
            $.get("testxmldata.xml", function(result) {
				//result乃是testxmldata.xml之內容
                var title = result.getElementsByTagName("title")[0];//層二<title> 第一枚
                var name = result.getElementsByTagName("name")[0];//層二<name> 第一枚
                
				//firstChild.nodeValue為預設之取node值法
				//層二<title>第一枚內值yourname + "by"+層二<name>第一枚內值yourcourse
				var val = title.firstChild.nodeValue + " by " + name.firstChild.nodeValue;
                $("#ajaxContent").append(val);
				//印出 yourcourse by yourname
            });
        }

        //乙。自訂的AJAX函式getJSONData
		// retrive img from flickr
		function getJSONData() {
            var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
            $.getJSON( flickrAPI, {
                tags: "space needle",//image tag="space needle"
                tagmode: "any",
                format: "json"
                },
                successFn);//成功時呼叫自訂函式successFn
        }
		//乙。自訂的AJAX函式getJSONData(part 2)
        function successFn(result) {
			//result是array of json object 
            $.each(result.items, function(i, item) {
				//loop over each one item in the result
				//items:specific in this case
				//item.media.m property
                $("<img>").attr("src", item.media.m).appendTo("#ajaxContent");
				
				//stop at 5 images, 01234故i=4時結束each function
                if (i === 4) {
                    return false;
                }
				//結果 印出五張圖片
            });
        }

        function errorFn(xhr, status, strErr) {
            alert(strErr);
        }
    </script>



046 Using global AJAX handlers 顯示整個AJAX過程
--------------------------------------------------
[AJAX request sent]
ajaxStart()
	|
[Request about to be sent]
ajaxSend()
 /          \ 
[Request   [Request
succeeds]   fails]
ajaxSuccess() ajaxError()
\			/
[Request complete]
 ajaxComplete()
		|
[All requests ended]
 ajaxStop()
--------------------------------------------------
<script type="text/javascript">
        $("document").ready(function() {
            $(document).ajaxStart(function () {
                console.log("AJAX starting");
            });//預設ajaxStart

            $(document).ajaxStop(function () {
                console.log("AJAX request ended");
            });//預設ajaxStop

            $(document).ajaxSend(function (evt, jqXHR, options) {
                console.log("About to Send request for data...");
            });//預設ajaxSend

            $(document).ajaxComplete(function (evt, jqXHR, options) {
                console.log("Everything's finished!");
            });//預設ajaxComplete

            $(document).ajaxError(function (evt, jqXHR, settings, err) {
                console.log("Hmmm. Seems like there was a problem: " + err);
            });//預設ajaxError 錯誤時才會跳出

            $(document).ajaxSuccess(function (evt, jqXHR, options) {
                console.log("Looks like everything worked!");
            });//預設ajaxSuccess

            getData();
        });
      
        function getData() {
            $.get("testdata2.txt", successFn);
        }
        
        function successFn(result) {
            console.log("Setting result");
            $("#ajaxContent").append(result);
        }
        function errorFn(xhr, status, strErr) {
            alert(strErr);
        }
    </script>
 
 
047 Challenge - Create a dynamic news service
動態載入news

048 Solution - Create a dynamic news service
news.json---------------------------
{
	"newsStories":[//第一層newsStories
	{
		"title":"<h3>你的文字</h3>"
		//第二層title
		"content":"<p>你的文字</p>"
		//第二層content
	}
	]
	
}

------------------------------------
<script>
$("document").ready(function() {
  // fetch the AJAX content
  
  //甲。load "news.txt"至div#newsContent
  $("#newsContent").load("news.txt");
  
  //乙。載入news.json 成功呼叫自訂函式successFn
  //$.getJSON("news.json", successFn);
});

//乙。載入news.json 自訂函式successFn
function successFn(result) {
	//result為news.json之內容
	//列舉第一層newsStories
  $.each(result.newsStories, function(i, item) {
    //append進第二層title和content進div#news
    var newsDiv = $("<div class='news'>");
    newsDiv.append(item.title);
    newsDiv.append(item.content);
    // div#news 再append進 div#newsContent
    $("#newsContent").append(newsDiv);
  });
}

</script>


049 Goodbye
jquery.com
jquerymobile.com
jqueryui.com

jq mobile esst
js and json
js and ajax


Source: JQ ESST