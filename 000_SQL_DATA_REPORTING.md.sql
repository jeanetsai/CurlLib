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




02_03_distinct




02_04_grpConcat




03_01_limit




03_02_keys





03_03_visualisation





03_04_join




03_05_moreJoins




03_06_union




03_07_usingIn




03_08_subquery




04_01_views




04_02_function




04_03_proc





04_04


Source: (L) SQL for Data Reporting and Analysis