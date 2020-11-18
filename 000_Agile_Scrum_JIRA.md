工具:JIRA
JIRA記得要設定權限permission

00-01 - Scrum for agile software development
00-02 - What you should know
00-03 - Software tools for scrum
00-04 - Jira and Confluence
01-01 - Product owner- The what

Scrum has 3 members
- product owner
- scrum master
- development team member

01-02 - Product owner example

Product owner: defines what will be built
Product backlog=to do list
必須確定團隊在開發最重要的東西
他必須具備以下特質
1. visionary
2. understand the needs
3. domain expert
4. competitor roadmaps
5. respected
6. good communicator
Product owner 擁有 Product backlog
(to do list)

Product owner 不等於 PM

01-03 - Backlog items in Jira

按(+) 可匯入 backlog csv

01-04 - Create a project in Jira

create board 
開一個 scrum 的 board

01-05 - Development team- The how

potentially releasable increment:
function that can be released 
to users

The development team之角色
把backlog轉為potentially releasable increment
不只是工程師 也包含desiner, tester...等
具備self-organized及cross-functional特性
flat hierarchy (no managers)
例如:programmer+QA+documentation+automation+tester


01-06 - Understanding the development team
1:03

I-shaped:精通一個領域
T-shaped:通才+精通一個領域

development team最好是3-9人
2 pizza rule:
最好是兩個Pizza能餵的人數

Component team
只在一個area精通的team
Feature teams
功能完整的team (preferred in agile team)

01-07 - Dashboards in Jira

create dashboard
設定好後

Add gadget
尋找road map
出現JIRA road map=>Add gadget
尋找sprint health gadget
出現sprint health gadget=>Add gadget
尋找average
出現average age chart=>
Add gadget
尋找two dimemsional
出現two dimensional filter statistics
=>Add gadget

可以拖曳來調整外觀
edit layout鈕

01-08 - Configure gadgets in Jira
1-8 示範把工作進度畫成圖表 gadgets


01-09 - Scrum master- The servant leader

1-9 scrum master
Agile coach
Problem solver
Can influence different groups
Mentor
Servant leader

Servant leader之意
No micro management
A mentor, a coach
Convince to buy automation software
Arrange training session ( a facilitator )
Conflict resolution

01-10 - Users and groups in Jira

1-10
左方條 Jira settings
User management
右上角 invite 就能 invite user

左方groups鈕 按了會進group頁面
要讓他進某個group
就按那個group=>右上角add
=>鍵入成員名稱 新增成員

01-11 - Permissions in Jira
設定權限
進入project
左方Project settings=>permissions
右上角 use a different scheme或edit permission

01-12 - User management in Jira

左方深色條
jira settings=>user management
=>login as user

01-13 - Project roles in Jira
Project roles有不同的權限

01-14 - Create project roles in Jira
左方深色條
jira settings=>system
=>project roles
中間下方 Add project role

左方深色條
jira settings=>issues
=>permission scheme

external consultant=>read only

進入project
左方淺色條
project settings
左方深色條
permission
右上角actions
=>use a different scheme

左方淺色條
project settings
左方深色條
people
=>add people

01-15 - Test permissions in Jira

左方深色條
jira settings=>user management
右上方login as user
=>檢查權限
看一下status:to do能不能被 動到

02-01 - Product backlog overview

Product backlog=to do list
product owner設定優先權

好做的放上面
難做的放下面

02-02 - Product backlog characteristics and tips

Living document: continues to evolve
包括 title, description, order, estimate 
執行順序是PO決定
一個product有一個backlog和一個PO
包括 user stories, requirements, enhancements, bugs, ideas等



02-03 - Smart queries and filters in Jira

左方深色條=>issue and filters
=>my open issues
篩選器的使用

02-04 - Sprint backlog overview
Sprints是什麼
Scrum teams work in short iterations called sprints
一段短期完成目標的時間

Product backlog=
subset of product backlog+
development team's plan (tasks like design, integrate, test, build...)

02-05 - Product increment overview

Previous sprints+
current sprint
=product increment (potentiall releasable)
『產品增量』（Product Increment）就是在『衝刺』（Sprint）中完成的『衝刺待辦清單工作項目』（Sprint Backlog Items）
包括已完成+正在進行中者
一個 working software

PO may or many not release it immediately

3 artifacts of scrum:
- product backlog
- sprint backlog
- increment

02-06 - Boards in Jira
左方深色條projects
=>按你的project進去
=>左方淺色條
active sprints
=>左方淺色條
backlog
中間篩選器 和搜尋條

右上三個點
board settings
=>swimlances=>assignee
=>general

Board介面=>右上方create board
=>create a scrum board
=>board from an existing saved filter
=>next=>

02-07 - The definition of done

done:
defined by organization/team


02-08 - Rich text in Jira

Dashboard介面
右上三個點
=>create dashboard

JIRA software
左方深色條
JIRA settings
=>addons
=>find new addons
=>search條
=>搜尋rich text gadget
=>rich test gadget for JIRA
安裝

