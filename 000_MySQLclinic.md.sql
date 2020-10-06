
<1> <SELECT>
SELECT 欄位名稱 
FROM 資料表名稱;

SELECT 資料表名稱.欄位名稱 
FROM 資料表名稱;

SELECT `欄位名稱cID`,`欄位名稱cNAME`
FROM `資料表名稱students`;

SELECT *
FROM `students`;

<2> <AS>
SELECT 欄位名稱 AS 欄位別名
FROM 資料表名稱;

SELECT `cID` AS `座號`, `cNAME` AS `姓名`
FROM `students`;

<3> <DISTINCT>
SELECT DISTINCT去除重複資料顯示一筆
例如`cGENDER`只有M和F

SELECT DISTINCT 欄位名稱 
FROM 資料表名稱;

SELECT DISTINCT `cGENDER` 
FROM `students`;

<4> <WHERE>
SELECT 欄位名稱 
FROM 資料表名稱
WHERE 條件敘述句;

SELECT * 
FROM `students`
WHERE `cGENDER` = 'M';

<5> <AND, OR, NOT>

SELECT * 
FROM `students`
WHERE `cID` >5 AND `cGENDER` = 'M';

SELECT * 
FROM `students`
WHERE NOT `cID` >5 AND `cGENDER` = 'M';
/*找出座號不大於5的男生*/

SELECT * 
FROM `students`
WHERE NOT (`cID` >5 AND `cGENDER` = 'M');
/*找出(座號大於5且是男生)以外的資料*/

<6> <BETWEEN>
SELECT 欄位名稱 
FROM 資料表名稱
WHERE 欄位名稱 BETWEEN 起始值 AND 結束值;

SELECT * 
FROM `students`
WHERE `cID` BETWEEN 4 AND 6;

SELECT * 
FROM `students`
WHERE `cBIRTHDAY` 
BETWEEN '1987-01-01' AND '1988-12-31';

<7> <IN>
SELECT 欄位名稱 
FROM 資料表名稱
WHERE 欄位名稱 IN (值1, 值2, ...);

SELECT * 
FROM `students`
WHERE `cID` IN (1, 3, 5, 7, 9);
/*找出座號 1, 3, 5, 7, 9 的資料*/

<8> <LIKE>
SELECT * 
FROM `students`
WHERE `cPHONE` LIKE '0918%';

SELECT * 
FROM `students`
WHERE `cNAME` LIKE '%宗%';

<9> <ORDER BY>
SELECT 欄位名稱 
FROM 資料表名稱
ORDER BY 指定排序的欄位 排序方式;

SELECT * 
FROM `students`
ORDER BY `cBIRTHDAY` DESC;

SELECT * 
FROM `students`
ORDER BY `cGENDER` ASC, `cBIRTHDAY` DESC;

<10> <LIMIT>
SELECT 欄位名稱 
FROM 資料表名稱
LIMIT 開始顯示的筆數, 顯示多少筆資料;

SELECT * 
FROM `students`
ORDER BY `cBIRTHDAY` DESC
LIMIT 0, 5;

SELECT * 
FROM `students`
LIMIT 5;

<11> <SUM, AVG, COUNT, MAX, MIN>
SELECT SUM(`score`) 
FROM `scorelist`
WHERE `course` = '國文';
/*計算全班國文分數總分*/

SELECT AVG(`score`) 
FROM `scorelist`
WHERE `course` = '國文';
/*計算全班國文平均分數*/

SELECT COUNT(*) 
FROM `students`
/*統計全班人數*/

SELECT MAX(`score`) 
FROM `scorelist`
WHERE `course` = '國文';
/*找出全班國文最高分*/

SELECT MIN(`score`) 
FROM `scorelist`
WHERE `course` = '國文';
/*找出全班國文最低分*/

<12> <GROUP BY>
SELECT `cID` ,  SUM(`score`)
FROM `scorelist`
GROUP BY `cID`;
/*顯示每個學生的總分*/

