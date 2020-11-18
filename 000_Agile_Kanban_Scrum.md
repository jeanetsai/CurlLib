工具:Leankit (Kanban)
工具:JIRA (Scrum)
工具:
visual studio team service
(burndown chart)

2.1. Agile Fundamentals
03.The software crisis

Waterfall 有五階段:
Requirements
Analysis and Design
Development
Testing
Deployment and Maintenance

缺點:
成本太高 無法適應市場變動
屬於Top-down的管理
範例 開發OS系統

04.Agile to the rescue
擁抱變化

05.Agile principles

early and continuous delivery of valuable software
在幾周或幾個月內完成一個iteration
去除外來的micro management
領導人是servant leader

06.Agile principles continued

self-organized teams


3.2. Scrum - The Developer Perspective
07.Scrum introduction
[何謂Scrum]
- A framwork, 用來幫助開發複雜的產品
- 網站 scrumguides.org
- 只有3個 team roles, 5 events, 以及3 artifacts(deliverables)

[Scrum有三個角色]
Product owner
Development team member
Scrum Master

[Scrum時間長度]
- 通常是30天以內
- Product backlog裡面取出srpint backlog
並在30天以內完成

[Scrum Sprint為何]
- Sprint Goal: written concisely
- The development team 計畫如何將Goal items 實作為a product increment
- Sprint backlog 是 product backlog 裡面取出來的，再加上一些 development team 覺得需要做的東西

08.Empiricism
Based on prior experience
Plan based on fact

09.The scrum pillars (TIA)
[Scrum]特性[TIA]
- Transparency 透明
- Inspection 檢查
- Adaptation 適應

10.Scrum values
[Scrum values]
- Focus
- Respect
- Openness
- Courage
- Commitment

11.Scrum roles - The product owner
[Product Owner]
- Defines what will be built
- Own Product Backlog
- PO要負責backlog的成敗，雖然team member 也可以修改backlog 但要經過 PO 同意

12.Scrum roles - The development team member
[Development Team Member]
- 3-9人組成
- cross-functional 包含設計 開發 測試 文件人員
- 這個團隊是沒有manager的 (flat hierarchy)
- 開發團隊擁有 sprint backlog 內容包含從product backlog取出的項目和一些development tasks

13.Scrum roles - The scrum master
[Scrum Master]
- Scrum coach
- A Servant Leader (不是top down的manager)

14.Scrum events
[Scrum events包含]
1. Sprint => work period of an iteration
2. Sprint Planning
3. Daily Scrum
4. Sprint review
5. Sprint retrospective
=> how to be more efficient

當Srpint goal is no longer valid, 只有PO可以取消這個sprint

15.Scrum artifacts - The product backlog

[Scrum artifacts包含三部分]
1. Product Backlog
2. Sprint Backlog
3. Product Increment

[Product Backlog包含]
- Requirements
- Enhancement Requests
- Defects
- User Stories
- New Features

[Product Backlog]
- 團隊成員可以改 但要經過PO同意
- PO 負責 backlog 的成敗
- 修改 sprint 這件事 不應占用超過團隊工作時間10%

16.Scrum artifacts - The sprint backlog and increment
[sprint backlog]
- 由 product backlog 取出
並加上一些開發團隊的tasks

[product increment]
- "DONE" version of the product 
- Should be usable and provide some busines values
- Must be polished enough to ship

[Feature Teams] vs. [Component Teams]
[Feature Teams]
- cross functional
- ability to implement end-to-end functionality
[Component Teams]
- specialized around specific components (例如database專才)
- would require multiple component teams to implement end-to-end functionality

=>Scrum 比較需要跨領域的 Feature teams

17.Common myths
1. Daily Scrum 不是 status meeting, PO和SM甚至不用參加
2. Agile是個mindset, tool並不重要
3. Agile 要做 documentation
4. Agile 可以做 design
5. Sprint review 不是 product demo, 是要做回顧效率及展望


4.3. Agile Software Engineering Techniques
18.Extreme programming (XP)

[Extreme programming (XP)]
1.每周的iteration(Weekly Cycle)
2.長期的goal=>Quarterly Cycle
3.類似scrum team, XP team也是cross-functional可以包含designer等

19.XP execution

[XP execution]
- XP teams do test-first development
- XP teams use pair programming (兩個工程師 一個打字 一個快速review)

20.Pair programming
I shaped :是專家 但只有少數精通領域
T shaped :是通才

21.Test-driven development (TDD)

[Test-driven development (TDD)]
1. write a test that fails
2. write enough code to compile
3. complete code to meet requirements of test

[Test-driven development (TDD)]
Ability to bypass or mock dependencies of functions and only focus on code for specific test
- Mockito
- PowerMock
- MOQ
- others

22.User stories
範例:"As a fitness club member, I should be able to view my payment history so I know how I am being billed."

3Cs:card, conversation, confirmation

23.Epics and themes
[Epics]
Large user story
Work flow diagram
範例:"As a fitness club member, I should be able to set up a new club member account."

[Themes]
Themes are attributes of user story

24.Agile estimation
估時間
Absolute Units
做這件事 有人可能會說要兩天 有人可能會說要兩周

Relative Units
用相對的 例如這個是另一個的兩倍難

