
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























Source: DatabaseClinicMySQL