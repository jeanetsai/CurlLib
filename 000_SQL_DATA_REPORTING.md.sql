SQLiteDatabaseBrowserPortable

01
done
02_SQL
done
03_relational
Relational Databases=>SQL
Non-relational Databases=>NoSQL
04_versions
Oracle=>select * from v$version;
//if this works you are using Oracle
//SQL developer
Microsoft=>select @@version;
//if this works you are using Microsoft
//SQL server
PostGreSQL=>select version();
//結果是~9代表使用 PostGreSQL
MySQL=>select version();
//結果是~5代表使用 MySQL
05_database
front end
back end
06_setup
installation
1. Use SQL to Report Data
01_01_select
Showing rows 0-24
//zero indexing
SELECT * FROM `table`
//如果有特殊字元則``符號包住便不會卡住
01_02_filter
SELECT * 
FROM table
WHERE column='happy'

SELECT * 
FROM table
WHERE column<>'happy'
//<>意思是NOT
//!=可以用在oracle, microsoft, postgreSQL

SELECT * 
FROM table
WHERE id>3
AND id<5

SELECT * 
FROM table
WHERE id BETWEEN 3 AND 5

SELECT * 
FROM table
WHERE name = 'apple'
OR name = 'orange'

01_03_wildcards
<IN>
SELECT * 
FROM table
WHERE name IN ('apple','orange','banana')

<NOT IN>
SELECT * 
FROM table
WHERE name NOT IN ('apple','orange','banana')

<LIKE>
SELECT * 
FROM table
WHERE name LIKE 'app%'

SELECT * 
FROM table
WHERE name LIKE 'a_p'
/*找出中間有任意某個字元者*/

SELECT * 
FROM table
WHERE name LIKE 'a%p'
/*找出中間有任意多個字元者*/

SELECT * 
FROM table
WHERE id > 5
AND (address LIKE '%El%' 
OR address LIKE '%Al%')
/*大小寫一樣*/

01_04_orderby
SELECT * 
FROM table
WHERE id > 5
ORDER BY name ASC
/*ASC or DESC*/

01_05_stringFns
<LENGTH>
SELECT name, length(name)
FROM table

<CONCAT>/*串接字串*/
SELECT CONCAT(first_name,' ', last_name),
LENGTH(CONCAT(first_name,' ', last_name))
FROM table
ORDER BY LENGTH(CONCAT(first_name,' ', last_name))
DESC 

<LOWER>/*大寫轉小寫*/
SELECT LOWER(name)
FROM table

<LEFT>/<RIGHT>
/*傳回由左數到右第n個值*/
SELECT lEFT(name,1)
FROM table
WHERE first_name='apple'
/*傳回最左1個值*/

01_06_stringAdv

<SUBSTRING>傳回部分字串
SELECT SUBSTRING(first_name,1,1)
from actor
/*傳回在位置1處長度1的字串*/

SELECT SUBSTRING(first_name,2)
from actor
/*傳回包含位置2右邊的字串*/

SELECT SUBSTRING(first_name,-4)
from actor
/*傳回包含位置-4右邊的字串*/
/*位置-4:右邊數來第4格*/

SELECT CONCAT(SUBSTRING(first_name,1,1)),
LOWER(SUBSTRING(first_name,2))
from actor
/*將第一個字留存為大寫 其餘轉為小寫*/

<TRIM>移除空白
<TRIM+LEADING>移除某字串
SELECT description, TRIM(LEADING 'A ' FROM description)
from actor
/*"A pig" 變成 "pig" 而已*/

<LOCATE>尋找字串位置
SELECT LOCATE('lope',first_name)
FROM actor
/*oracle:LOCATE 回傳字串位置*/
<POSITION>/*post-SQL 回傳字串位置*/
<CHAR-INDEX>/*microsoft 回傳字串位置*/

01_07_alias 別名
<AS>別名
在WHERE裡面可能會看不懂別名
但在ORDER BY可以使用別名

01_08_datatype
DATATYPE 有 number, text, date 等
資料型別若為TEXT
則不能使用numeric funciton

<DESCRIBE>觀察data type和data structure

01_09_dateFns

SELECT * FROM actor
WHERE last_update > '2006-02-15'
/*MySQL:year('2006-02-15')*/

SELECT * FROM actor
WHERE last_update = '2006-02-15 04:34:33 +02:00'

<YEAR>年份
SELECT * FROM actor
WHERE YEAR(last_update) = 2006

