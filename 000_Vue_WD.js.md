注意:
v-for, v-model 這些要在<div id="vue-root"> vue root之下


02-Introducing.Vue
01.What.is.Vue.and.what.is.it.good.for
JS Library for creating User Interfaces
支援IE9以上

02.Vue.concepts.and.jargon

Instance:
var app = new Vue();

Vue Jargon
- Directives (for example, v-for)
- Props (pass data)
- One-way data flow
- Custom events
- Virtual DOM

03.Vue.tools

Yarn (or npm):dependency manager
package.json + node_modules

04.Installing.the.Vue.devtools
chrome store 尋找 vue.js devtools
firefox addons 尋找 vue.js devtools
---------------------------------------
03-First.Project.-.Customizer
建立一個選取size就會改變鞋子大小的選單
---------------------------------------
01.Installing.Vue.on.an.existing.site
---------------------------------------
重要 貼至最下面</body>前方
---------------------------------------
<!--
Polyfills for older browsers
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
<script>window.Promise || document.write('<script src="../../../node_modules/es6-promise/dist/es6-promise.auto.min.js"><\/script>')</script>
-->

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>window.Vue || document.write('<script src="../../../node_modules/vue/dist/vue.js"><\/script>')</script>
//最後一行
<script src="app.js"></script>
---------------------------------------
02.Creating.an.instance.from.the.mock-up
---------------------------------------
index.html
---------------------------------------
					<!-- VUE COMPONENTS GO HERE -->
					<div id="vue-root">
					    <div class="customizer">
					        {{ message }}
					    </div>
					</div>
---------------------------------------
app.js
---------------------------------------
(function() {
  "use strict";

  var ProductCustomizer = new Vue({
    el: "#vue-root",//el=element ID為vue-root者
    data: {//塞入data
        message: "Product customizer will go here"
    }
  });
})();
---------------------------------------
03.Identifying.components.and.data
---------------------------------------
index.html 最後一行放ch02-inventory.js
---------------------------------------
<script src="../../../assets/ch02-inventory.js"></script>
<script src="app.js"></script>
---------------------------------------
04.Adding.data.to.our.component
v-for迴圈讀進陣列sizes: window.Inventory.allSizes
---------------------------------------
app.js
---------------------------------------
(function() {
  "use strict";

  var ProductCustomizer = new Vue({
    el: "#vue-root",
    data: {
      sizes: window.Inventory.allSizes
    }
  });
})();
---------------------------------------
index.html
---------------------------------------
					<!-- VUE COMPONENTS GO HERE -->
					<div id="vue-root">
						<div class="customizer">
							<div class="product-image">
								<img src="../../../assets/red.jpg" alt="" />
							</div>
							<div class="selectors">
								<div class="field-group">
									<label for="size-options">Size:</label>
									<select name="sizeOptions" id="size-options">
										<option v-for="size in sizes">{{ size }}</option>
										//v-for迴圈
										//sizes=array
										//for size in sizes讀進sizes裡面的data
										
									</select>
								</div>
								<div class="field-group">
									<label for="color-options">Color:</label>
									<select name="colorOptions" id="color-options">
										<option>Red</option>
										<option>Blue</option>
										<option>Green</option>
										<option>Brown</option>
									</select>
								</div>
							</div>
						</div>
					</div>