Fibonacci Scale:
0,1,2,3,5,8,13
(每個是前面的總和)
用這個來量測難度

Exponential Scale
0,1,2,4,8,16
(每個是前面的兩倍)
用這個來量測難度

XS,S,M,L,XL
用這個來量測難度

25.Planning poker
量測難度的工具
[Planning poker]
每個人拿到象徵難度的數字卡
然後對每個user story出牌
和別人不一樣的要解釋為何
數字>8表示太難了 要做調整

26.DevOps - The problem
開發流程:
Business idea
=>Development
=>QA
=>IT Operations(stability)
=>Production

27.DevOps - The solution
[DevOps]
指Dev和Ops兩個團隊的合作關係
Dev=>deleopers and QA teams
Ops=>IT operations teams
- Requires a change in organizational mindset
- Supported by processes and tools
- Faster user feedback (reduces lead time from feature requirements to deployment)

[DevOps]CI, CD, Continuous Deployment

Continuous Integration (CI):
Practice of frequently committing changes to the source code
Continuous Delivery (CD):
Capability to keep product stable after every change so that it is always shippable
Continuous Deployment:
Automatically deploying product increment to production or production-like environment

[DevOps]
- Agile and DevOps complement each other
- Requires a cultural change by the organization to implement successfully

28.Agile reporting
三種Agile常用的圖
burndown charts
burnup charts
cumulative flow diagrams (CFD)

工具:
visual studio team service

[burndown charts]
Y軸: remaining works(story points)
X軸: 時間
是一個下降的圖
可以看進度是否落後理想的平滑斜線(guildline line)

[burnup charts]
Y軸: 完成的工作量
X軸: 時間
可以看進度是否落後理想的平滑斜線(guildline line)

[cumulative flow diagrams (CFD)]
Y軸: 完成的工作量
X軸: 時間
分成五塊:deployed, accepted, finished, started, unstarted
可以找出 bottleneck 工作卡在哪裡比較多

5.4. Kanban for Developers
29.Lean history
Toyota
Work in Progress WIP 最小化=> Minimum inventory

Little's Law
Avg Num of Customeres(L)=
Arrival Rate(lambda) x Avg Time Spent(W)

Work in Progress(L)=
Completion Rate(lambda) x Cycle Time(W)
目標:最小化 Cycle time 以減少 WIP
Cycle time:軟體開發之時間
(planning+design+develop+accept)

30.Kanban board
工具:Leankit
拖曳 to do list
中間的看板(WIP)項目太多會變紅色

31.Limiting work in progress (WIP)
盡量減少WIP
(進行一半的項目)

32.How to set WIP limits
簡單的方法:
WIP數=團隊成員數+buffer
例如一團隊有6人 buffer設50%
WIP數就限制在6+6(0.5)=9個以內

step1:找出最花時間的步驟
step2:算出此步驟的WIP=成員數+buffer
step3:算出其他步驟的WIP
每一步驟都分成Doing/Done兩欄

Kanban Daily Standup (meeting)
開會是要找出bottleneck以改進效率

33.Kanban vs. scrum
Scrum:
is a framework
Kanban:
is a process management tool
可以分開用 或合在一起用
都有一個producdt backlog
Kanban比較輕鬆 沒有定義時間 沒有定義角色
Kanban的daily standup目標只在於找出瓶頸
Kanban目標就是減少 WIP

6.5. Scaling Agile
34.Scaling agile
Why scale Agile?
- one product with too many features to be developed in a specific timeframe
- one team cannot feasibly produce large amount of features
- Business case to ship those features to market in a specific timefram compels organization to scale

Rules of scaling
1. don't scale, only if necessary
2. Scale slowly: Continuously identify and address challanges and minimize dependencies
3. Develop architectural standards
and guidelines before scaling

35.Scaling frameworks
Scaling框架例如
[Nexus]框架
- developed by co-inventor of scrum
- Essentially Scrum with one additional artifact, a few additional events, and one additional team role
- 適用 principles of Scrum
- Nexus就像running multiple Scrum teams in parallel, that prouct one integrated product increment at end of sprint

[Scrum@Scale]框架
- developed by co-inventor of scrum
- 就像 Nexus, Scrum@Scale is an implementation of Scrum by several teams in parallel
- Scrum@Scale can be scaled infinitely

36.Scaling frameworks, continued
[LeSS]框架
- does not violate any rules of scrum
- more prescriptive than other scaling frameworks
- work with 2-8 teams, and 1 product owner, with 1 Scrum master per 1-3 teams
- introduces the overall retrospective, an event that occurs after the sprint retrospective
- extension of framework for >8 teams is [LeSS Huge]
- [LeSS Huge] introduces area product owner as new role
- 1 PO, 1 backlog
網站
less.work

[Scaled Agile Framework (SAFe)]
- Uses scrum constructs, but also uses a combination of other agile frameworks
- Work at multiple levels; the base levels requred for SAFe implementation are called program and team
- combination of levels form the configurations Essential SAFe, Full SAFe, Large Solution SAFe, and Portfolio SAFe

SAFe特性
- smallest team unit is similar to a typical agile team
- multiple teams work in parallel at the team levels
- work from all agile teams combined to produce product increment at the program level


7.Conclusion
37.Next steps
done

Source:Agile Software Development