<DATE>日期
SELECT * FROM actor
WHERE DATE(last_update) = '2006-02-15'

<DATE_FORMAT>轉換日期格式
SELECT DATE_FORMAT(last_update,'%m-%d-%Y')
FROM actor
/*美國格式*/

SELECT DATE_FORMAT(last_update,'%D %M %Y')
FROM actor

2. Group your SQL Results
<group by,having,distinct,grpConcat>
02_01_groupby
<COUNT>
<找出一共有幾列>
SELECT COUNT(*)
FROM actor
<找出某欄一共有幾個非NULL值>
SELECT COUNT(name)
FROM actor

/*grouping function和non grouping function最好不要放在同一列query 會只出現一欄
例如 SELECT *,COUNT(*) 就是錯的寫法
除非你加 GROUP BY*/

SELECT district, count(*) AS ct
FROM address
GROUP BY district
ORDER BY ct DESC

<GROUP BY的欄位要被SELECT避免出錯>

02_02_having
SELECT district, count(district) as ct
FROM address 
GROUP BY district
HAVING count(district)>8 --HAVING ct>8
ORDER BY ct DESC

<MIN/MAX/SUM/AVG>
SELECT sum(rental_duration)
From table

SELECT rating, avg(rental_duration)
From table
GROUP BY rating

02_03_distinct
SELECT DISTINCT(district)
FROM address

SELECT DISTINCT CONCAT(first_name, last_name)
FROM actor

SELECT DISTINCT YEAR(last_update)
FROM actor

<COUNT+DISTINCT>

SELECT COUNT(DISTINCT YEAR(last_update))
FROM actor

02_04_grpConcat
SELECT distinct district, group_concat(phone)
FROM address
GROUP BY district

SELECT distinct district, group_concat(phone)
FROM address
GROUP BY district

SELECT distinct district, group_concat(phone ORDER BY phone ASC SEPARATOR ';')
FROM address
GROUP BY district

--我們如果要在 GROUP BY 中把字串「黏起來」，不是使用 CONCAT()，而是使用另一個函式：GROUP_CONCAT()。--

03_01_limit
SELECT * 
FROM table
LIMIT 25

--優點:節省時間

03_02_keys

primary key
unique, auto_increment

foreign key

03_03_visualisation

A 的 foreign key 
可以= 
B 的 primary key
DB設計
常用的為主表格 
不常用的為其他表格

03_04_join

SELECT customer.first_name
FROM customer
JOIN address
ON customer.id = address.id
WHERE district = 'abc'
--JOIN ON 要在一起

03_05_moreJoins
JOIN 就是 INNER JOIN

<我要左邊全部+交集>
SELECT *
FROM tableA
LEFT JOIN tableB
on tableA.id = tableB.id
回傳的tableB可能包含NULL

<我要左邊扣掉重複的>
SELECT *
FROM tableA
LEFT JOIN tableB
on tableA.id = tableB.id
WHERE tableB.id IS NULL

03_06_union
JOIN水平整合兩個TABLE
UNION垂直整合兩個TABLE

SELECT date(last_update) FROM actor
UNION
SELECT date(last_update) FROM address


SELECT date(last_update) FROM actor
UNION ALL
SELECT date(last_update) FROM address


UNION ALL 和 UNION 不同 之處在於 UNION ALL 會將每一筆符合條件的資料都列出來，無論資料值 有無重複。
UNION傳回的是DISTINCT的值

03_07_usingIn
<IN>
SELECT
WHERE + IN

SELECT * FROM actor
WHERE name IN ('aa','bb','cc')

SELECT * FROM rental
WHERE id IN (
SELECT id FROM customer 
WHERE first_name='Jennifer'
)


03_08_subquery

SELECT FROM
(SELECT FROM) AS

SELECT f.first_name FROM
(SELECT first_name FROM actor) AS f

SELECT f.fn FROM
(SELECT first_name as fn FROM actor) AS f

--別名可以放在前面--

04_01_views
views: a stored query

SHOW CREATE VIEW table_actor


04_02_function

--可取代 subquery / nested select


04_03_proc
stored procedure改數值
function不改數值只傳回value
可以在stored procedure裡面
放function反之則不可

CALL film_not_in_stock(2,2,@count);
--FUNCTION(參數)
SELECT * FROM blah WHERE field = @count 

04_04
done

Source: (L) SQL for Data Reporting and Analysis