---------------------------------------
ch02-inventory.js(在上層目錄的asset)
---------------------------------------
window.Inventory = {
  allSizes: (function(small, large) {
    var sizes = [];
    for (var i = small; i <= large; i++) {
      sizes.push(i);
      sizes.push(i + 0.5);
    }

    return sizes;
  })(7, 12),

  allColors: ['red', 'blue', 'green', 'purple', 'brown'],

  bySize: {
    "7": [
      "red", "blue"
    ],
    "7.5":  [
      "red", "blue"
    ],
    "8":  [
      "red", "brown", "green", "purple", "blue"
    ],
    "8.5":  [
      "red", "blue"
    ],
    "9":  [
      "brown", "green", "purple"
    ],
    "9.5":  [
      "brown", "green", "purple"
    ],
    "10":  [
      "brown", "green", "purple"
    ],
    "10.5":  [
      "brown", "green", "purple"
    ],
    "11":  [
      "brown", "green", "purple"
    ],
    "11.5":  [
      "brown", "green", "purple"
    ],
    "12":  [
      "brown", "green", "purple"
    ],
    "12.5":  [
      "brown", "green", "purple"
    ]
  },

  byColor: {
    "red" : ["7", "7.5", "8", "8.5"],
    "blue" : ["7", "7.5", "8", "8.5"],
    "brown" : ["8", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5"],
    "purple" : ["9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5"],
    "green" : ["8", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5"]
  }
};
---------------------------------------
05.Using.a.model.to.begin.interactivity
v-model設定select選單預設值
---------------------------------------
app.js
---------------------------------------
(function() {
  "use strict";

  var ProductCustomizer = new Vue({
    el: "#vue-root",
    data: {
      sizes: window.Inventory.allSizes,
	  //讀進陣列window.Inventory.allSizes
	  //並命名為sizes
      selectedSize: 9
	  //(v-model將size選單預設值設為9)
    }
  });
})();

---------------------------------------
index.html (v-model將size選單預設值設為9)
v-model="selectedSize"(等於9)
---------------------------------------
										<select name="sizeOptions" id="size-options" v-model="selectedSize">
						//v-model將size選單預設值設為9				
											<option v-for="size in sizes">{{ size }}</option>
										</select>
---------------------------------------										
																			<p class="product-caption">
				Selected size: {{ selectedSize }}
									</p>
			//前面定義了selectedSize=9						
			//故此行html中出現字Selected size:9
---------------------------------------
06.Using.v-bind.to.update.classes
用v-bind來動態新增/改變類別
類別不同時 鞋子的size改變
---------------------------------------
							<div v-bind:class="['product-image', 'product-size--' + selectedSize.toString().replace('.', '_')]">
							//用v-bind來動態新增/改變類別
							//類別不同時 鞋子的size改變
									<img src="../../../assets/red.jpg" alt="" />
								</div>
---------------------------------------
07.Simple.templates.with.computed.properties
把上個06範例改成更好懂的寫法
---------------------------------------
app.js
---------------------------------------
(function() {
  "use strict";

  var ProductCustomizer = new Vue({
    el: "#vue-root",
    data: {
      sizes: window.Inventory.allSizes,
      selectedSize: 9
    },
    computed: {
      sizeClass: function() {
        return "product-size--" + this.selectedSize.toString().replace(".", "_");
		//回傳sizeClass
      }
    }
  });
})();
---------------------------------------
index.html
---------------------------------------
								<div v-bind:class="['product-image', sizeClass]">
								//回傳sizeClass
									<img src="../../../assets/red.jpg" alt="" />
								</div>
---------------------------------------
08.Listen.for.an.event.with.v-on
v-on 事件監聽
---------------------------------------
app.js
---------------------------------------
(function() {
  "use strict";

  var ProductCustomizer = new Vue({
    el: "#vue-root",
    data: {
      sizes: window.Inventory.allSizes,
      selectedSize: 9,
      colors: window.Inventory.allColors
    },
    computed: {
      sizeClass: function() {
        return "product-size--" + this.selectedSize.toString().replace(".", "_");
      }
    },
    methods: {
      updateColorsBySize: function(evt) {
        this.colors = window.Inventory.bySize[evt.target.value];
      }
	  //新增事件
	  //叫出inventory.js內的變數bySize
    }
  });
})();

---------------------------------------
index.html
---------------------------------------
										<select name="sizeOptions" id="size-options" v-model="selectedSize" v-on:change="updateColorsBySize">
										//v-on事件名稱change
										//觸發app.js的method updateColorsBySize
										
											<option v-for="size in sizes">{{ size }}</option>
										</select>
---------------------------------------
09.Shorthand.notation.for.faster.writing
---------------------------------------
v-bind:class
也可以簡寫成 :class

v-on:change
可以簡寫成@change
---------------------------------------
10.Challenge.-.Activate.the.color.selector
---------------------------------------
Challenge: Color Selector
Activate the color selector:
- swap out hard-coded color options
- track the selected color
- update the image src
- check inventory and update the size selector
Extra credit: update selectors by availability
---------------------------------------
11.Solution.-.Activate.the.color.selector
---------------------------------------
					<!-- VUE COMPONENTS GO HERE -->
					<div id="vue-root">
						<div class="customizer">
							<div :class="['product-image', sizeClass]">
							//簡寫v-bind:class, update class
								<img :src="sizeSrc" alt="" />
							//簡寫 :src 叫出sizeSrc函式
							</div>
							<div class="selectors">
								<div class="field-group">
									<label for="size-options">Size:</label>
									<select name="sizeOptions" id="size-options" v-model="selectedSize" @change="updateColorsBySize">
										<option v-for="size in sizes">{{ size }}</option>
									</select>
								</div>
								<div class="field-group">
									<label for="color-options">Color:</label>
									<select name="colorOptions" id="color-options" v-model="selectedColor" @change="updateSizesByColor">
										<option v-for="color in colors">{{ color }}</option>
									</select>
								</div>
							</div>
						</div>
					</div>
---------------------------------------
app.js
---------------------------------------
(function() {
  "use strict";

  var ProductCustomizer = new Vue({
    el: "#vue-root",
    data: {
      sizes: window.Inventory.allSizes,
      selectedSize: 9,
      colors: window.Inventory.allColors,
      selectedColor: "red"
    },
    computed: {
      sizeClass: function() {
        return "product-size--" + this.selectedSize.toString().replace(".", "_");
      },

      sizeSrc: function() {
        return "../../../assets/" + this.selectedColor + ".jpg";
      }
    },
    methods: {
      updateColorsBySize: function(evt) {
        var selectedSize = evt.target.value,
          availableColors = window.Inventory.bySize[selectedSize];

        this.colors = availableColors;

        // if the currently selected color isn't available in the new size,
        // set the selected color to the first available color
        if (availableColors.indexOf(this.selectedColor) === -1) {
          this.selectedColor = availableColors[0];
        }
      },

      updateSizesByColor: function(evt) {
        var selectedColor = evt.target.value,
          availableSizes = window.Inventory.byColor[selectedColor];

        this.sizes = availableSizes;

        // if the currently selected size isn't available in the new color,
        // set the selected size to the first available size
        if (availableSizes.indexOf(this.selectedSize) === -1) {
          this.selectedSize = availableSizes[0];
        }
      }
    }
  });
})();

---------------------------------------
04-Second.Project.-.Directory.Browser
01.Make.a.plan
建立一個篩選器 看某關鍵字是否在裡面 不是就篩掉
json ch03-data.js
兩個key: people, titles
---------------------------------------
ch03-data.js 這個json檔案有兩個key: people, titles
---------------------------------------
window.LMDirectory = {
  people: [
    {
      id: "lm001",
      name: "Tony Luis Salvador, MLA",
      title_cat: "architect",
      intern: false,
      title: "Principal Landscape Architect",
      bio:
        "Tony grew up engulfed,...."
      img:
        "../../../business.wpdiy.net/wp/wp-content/uploads/2015/04/tony_salvador-300x300.jpg",
      order: 0
    },
	//(中間省略)
	titles: [
    {
      display: "Architect",
      key: "architect"
    },
    {
      display: "Designer",
      key: "designer"
    },
    {
      display: "Contractor",
      key: "contractor"
    },
    {
      display: "Support Staff",
      key: "staff"
    }
  ]
};
---------------------------------------
directory.js
---------------------------------------
(function() {
  "use strict";
 //定義兩個vue component
 
  Vue.component("directory-filters", {
    template: '<form action="" id="directory-filters"><p>Insert filters here</p></form>'
  });

  Vue.component("directory-people", {
    template: "<p>Insert people here</p>"
  });

  var Directory = new Vue({
    el: "#directory-root",
	//element位置
    data: {
      people: window.LMDirectory.people
	  //將window.LMDirectory.people載入至people
    }
  });
})();

---------------------------------------
index.html
---------------------------------------
							<div id="directory-root">
								<div class="company-directory">
									<h2>
										Company Directory
									</h2>
									<p>Learn more about each person at Leaf & Mortar in this company directory.</p>
									
									//兩個vue component
									//directory-filters
									//directory-people
									<directory-filters></directory-filters>
									<directory-people></directory-people>
								</div>
							</div>
---------------------------------------
03.Pass.component.data.with.props
載入json資料
---------------------------------------
v-bind:people
值="people"(the key in json data)
簡寫成:people="people"
---------------------------------------
directory.js
---------------------------------------
(function() {
  "use strict";

  Vue.component("directory-filters", {
    template: '<form action="" id="directory-filters"><p>Insert filters here</p></form>'
  });

  Vue.component("directory-people", {
    props: ["people"],
	//加入新key props
	//如果html寫的是people-list
	//vue裡這行要改成camelcase
	//props: ["peopleList"],
    template:
      '<div class="results"> \
    <div class="person" v-for="person in people"> \
    <h3>{{ person.name }}, {{ person.title }}</h3> \
    <p> \
    <img class="size-medium alignright" :src="person.img" :alt="person.name" width="300" height="300" sizes="(max-width: 300px) 100vw, 300px" /> \
    {{ person.bio }} \
  </p> \
  </div> \
  </div>'
  });

  var Directory = new Vue({
    el: "#directory-root",
    data: {
      people: window.LMDirectory.people
    }
  });
})();

---------------------------------------
04.Build.the.filters.form
---------------------------------------
directory.js
---------------------------------------
(function() {
  "use strict";

  Vue.component("directory-filters", {
    data: function() {
      return {
        titles: window.LMDirectory.titles
      };
    },
    // custom, non-reactive data accessible in $options
    titles: window.LMDirectory.titles,
    template: `<form action="" id="directory-filters">
    <div class="group">
      <label for="txt-name">Name:</label>
      <input type="text" name="name" value="" placeholder="Name of employee" id="txt-name">
    </div>
    <div class="group">
      <label for="sel-title">Job Title:</label>
      <select name="sel-title" id="sel-title">
        <option value="">- Select -</option>
        <option v-for="title in $options.titles" :value="title.key">{{ title.display }}</option>
      </select>
    </div>
    <div class="group">
      <label><input type="checkbox" value="1"> Intern</label>
    </div>
  </form>`
  });

  Vue.component("directory-people", {
    props: ["people"],
    template:
      '<div class="results"> \
    <div class="person" v-for="person in people"> \
    <h3>{{ person.name }}, {{ person.title }}</h3> \
    <p> \
    <img class="size-medium alignright" :src="person.img" :alt="person.name" width="300" height="300" sizes="(max-width: 300px) 100vw, 300px" /> \
    {{ person.bio }} \
  </p> \
  </div> \
  </div>'
  });

  var Directory = new Vue({
    el: "#directory-root",
    data: {
      people: window.LMDirectory.people
    }
  });
})();

---------------------------------------
index.html
---------------------------------------
							<div id="directory-root">
								<div class="company-directory">
									<h2>Company Directory</h2>
									<p>Learn more about each person at Leaf &amp; Mortar in this company directory.</p>
									<directory-filters></directory-filters>

									<directory-people :people="people"></directory-people>
								</div>
							</div>
---------------------------------------
05.Wire.up.the.filters.form
//v-model.trim 修剪掉你鍵入的空白
---------------------------------------
directory.js
---------------------------------------
(function() {
  "use strict";

  Vue.component("directory-filters", {
    data: function() {
      return {
        search: {
          name: "",//你鍵入name
          title: "",//選單job title
          intern: false
		  //預設intern checkbox not checked
        }
      };
    },
    // custom, non-reactive data accessible in $options
    titles: window.LMDirectory.titles,

    template:
      '<form action="" id="directory-filters"> \
    <div class="group"> \
      <label for="txt-name">Name:</label> \
      <input type="text" name="name" value="" placeholder="Name of employee" id="txt-name" v-model.trim="search.name"> \
    </div> \
    <div class="group"> \
      <label for="sel-title">Job Title:</label> \
      <select name="sel-title" id="sel-title" v-model="search.title"> \
        <option value="">- Select -</option> \
        <option v-for="title in $options.titles" :value="title.key">{{ title.display }}</option> \
      </select> \
    </div> \
    <div class="group"> \
      <label><input type="checkbox" value="1" v-model="search.intern"> Intern</label> \
    </div> \
  </form>'
  //v-model.trim 修剪掉你鍵入的空白
  });

  Vue.component("directory-people", {
    props: ["people"],
    template:
      '<div class="results"> \
    <div class="person" v-for="person in people"> \
    <h3>{{ person.name }}, {{ person.title }}</h3> \
    <p> \
    <img class="size-medium alignright" :src="person.img" :alt="person.name" width="300" height="300" sizes="(max-width: 300px) 100vw, 300px" /> \
    {{ person.bio }} \
  </p> \
  </div> \
  </div>'
  });

  var Directory = new Vue({
    el: "#directory-root",
    data: {
      people: window.LMDirectory.people
    }
  });
})();

---------------------------------------
index.html
---------------------------------------
							<div id="directory-root">
								<div class="company-directory">
									<h2>Company Directory</h2>
									<p>Learn more about each person at Leaf &amp; Mortar in this company directory.</p>
									<directory-filters></directory-filters>

									<directory-people :people="people"></directory-people>
								</div>
							</div>
---------------------------------------
06.Respond.to.filter.form.updates
@change="notifyFilterUpdate"
自訂的notifyFilterUpdate method
---------------------------------------
directory.js
---------------------------------------
(function() {
  "use strict";

  Vue.component("directory-filters", {
    data: function() {
      return {
        search: {
          name: "",
          title: "",
          intern: false
        }
      };
    },
    // custom, non-reactive data accessible in $options
    titles: window.LMDirectory.titles,

    template:
      '<form action="" id="directory-filters"> \
    <div class="group"> \
      <label for="txt-name">Name:</label> \
      <input type="text" name="name" value="" placeholder="Name of employee" id="txt-name" v-model.trim="search.name" @input="notifyFilterUpdate"> \
    </div> \
    <div class="group"> \
      <label for="sel-title">Job Title:</label> \
      <select name="sel-title" id="sel-title" v-model="search.title" @change="notifyFilterUpdate"> \
        <option value="">- Select -</option> \
        <option v-for="title in $options.titles" :value="title.key">{{ title.display }}</option> \
      </select> \
    </div> \
    <div class="group"> \
      <label><input type="checkbox" value="1" v-model="search.intern" @change="notifyFilterUpdate"> Intern</label> \
    </div> \
  </form>',

    methods: {
      notifyFilterUpdate: function() {
        this.$emit("filter-people", this.search);
      }
    }
  });

  Vue.component("directory-people", {
    props: ["people"],
    template:
      '<div class="results"> \
    <div class="person" v-for="person in people"> \
    <h3>{{ person.name }}, {{ person.title }}</h3> \
    <p> \
    <img class="size-medium alignright" :src="person.img" :alt="person.name" width="300" height="300" sizes="(max-width: 300px) 100vw, 300px" /> \
    {{ person.bio }} \
  </p> \
  </div> \
  </div>'
  });

  var Directory = new Vue({
    el: "#directory-root",
    data: {
      people: window.LMDirectory.people
    }
  });
})();
---------------------------------------
07.Handle.custom.filter.event
篩選器成品
---------------------------------------
updatePeopleList.js
---------------------------------------
window.LMDirectory.people.filter(
  function(person) {
    return (
      (!params.intern || params.intern && person.intern) &&
      (params.name === "" ||
        person.name.toLowerCase().indexOf(params.name.toLowerCase()) !==
        -1) &&
      (params.title === "" || person.title_cat === params.title)
    );
  }
);

---------------------------------------
directory.js
---------------------------------------
(function() {
  "use strict";

  Vue.component("directory-filters", {
    data: function() {
      return {
        search: {
          name: "",
          title: "",
          intern: false
        }
      };
    },
    // custom, non-reactive data accessible in $options
    titles: window.LMDirectory.titles,

    template:
      '<form action="" id="directory-filters"> \
    <div class="group"> \
      <label for="txt-name">Name:</label> \
      <input type="text" name="name" value="" placeholder="Name of employee" id="txt-name" v-model.trim="search.name" @input="notifyFilterUpdate"> \
    </div> \
    <div class="group"> \
      <label for="sel-title">Job Title:</label> \
      <select name="sel-title" id="sel-title" v-model="search.title" @change="notifyFilterUpdate"> \
        <option value="">- Select -</option> \
        <option v-for="title in $options.titles" :value="title.key">{{ title.display }}</option> \
      </select> \
    </div> \
    <div class="group"> \
      <label><input type="checkbox" value="1" v-model="search.intern" @change="notifyFilterUpdate"> Intern</label> \
    </div> \
  </form>',

    methods: {
      notifyFilterUpdate: function() {
        this.$emit("filter-people", this.search);
      }
    }
  });

  Vue.component("directory-people", {
    props: ["people"],
    template:
      '<div class="results"> \
    <div class="person" v-for="person in people"> \
    <h3>{{ person.name }}, {{ person.title }}</h3> \
    <p> \
    <img class="size-medium alignright" :src="person.img" :alt="person.name" width="300" height="300" sizes="(max-width: 300px) 100vw, 300px" /> \
    {{ person.bio }} \
  </p> \
  </div> \
  </div>'
  });

  var Directory = new Vue({
    el: "#directory-root",
    data: {
      people: window.LMDirectory.people
    },
    methods: {
      updatePeopleList: function(params) {
        this.people = window.LMDirectory.people.filter(function(person) {
          return (
            (!params.intern || (params.intern && person.intern)) &&
            (params.name === "" ||
              person.name.toLowerCase().indexOf(params.name.toLowerCase()) !== -1) &&
            (params.title === "" || person.title_cat === params.title)
			//全部轉小寫
          );
        });
      }
    }
  });
})();

---------------------------------------
index.html
---------------------------------------
							<div id="directory-root">
								<div class="company-directory">
									<h2>
										Company Directory
									</h2>
									<p>Learn more about each person at Leaf & Mortar in this company directory.</p>

									<directory-filters @filter-people="updatePeopleList"></directory-filters>
									<directory-people :people="people"></directory-people>
								</div>
							</div>
---------------------------------------
08.Animating.with.transition-group
---------------------------------------

---------------------------------------

---------------------------------------

---------------------------------------

---------------------------------------
09.Challenge.-.Better.usability.and.animation
---------------------------------------

---------------------------------------
10.Solution.-.Better.usability.and.animation
---------------------------------------

---------------------------------------

---------------------------------------

---------------------------------------

---------------------------------------
05-Third.Project.-.Status.Updater
01.Incorporating.live.data.via.REST.APIs
---------------------------------------

---------------------------------------

---------------------------------------

---------------------------------------

---------------------------------------

---------------------------------------

---------------------------------------

---------------------------------------

---------------------------------------

---------------------------------------

---------------------------------------

---------------------------------------

---------------------------------------

---------------------------------------

---------------------------------------

---------------------------------------
01.Next.steps
Source: Vue for web designers