SELECT `cID` ,  SUM(`score`)
FROM `scorelist`
GROUP BY `cID`
HAVING `cID`<= 5;
/*座號1到5同學的分數總計*/

<13> <CONCAT, SUBSTRING>
SELECT CONCAT(`cNAME`,'('
,SUBSTRING(`cEmail`,1,INSTR(`cEmail`,'@'-1),')')
FROM `students`;

<14> <INSERT> 
INSERT INTO 資料表名稱 (欄位名稱1, 欄位名稱2, ...)
VALUES (值1, 值2, ...);

INSERT INTO `students` (`cNAME`, `cGENDER`, `cBIRTHDAY`)
VALUES ('王小明', 'M', '1985-05-15');

<15> <UPDATE>
UPDATE 資料表名稱
SET 欄位名稱1 = 值1, 欄位名稱2 = 值2, ...
WHERE 條件式;

UPDATE `students`
SET `cNAME` = '王小華', `cGENDER` = 'F'
WHERE `cID`=11;

<16> <DELETE>
DELETE FROM 資料表名稱
WHERE 條件式;

DELETE FROM `students`
WHERE `cID`>11;

<17> 結合資料表的查詢
SELECT 顯示欄位 
FROM 資料表A, 資料表B
WHERE 資料表A.相關欄位 = 資料表B.相關欄位;

SELECT `students`.`cID`, `students`.`cNAME`, `scorelist`.`score` 
FROM `students`, `scorelist`
WHERE `students`.`cID` = `scorelist`.`cID`
AND `scorelist`.`course` = '國文';
/*顯示座號 姓名 國文成績*/

SELECT `students`.`cID`, `students`.`cNAME`,
 SUM(`scorelist`.`score`), AVG(`scorelist`.`score`) 
FROM `students`, `scorelist`
WHERE `students`.`cID` = `scorelist`.`cID`
GROUP BY `students`.`cID`,`students`.`cNAME`;
/*顯示座號 姓名 總分 總平均*/


<18> <JOIN>
SELECT 顯示欄位 
FROM 資料表A [INNER] JOIN 資料表B
ON 資料表A.相關欄位 = 資料表B.相關欄位;

SELECT 顯示欄位 
FROM 資料表A [INNER] JOIN 資料表B
USING (相關欄位);

SELECT `students`.`cID`, `students`.`cNAME`, `scorelist`.`score`
FROM `students` JOIN `scorelist
ON `students`.`cID` = `scorelist`.`cID``
WHERE `scorelist`.`course` = '國文';
/*顯示座號 姓名 國文成績*/


<19> <LEFT JOIN, RIGHT JOIN>
SELECT 顯示欄位 
FROM 資料表A LEFT|RIGHT JOIN 資料表B
ON 資料表A.相關欄位 = 資料表B.相關欄位;

SELECT `students`.`cID`, `students`.`cNAME`,
 SUM(`scorelist`.`score`), AVG(`scorelist`.`score`) 
FROM `students` LEFT JOIN `scorelist`
ON `students`.`cID` = `scorelist`.`cID`
GROUP BY `students`.`cID`,`students`.`cNAME`;
/*若不用 LEFT JOIN 若一方沒有登錄資料 他就會整個不顯示
若這樣 LEFT JOIN 沒資料的地方顯示時會以NULL顯示*/
/*顯示座號 姓名 總分 總平均*/

04.
https://data.ca.gov
05.
Structured Query Language (SQL)
12.Load data in MySQL

PK=primary key, unique 此處先不選
NN=not null

Country:VARCHAR(45)
date_year:INT
race:TEXT
gender:VARCHAR(6)
age:INT

CREATE TABLE `ca_pop`.`pop_proj` (
  `county_code` INT NOT NULL,
  `county` VARCHAR(45) NULL,
  `date_year` VARCHAR(4) NULL,
  `race_code` INT NULL,
  `race` TEXT NULL,
  `gender` VARCHAR(6) NULL,
  `age` INT NULL,
  `population` INT NULL);


/* You will need to replace the file path below with the path to the data source you downloaded for this chapter.*/

LOAD DATA LOCAL INFILE 'c:\\Users\\bradwheeler\\Desktop\\CA_DRU_proj_2010-2060.csv' INTO TABLE pop_proj 
FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;

/* 資料用,分隔;以雙引號包含;以\n分隔;
The first row is header row 故 IGNORE 1 LINES*/

13.Insights on database creation in MySQL
=================CH3 JOIN==================
14.Join datasets
Extraction:getting data from a source
Transformation:converting data into another format
Loading:putting the transformed data into
the destination database

15.Overview of data joins in MySQL

JOIN:allows queries to link data 
from different sources

Challenge:
- create accidents_2015 table
- create vehicles_2015 table
- create vehicle_type table
- Join on common fields

16.Create accident data structure

CREATE TABLE accidents_2015 (
Accident_Index VARCHAR(13),
 Accident_Severity INT );

CREATE TABLE vehicles_2015 (
Accident_Index VARCHAR(13),
Vehicle_Type VARCHAR(10) );

CREATE TABLE vihicle_type (
vcode INT,
vtype VARCHAR(100) );

17.Load accident data

/* You will need to replace the file path below with the path to the data source you downloaded for this chapter.*/
/*載入data*/
LOAD DATA LOCAL INFILE 'c:\\Users\\bradwheeler\\Desktop\\Accidents_2015.csv' INTO TABLE accidents_2015 FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 LINES
/*忽略標題*/
(@col1, @dummy, @dummy, @dummy, @dummy, @dummy, @col2, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy) 
/*只抓兩個欄位 塞入col1和col2*/
SET accident_index=@col1, accident_severity=@col2;
/*欄位1名稱為accident_index 欄位2名稱為accident_severity*/

/* You will need to replace the file path below with the path to the data source you downloaded for this chapter.*/

LOAD DATA LOCAL INFILE 'c:\\Users\\bradwheeler\\Desktop\\Vehicles_2015.csv' INTO TABLE vehicles_2015 FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 LINES
(@col1, @dummy, @dummy, @col2, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy, @dummy) 
SET accident_index=@col1, vehicle_type=@col2;

LOAD DATA LOCAL INFILE 'c:\\Users\\bradwheeler\\Desktop\\vehicle_type.csv' INTO TABLE vehicle_type FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 LINES

18.Join two datasets in MySQL

SELECT 
	v.vtype AS 'Vehicle Type'
    AVG(a.Accident_Severity) AS 'Average Severity',
    COUNT(a.accident_severity) AS 'Number of Accidents',
/*顯示欄位 平均和計數*/
FROM
    accidents_2015 AS a
        JOIN
    vehicles_2015 AS m ON a.Accident_Index = m.Accident_Index
        JOIN
    vehicle_type AS v ON m.Vehicle_Type = v.vcode
/*JOIN三個資料表*/
WHERE
    v.vehicle_type LIKE '%otorcycle%'
/*模糊找出機車資料*/
GROUP BY v.vehicle_type
/*以運輸工具類型來分群*/

19.Index in MySQL
同上

20.Find the median using Python, part 1
21.Find the median using Python, part 2
<PYTHON 要記得安裝 pymysql>
~> python pip install pymysql

import pymysql

myConnection = pymysql.connect(host='localhost', user='root', passwd='password', db='accidents')
cur = myConnection.cursor()
/*cur物件用來執行mysql*/
cur.execute('SELECT vtype FROM vehicle_type WHERE vtype LIKE "%otorcycle%";')
cycleList = cur.fetchall()

selectSQL = ('''
	SELECT t.vtype, a.accident_severity
	FROM accidents_2015 AS a
	JOIN vehicles_2015 AS v ON a.accident_index = v.Accident_Index
	JOIN vehicle_type AS t ON v.Vehicle_Type = t.vcode
	WHERE t.vtype LIKE %s
	ORDER BY a.accident_severity;''')
	/*selectSQL=多行字串*/
insertSQL = ('''
	INSERT INTO accident_medians VALUES (%s, %s);''')
	/*insertSQL=多行字串*/
	/*製造一個表格來存median data*/	
/*TRUNCATE 除掉所有的值但data structure還在*/

for cycle in cycleList:
	cur.execute(selectSQL,cycle[0])
	/*cycle[0]=NAME OF THE CYCLE*/
	accidents = cur.fetchall()
	quotient, remainder = divmod(len(accidents),2)
	/*divmod:function
	2:divide by 2
	quotient, remainder:variables
	*/
	if  remainder:
		med_sev = accidents[quotient][1]
		/*中位數*/
	else:
		med_sev = (accidents[quotient][1] + accidents[quotient+2][1])/2
		/*中位數 若為偶數個則為中間兩個之平均*/
	print('Finding median for',cycle[0])
	cur.execute(insertSQL,(cycle[0],med_sev))

myConnection.commit()
/*commit changes*/
myConnection.close()

<PYTHON 執行>
~> python calculate_median.py

	
22.Insights on joining datasets in MySQL	
同上	
=================CH4 SEARCH==================
23.Searching a database
Challenges:
- Create a list of male and female populations
by country for 2014
- Return that information in 
a specifically-formatted table

24.Overview of search in MySQL
本範例要做的事
- Create an almost-correct query
- Modify it to display half the data
- Second query for the other half
- Join to create a correct query


25.Searching a database in MySQL

SELECT County, Gender, sum(Population)
/*欄位名稱*/
FROM pop_proj
/*資料表名稱pop_proj*/
WHERE date_year = 2014
GROUP BY County, Gender
ORDER BY County;/*default:ASC*/


/*將上述塞至以下SUB QUERY*/

SELECT pop_proj.county, sum(pop_proj.Population) AS Male, femPop.Female
FROM(
	SELECT county, sum(population) AS Female
	FROM pop_proj
	WHERE date_year = 2014 AND gender = 'Female'
    GROUP BY county
) AS femPop
/*SUB QUERY*/
JOIN pop_proj ON femPop.county = pop_proj.county
WHERE (pop_proj.date_year = 2014) AND (pop_proj.gender = 'Male')
GROUP BY pop_proj.County
ORDER BY pop_proj.County;


26.Insights on searching data in MySQL
同上


=================CH5 CRUD==================
27.CRUD operations
<CREATE, READ, UPDATE, DELETE>

<CREATE: INSERT>
INSERT INTO 資料表名稱 (欄位名稱1, 欄位名稱2)
VALUES (值1, 值2);

<READ: SELECT>
SELECT 欄位名稱1, 欄位名稱2
FROM 資料表名稱;

<UPDATE: UPDATE>
UPDATE 資料表名稱
SET 欄位名稱1 = 值1, 欄位名稱2 = 值2
WHERE 某些欄位 = 某些值;

<DELETE: DELETE>
DELETE FROM 資料表名稱
WHERE 某些欄位 = 某些值;

<TRUNCATE>
移除值，資料結構保留

本章challenge:
Create a record for each line in the play
- the character who is speaking
- the line number
- the phrase itself, trimmed of spaces

Transform each record
- update the phrases so character names are uppercase
- delete lines starting with enter, 
exit (and exeunt), act, and scene
- store performance data for each operation


28.Overview of CRUD operations in MySQL
A_Midsummer_Nights_Dream.txt

29.Create database structure for CRUD

CREATE TABLE amnd (line_number INT NOT NULL AUTO_INCREMENT, 
char_name VARCHAR(45) NOT NULL, 
play_text TEXT NOT NULL, 
PRIMARY KEY (line_number));
/*line_number是獨一無二的，可用成PRIMARY KEY*/
/*資料表1 amnd*/


CREATE TABLE performance (
query_type TEXT NOT NULL, 
query_time FLOAT NOT NULL);
/*資料表2 performance*/

30.Insert data in MySQL

#!/usr/bin/python

import pymysql
import time

myConnection = pymysql.connect(host='localhost', user='root', passwd='password', db='shakespeare')
cur = myConnection.cursor()
/*cur=cursor object*/

with open('characters.txt') as char:
	charList = char.read().splitlines()
	/*collect only char name, no white spaces*/
	
curChar = 'Unknown'
/*initialize with string unknown*/

start_time = time.time()
/*time method of the time module:time()*/

createSQL = 'INSERT INTO amnd (char_name, play_text) VALUES (%s, %s);'

/*loop through the text of the play*/
with open('A_Midsummer_Nights_Dream.txt','r') as playlines:
	for line in playlines:
		if line.upper().strip() in charList:
		/*.upper() 轉大寫 strip() removes 空格*/
			curChar = line.strip()
			print('Changing character to',line.strip())
		else:
		/*若不是character*/
			print('Writing line \"' + line.strip() + '\"')
			/*strip() removes 空格*/
			cur.execute(createSQL,sql_values)
			
myConnection.commit()

end_time = time.time()

cur.execute('SELECT COUNT(line_number) FROM amnd;')
numPlayLines = cur.fetchall()[0][0]
print(numPlayLines,'rows')

queryExecTime = end_time - start_time
print('Total query time:',queryExecTime)
queryTimePerLine = queryExecTime / numPlayLines
print('Query time per line:',queryTimePerLine)

insertPerfSQL = 'INSERT INTO performance (query_type, query_time) VALUES ("CREATE", %s);'
cur.execute(insertPerfSQL, queryTimePerLine)

myConnection.commit()
myConnection.close()


31.Update data in MySQL

#!/usr/bin/python

import pymysql
import time

myConnection = pymysql.connect(host='localhost', user='root', passwd='password', db='shakespeare')
cur = myConnection.cursor()

start_time = time.time()	

updateSQL = 'UPDATE amnd SET play_text = REPLACE(play_text, %s, %s);'
/*轉大寫*/	
	
with open('characters.txt','r') as char:
	for character in char.read().splitlines():
		print('Capitalizing occurances of ' + character + '...')
		updateStrings = character.capitalize(), character.upper()
		cur.execute(updateSQL, updateStrings)

myConnection.commit()

end_time = time.time()
cur.execute('SELECT COUNT(line_number) FROM amnd;')
numPlayLines = cur.fetchall()[0][0]
print(numPlayLines,'rows')

queryExecTime = end_time - start_time
print('Total query time:',queryExecTime)
queryTimePerLine = queryExecTime / numPlayLines
print('Query time per line:',queryTimePerLine)

insertPerfSQL = 'INSERT INTO performance (query_type, query_time) VALUES ("UPDATE", %s);'
cur.execute(insertPerfSQL, queryTimePerLine)

myConnection.commit()

32.Delete data in MySQL
------------------------/*重要*/
DELETE FROM amnd_temp
WHERE INSTR(play_text, 'theseus');
/*刪除包含theseus字串之欄位*/
------------------------/*重要*/
SELECT * FROM amnd_temp
WHERE INSTR(play_text, 'theseus');
/*選取包含theseus字串之欄位*/
------------------------/*重要*/
#!/usr/bin/python

import pymysql
import time

myConnection = pymysql.connect(host='localhost', user='root', passwd='password', db='shakespeare')
cur = myConnection.cursor()

start_time = time.time()	

cur.execute('SELECT COUNT(line_number) FROM amnd;')
numPlayLinesBeforeDelete = cur.fetchall()[0][0]

print('Deleting lines...')
cur.execute('DELETE FROM amnd WHERE play_text RLIKE "^enter|^exit|^act|^scene|^exeunt";')
/*RLIKE:Regular expressions:^begin with enter*/
myConnection.commit()
/*commit changes*/

end_time = time.time()
cur.execute('SELECT COUNT(line_number) FROM amnd;')
numPlayLinesAfterDelete = cur.fetchall()[0][0]

numPlayLinesDeleted = numPlayLinesBeforeDelete - numPlayLinesAfterDelete
print(numPlayLinesDeleted,'rows')

queryExecTime = end_time - start_time
print('Total query time:',queryExecTime)
queryTimePerLine = queryExecTime / numPlayLinesDeleted
print('Query time per line:',queryTimePerLine)

insertPerfSQL = 'INSERT INTO performance (query_type, query_time) VALUES ("DELETE", %s);'
cur.execute(insertPerfSQL, queryTimePerLine)

myConnection.commit()

33.Reading data in MySQL

#!/usr/bin/python

import pymysql
import time

myConnection = pymysql.connect(host='localhost', user='root', passwd='password', db='shakespeare')
cur = myConnection.cursor()

start_time = time.time()	

cur.execute('SELECT play_text FROM amnd;')
for line in cur.fetchall():
    print(line[0])

end_time = time.time()

cur.execute('SELECT count(line_number) FROM amnd;')
numPlayLines = cur.fetchall()[0][0]
print(numPlayLines,'rows')

queryExecTime = end_time - start_time
print('Total query time:',queryExecTime)
queryTimePerLine = queryExecTime / numPlayLines
print('Query time per line:',queryTimePerLine)

insertPerfSQL = 'INSERT INTO performance (query_type, query_time) VALUES ("READ", %s);'
cur.execute(insertPerfSQL, queryTimePerLine)

myConnection.commit()

34.Insights on CRUD operations in MySQL
- REPLACE() for updating values
- INSTR() for finding text
- Finding relative performance costs

<CRUD> operations are irreversible
使用需小心

=================CH6 AVG, CALCULATIONS==================
35.Calculations
Challenge:
- link the 2 provided datasets together
- create a forecast of the demand
for each level of education

36.Overview of calculations in MySQL
Solution:
- calculate demand by age group
- create a table with results
- apply to full 2010-2060 data

37.Import education data 重要

CREATE TABLE caea (
	date_year VARCHAR(50) NOT NULL,
    age VARCHAR(50) NOT NULL,
    gender VARCHAR(7) NOT NULL,
    ed_attainment TEXT NOT NULL,
    income TEXT NOT NULL,
    population INT NOT NULL);

/* You will need to replace the file path below with the path to the data source you downloaded for this chapter.*/

LOAD DATA LOCAL INFILE 'c:\\Users\\bradwheeler\\Desktop\\CA_Educational_Attainment___Personal_Income_2008-2014_replaced.csv' INTO TABLE caea
FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;
/*忽略標題 IGNORE 1 LINES*/

38.Finding demographics

CREATE TABLE demographics AS
SELECT caea.age AS Age,
	ed_attainment AS Education,
    SUM(population) / total_pop_by_age.total_pop
	/*divide by*/
	AS coefficient
FROM caea
JOIN (SELECT age, SUM(population) AS total_pop FROM caea GROUP BY age) AS total_pop_by_age
	ON caea.age = total_pop_by_age.age
GROUP BY Age, Education;


39.Calculations in MySQL

SELECT
    temp_pop.date_year AS 'Year',
    demographics.ed AS Education,
	CAST(SUM(temp_pop.total_pop * coefficient) AS UNSIGNED) as Demand
	/*multiply*/
FROM
    (SELECT date_year, age, sum(population) as total_pop FROM pop_proj GROUP BY date_year, age) as temp_pop
        JOIN
    demographics ON demographics.age = CASE
	/*CASE=>if then statement*/
			WHEN temp_pop.age < 18 THEN '00 to 17'
			WHEN temp_pop.age > 65 THEN '65 to 80+'
			ELSE '18 to 64'
		END
GROUP BY date_year, Education;

40.Insights on calculations in MySQL
同上

41.Next steps
MYSQL essc
PHP with MySQL essc

Source: DatabaseClinicMySQL