回到Dashboard介面
右上add gadget
=>搜尋rich text gadget
=>add gadget
gadet右上角可以edit內容

若要移除addon
=>左方深色JIRA settings
=>add ons
=>manage add ons
=>uninstall

03-01 - Sprint overview

sprint=each iteration of work

sprint events 
每個sprint cycle包含
{sprint planning
daily scrum 1
daily scrum 2
daily scrum N
sprint review
sprint retrospective}

每個sprint整個時間必須小於30天
PO決定幾時release
每個release的product最好都有商業價值

03-02 - Sprint best practices
sprint zero:
initial planning sprint

hardening sprint包含: (較無商業價值者 應避免)
fix bugs
optimize system response等

spikes (research activities)
are allowed

each sprint should provide some business value


03-03 - Sprint planning, part 1

Sprint planning:
時間通常是8小時到30天
分成兩部分

Sprint planning part 1
定義sprint goal
(此次Sprint要完成what)
Sprint planning part 2
定義如何完成goal
(定義how)

一個好的sprint goal
defined the scope of work
並且有激勵的效果


03-04 - Sprint planning, part 2

Sprint planning part 2
定義如何完成goal
(定義how)

part 1訂好目標後 進入part 2
這些如何完成goal的細節
owned by the development team
接下來幾天the development team 專注於 detailed planning 

整個development team
包括{design, code, integrate, document, build definition, database design, unit test, functional test, UI design ...
}
每個人認領backlog裡面的項目


03-05 - Sprint planning in Jira




03-06 - Dashboards for sprints in Jira


03-07 - Automation tools in Jira


03-08 - Create automation rule in Jira


03-09 - Test automation rule in Jira


04-01 - Daily scrum overview

Daily scrum 不是開會
是讓大家一起討論
- daily event to synchronize the development team's work
- team hug, not a status meeting
時間: 每天 15 分鐘
成員: 所有的development team member
但可以不包括PO和scrum master
要做的事:measure progress追蹤目標(sprint goal)的進度,並隨時adapt調整
地點: 每天同時間 聚集在同地點

Daily scrum common myths
不一定要由scrum master來主持
不一定要standup meeting 主要是要快
並不是an event for the PO to review progress
不一定要回答 3QF(three-question format):{
what did i do since the last daily scrum?
我昨天做了什麼
what do i plan to do today?
今天要做什麼
Are there obstacles?
有碰到困難嗎
}

04-02 - Daily scrum example

範例:
小明:我昨天完成了task 21和22
今天要fix bug 8和9
碰到困難包括 blah blah

失敗的daily scrum包含
1.開會時間太長=>越短越好
2.變成在解問題
=>另外找時間開會來解
3.有外來的管理者=>task要明確

impediments(障礙)應隨時回報

04-03 - Subscriptions in Jira


04-04 - Visual dashboard alerts in Jira


04-05 - Product roadmaps in Jira


04-06 - Information radiators in Jira


05-01 - Sprint review overview
完成sprint了
現在來執行Sprint review
這是scrum team和其他人合作的時間

Sprint review 內容包括
where do we stand?
what to do next?
這是一個informal event
並不是一個product demo

Sprint review 目的包括
inspect product increment
adapt product backlog

Sprint review 時間長度包括
每30天的sprint約花4小時來做


05-02 - Close a sprint in Jira


05-03 - Confluence introduction


05-04 - Create a page in Confluence


05-05 - Finish a page in Confluence


05-06 - Create meeting notes in Confluence


05-07 - Reports in Jira


06-01 - Sprint retrospective overview


Sprint retrospective
(Sprint 回顧)

目標:檢查和調整所有backlog和product increment以外的項目
回答這個問題:how can we become more efficient?
參加成員:全部scrum team(包括PO和scrum master)

內容是討論這三件事:
what went well
what could be done differently
what do we commit to change

時間:
每30天的sprint約花3小時來做

實際會有這些事發生:
改進process, tools, communication mechanism, etc.
對scrum master會是一個挑戰



06-02 - Sprint retrospective items in Jira



06-03 - Sprint retrospective page in Confluence


07-01 - Product backlog refinement

Product backlog refinement/Grooming
(to do list之修飾)
成員:PO和開發團隊
時間:每個sprint不能花團隊超過10%的精力來做這件事，例如一個sprint有80小時，不能花超過8小時做這件事

要做的事:
Add more details to product backlog items
Clarif requirements
Revisit priorities
Add/remove items to backlog
Backlog item decomposition
Estimation of backlog items

好處:
讓開發團隊更理解長期的目標
加速並改善sprint的進行


07-02 - Planning poker in Jira, part 1



07-03 - Planning poker in Jira, part 2



07-04 - Technical debt



08-01 - Scrum certifications
Certified ScrumMaster (CSM)
from scrumalliance.org

Professional Scrum Master (PSM)
scrum.org

08-02 - Certified ScrumMaster


08-03 - Professional Scrum Master


08-04 - Certification advice


09-01 - Next steps
scrum.org
scrumalliance.org forums
Scrum: Advanced

Source:Agile Software Development- Scrum for Developers