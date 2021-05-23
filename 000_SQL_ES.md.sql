DB browser for SQLite
sqlitebrowser.org
SQLiteDatabaseBrowserPortable

<交集INTERSECT/差集EXCEPT>
SELECT column_name(s) FROM table_name1
INTERSECT
SELECT column_name(s) FROM table_name2;

<INNER JOIN>
Select * From vocab
INNER JOIN SOL1 
ON vocab.field1 = SOL1.field1;

<JOIN 3 tables>
SELECT * FROM YS
  JOIN TBBT ON YS.field1 = TBBT.field1
  JOIN F ON YS.field1 = F.field1
  
<CRUD>
DROP TABLE left;

INSERT INTO 表格(欄名稱1, 欄名稱2, 欄名稱3)
VALUES ('值1','值2','值3');

UPDATE 表格
SET
欄名稱1 = '值1'
欄名稱2 = '值2'
WHERE id = 5;

DELETE FROM 表格
WHERE id = 4;

<OFFSET>

SELECT * FROM YS
JOIN TBBT ON YS.field1=TBBT.field1
WHERE TBBT.field1 >= 1 
ORDER BY TBBT.field1 LIMIT 2 OFFSET 2;

<TRANSACTION>
加快執行速度 (包成一個unit)


========================
3.2. SQL Overview
08.About the overview
<注意分號;>
SELECT * FROM 表格
WHERE 欄名稱 = '某名稱';

<CRUD>
Create;Read;Update;Delete;
SELECT * FROM 表格;

<Create:INSERT>
INSERT INTO 表格(欄名稱1, 欄名稱2, 欄名稱3)
VALUES ('值1','值2','值3');

<Update:UPDATE>
UPDATE 表格
SET
欄名稱1 = '值1'
欄名稱2 = '值2'
WHERE id = 5;

<Delete:DELETE>
DELETE FROM 表格
WHERE id = 4;
/*刪除id=4的一列資料*/

<HAVING>
SELECT Store_Name, SUM(Sales)
FROM Store_Information
GROUP BY Store_Name
HAVING SUM(Sales) > 1500;

<DISTINCT>
SELECT COUNT(DISTINCT HeadOfState) FROM Country;


09.Database organization
/*Primary key: usually id*/
假設有三個表格sales item customer
sales表格的id=sales的primary key

sales表格的item_id
對應到item表格的id=item的primary key

sales表格的customer_id
對應到customer表格的id=customer的primary key

這是範例中建立表格關聯的辦法

10.The SELECT statement

SELECT 'Hello, World';
/*出來結果 欄'Hello, World' Hello, World*/

SELECT 'Hello, World' AS Result;
/*出來結果 欄 Result Hello, World*/

SELECT * FROM Country;
/*選擇表格Country*/

SELECT * FROM Country ORDER BY Name;
/*選擇表格Country 並以 Name 欄名稱排序*/

SELECT Name, LifeExpectancy FROM Country ORDER BY Name;
/*選擇表格Country 的兩欄Name, LifeExpectancy
並以 Name 欄名稱排序*/

SELECT Name, LifeExpectancy AS "Life Expectancy" FROM Country ORDER BY Name;
/*同上 只是LifeExpectancy有了別名 Life Expectancy 此處AS標準是雙引號 字串是單引號*/

11.Selecting rows

SELECT Name, Continent, Region FROM Country WHERE Continent = 'Europe' ORDER BY Name LIMIT 5;
SELECT Name, Continent, Region FROM Country WHERE Continent = 'Europe' ORDER BY Name LIMIT 5 OFFSET 5;

/*OFFSET:下一個五筆資料*/

12.Selecting columns
SELECT * from Country;
SELECT Name, Continent, Region from Country;
SELECT Name AS Country, Continent, Region from Country;

13.Counting rows
COUNT:計算列數!不是計算欄

SELECT COUNT(*) FROM Country;
SELECT COUNT(*) FROM Country WHERE Population > 1000000;
/*計算人數大於某數的列數*/
SELECT COUNT(*) FROM Country WHERE Population > 100000000 AND Continent = 'Europe' ;

SELECT COUNT(*) FROM Country;
SELECT COUNT(LifeExpectancy) FROM Country;
/*計算LifeExpectancy欄裡非NULL 有值的的列數*/

14.Inserting data


INSERT INTO customer (name, address, city, state, zip) VALUES ('Fred Flintstone', '123 Cobblestone Way', 'Bedrock', 'CA', '91234');
SELECT * FROM customer;
/*加入一列資料*/
INSERT INTO customer (name, city, state) VALUES ('Jimi Hendrix', 'Renton', 'WA');
/*沒有提到的欄會塞入NULL*/

15.Updating data

SELECT * FROM customer;
UPDATE customer SET address = '123 Music Avenue', zip = '98056' WHERE id = 5;
UPDATE customer SET address = '2603 S Washington St', zip = '98056' WHERE id = 5;
UPDATE customer SET address = NULL, zip = NULL WHERE id = 5;
/*NULL不要加引號*/

16.Deleting data

SELECT * FROM customer WHERE id = 4;
DELETE FROM customer WHERE id = 4;
SELECT * FROM customer;
DELETE FROM customer WHERE id = 5;
SELECT * FROM customer;

17.Creating a table




18.Deleting a table




19.Inserting rows





20.Deleting rows





21.The NULL value




22.Constraining columns




23.Changing a schema




24.ID columns




25.Filtering data




26.Removing duplicates




27.Ordering output





28.Conditional expressions




29.Understanding JOIN
___:FULL OUTER JOIN(多數不支援此寫法)
 _ :INNER JOIN
__ :LEFT OUTER JOIN
 __:RIGHT OUTER JOIN

30.Accessing related tables

/*創建兩個table, left 和 right*/
/*table left有兩欄id, description 資料型別為整數和TEXT*/
/*table right有兩欄id, description 資料型別為整數和TEXT*/
CREATE TABLE left ( id INTEGER, description TEXT );
CREATE TABLE right ( id INTEGER, description TEXT );

/*塞入資料*/
INSERT INTO left VALUES ( 1, 'left 01' );
INSERT INTO left VALUES ( 2, 'left 02' );
INSERT INTO left VALUES ( 3, 'left 03' );
INSERT INTO left VALUES ( 4, 'left 04' );
INSERT INTO left VALUES ( 5, 'left 05' );
INSERT INTO left VALUES ( 6, 'left 06' );
INSERT INTO left VALUES ( 7, 'left 07' );
INSERT INTO left VALUES ( 8, 'left 08' );
INSERT INTO left VALUES ( 9, 'left 09' );

INSERT INTO right VALUES ( 6, 'right 06' );
INSERT INTO right VALUES ( 7, 'right 07' );
INSERT INTO right VALUES ( 8, 'right 08' );
INSERT INTO right VALUES ( 9, 'right 09' );
INSERT INTO right VALUES ( 10, 'right 10' );
INSERT INTO right VALUES ( 11, 'right 11' );
INSERT INTO right VALUES ( 11, 'right 12' );
INSERT INTO right VALUES ( 11, 'right 13' );
INSERT INTO right VALUES ( 11, 'right 14' );

SELECT * FROM left;
SELECT * FROM right;

SELECT l.description AS left, r.description AS right
  FROM left AS l
  JOIN right AS r ON l.id = r.id
  ;
  /*JOIN 表right ON l.id=r.id*/
-- restore database
DROP TABLE left;
DROP TABLE right;

-- sale example
SELECT * FROM sale;
SELECT * FROM item;

SELECT s.id AS sale, i.name, s.price 
  FROM sale AS s
  JOIN item AS i ON s.item_id = i.id
  ;

SELECT s.id AS sale, s.date, i.name, i.description, s.price 
  FROM sale AS s
  JOIN item AS i ON s.item_id = i.id
  ;

31.Relating multiple tables
/*三個表customer item sale*/
SELECT * FROM customer;
SELECT * FROM item;
SELECT * FROM sale;/*有customer_id和item_id*/

SELECT i.name AS Item, c.name AS Cust, s.price AS Price
  FROM sale AS s
  JOIN item AS i ON s.item_id = i.id
  JOIN customer AS c ON s.customer_id = c.id
  /*用兩個JOIN連接三個資料表*/
  ORDER BY Cust, Item
;

-- a customer without sales
INSERT INTO customer ( name ) VALUES ( 'Jane Smith' );
SELECT * FROM customer;

-- left joins
SELECT c.name AS Cust, c.zip, i.name AS Item, i.description, s.quantity AS Quan, s.price AS Price
  FROM customer AS c
  LEFT JOIN sale AS s ON s.customer_id = c.id
  LEFT JOIN item AS i ON s.item_id = i.id
  ORDER BY Cust, Item
;

-- restore database
DELETE FROM customer WHERE id = 4;

====================
43.What are aggregates

SELECT Region, COUNT(*)
  FROM Country
  GROUP BY Region
;

SELECT Region, COUNT(*) AS Count
  FROM Country
  GROUP BY Region
  ORDER BY Count DESC, Region
;

SELECT a.title AS Album, COUNT(t.track_number) as Tracks
  FROM track AS t
  JOIN album AS a
    ON a.id = t.album_id
  GROUP BY a.id
  HAVING Tracks >= 10
  ORDER BY Tracks DESC, Album
;

44.Using aggregate functions

SELECT COUNT(*) FROM Country;
SELECT COUNT(Population) FROM Country;
/*計算欄population的非null數值*/
SELECT AVG(Population) FROM Country;

SELECT Region, AVG(Population) FROM Country GROUP BY Region;

SELECT Region, MIN(Population), MAX(Population) FROM Country GROUP BY Region;

SELECT Region, SUM(Population) FROM Country GROUP BY Region;

45.Aggregating DISTINCT values

SELECT COUNT(HeadOfState) FROM Country;

SELECT HeadOfState FROM Country ORDER BY HeadOfState;

SELECT COUNT(DISTINCT HeadOfState) FROM Country;

46.What are transactions

將某一區塊作為一個unit
數個步驟全部執行成功，交易才算成功並提交變 更，只要有當中有一個失敗，則整個交易宣告失敗並回復所有變更
優點:執行比較快

47.Data integrity
CREATE TABLE widgetInventory (
  id INTEGER PRIMARY KEY,
  description TEXT,
  onhand INTEGER NOT NULL
);

CREATE TABLE widgetSales (
  id INTEGER PRIMARY KEY,
  inv_id INTEGER,
  quan INTEGER,
  price INTEGER
);

INSERT INTO widgetInventory ( description, onhand ) VALUES ( 'rock', 25 );
INSERT INTO widgetInventory ( description, onhand ) VALUES ( 'paper', 25 );
INSERT INTO widgetInventory ( description, onhand ) VALUES ( 'scissors', 25 );

SELECT * FROM widgetInventory;

/*BEGIN/COMMIT TRANSACTION*/
BEGIN TRANSACTION;
INSERT INTO widgetSales ( inv_id, quan, price ) VALUES ( 1, 5, 500 );
UPDATE widgetInventory SET onhand = ( onhand - 5 ) WHERE id = 1;
END TRANSACTION;
/*結束TRANSACTION*/

SELECT * FROM widgetInventory;
SELECT * FROM widgetSales;


BEGIN TRANSACTION;
INSERT INTO widgetInventory ( description, onhand ) VALUES ( 'toy', 25 );
ROLLBACK;
SELECT * FROM widgetInventory;

-- restore database
DROP TABLE widgetInventory;
DROP TABLE widgetSales;

48.Performance
CREATE TABLE test ( id INTEGER PRIMARY KEY, data TEXT );

-- copy / paste 1,000 of these ...
INSERT INTO test ( data ) VALUES ( 'this is a good sized line of text.' );

-- put this before the 1,000 INSERT statements
BEGIN TRANSACTION;

-- put this after the 1,000 INSERT statements
END TRANSACTION;

SELECT COUNT(*) FROM test;

-- restore database
DROP TABLE test;

49.Automating data with triggers

CREATE TABLE widgetCustomer ( id INTEGER PRIMARY KEY, name TEXT, last_order_id INT );
CREATE TABLE widgetSale ( id INTEGER PRIMARY KEY, item_id INT, customer_id INT, quan INT, price INT );

INSERT INTO widgetCustomer (name) VALUES ('Bob');
INSERT INTO widgetCustomer (name) VALUES ('Sally');
INSERT INTO widgetCustomer (name) VALUES ('Fred');

SELECT * FROM widgetCustomer;

CREATE TRIGGER newWidgetSale AFTER INSERT ON widgetSale
    BEGIN
        UPDATE widgetCustomer SET last_order_id = NEW.id WHERE widgetCustomer.id = NEW.customer_id;
    END
;

INSERT INTO widgetSale (item_id, customer_id, quan, price) VALUES (1, 3, 5, 1995);
INSERT INTO widgetSale (item_id, customer_id, quan, price) VALUES (2, 2, 3, 1495);
INSERT INTO widgetSale (item_id, customer_id, quan, price) VALUES (3, 1, 1, 2995);
SELECT * FROM widgetSale;
SELECT * FROM widgetCustomer;

50.Preventing updates
DROP TABLE IF EXISTS widgetSale;

CREATE TABLE widgetSale ( id integer primary key, item_id INT, customer_id INTEGER, quan INT, price INT,
    reconciled INT );
INSERT INTO widgetSale (item_id, customer_id, quan, price, reconciled) VALUES (1, 3, 5, 1995, 0);
INSERT INTO widgetSale (item_id, customer_id, quan, price, reconciled) VALUES (2, 2, 3, 1495, 1);
INSERT INTO widgetSale (item_id, customer_id, quan, price, reconciled) VALUES (3, 1, 1, 2995, 0);
SELECT * FROM widgetSale;

CREATE TRIGGER updateWidgetSale BEFORE UPDATE ON widgetSale
    BEGIN
        SELECT RAISE(ROLLBACK, 'cannot update table "widgetSale"') FROM widgetSale
            WHERE id = NEW.id AND reconciled = 1;
    END
;

BEGIN TRANSACTION;
UPDATE widgetSale SET quan = 9 WHERE id = 2;
END TRANSACTION;

SELECT * FROM widgetSale;

51.Example - Timestamps
DROP TABLE IF EXISTS widgetSale;
DROP TABLE IF EXISTS widgetCustomer;

CREATE TABLE widgetCustomer ( id integer primary key, name TEXT, last_order_id INT, stamp TEXT );
CREATE TABLE widgetSale ( id integer primary key, item_id INT, customer_id INTEGER, quan INT, price INT, stamp TEXT );
CREATE TABLE widgetLog ( id integer primary key, stamp TEXT, event TEXT, username TEXT, tablename TEXT, table_id INT);

INSERT INTO widgetCustomer (name) VALUES ('Bob');
INSERT INTO widgetCustomer (name) VALUES ('Sally');
INSERT INTO widgetCustomer (name) VALUES ('Fred');
SELECT * FROM widgetCustomer;

CREATE TRIGGER stampSale AFTER INSERT ON widgetSale
    BEGIN
        UPDATE widgetSale SET stamp = DATETIME('now') WHERE id = NEW.id;
        UPDATE widgetCustomer SET last_order_id = NEW.id, stamp = DATETIME('now')
            WHERE widgetCustomer.id = NEW.customer_id;
        INSERT INTO widgetLog (stamp, event, username, tablename, table_id)
            VALUES (DATETIME('now'), 'INSERT', 'TRIGGER', 'widgetSale', NEW.id);
    END
;

INSERT INTO widgetSale (item_id, customer_id, quan, price) VALUES (1, 3, 5, 1995);
INSERT INTO widgetSale (item_id, customer_id, quan, price) VALUES (2, 2, 3, 1495);
INSERT INTO widgetSale (item_id, customer_id, quan, price) VALUES (3, 1, 1, 2995);

SELECT * FROM widgetSale;
SELECT * FROM widgetCustomer;
SELECT * FROM widgetLog;

-- restore database
DROP TRIGGER IF EXISTS newWidgetSale;
DROP TRIGGER IF EXISTS updateWidgetSale;
DROP TRIGGER IF EXISTS stampSale;

DROP TABLE IF EXISTS widgetCustomer;
DROP TABLE IF EXISTS widgetSale;
DROP TABLE IF EXISTS widgetLog;

52.Creating a subselect

CREATE TABLE t ( a TEXT, b TEXT );
INSERT INTO t VALUES ( 'NY0123', 'US4567' );
INSERT INTO t VALUES ( 'AZ9437', 'GB1234' );
INSERT INTO t VALUES ( 'CA1279', 'FR5678' );
SELECT * FROM t;

/*SUBSTR(a, 1, 2) : column a, start from position1, 2 chars*/
/*SUBSTR(a, 3):column a start from position 3*/
SELECT SUBSTR(a, 1, 2) AS State, SUBSTR(a, 3) AS SCode, 
  SUBSTR(b, 1, 2) AS Country, SUBSTR(b, 3) AS CCode FROM t;

SELECT co.Name, ss.CCode FROM (
    SELECT SUBSTR(a, 1, 2) AS State, SUBSTR(a, 3) AS SCode,
      SUBSTR(b, 1, 2) AS Country, SUBSTR(b, 3) AS CCode FROM t
  ) AS ss
  JOIN Country AS co
    ON co.Code2 = ss.Country
;

DROP TABLE t;

53.Searching within a result set

SELECT DISTINCT album_id FROM track WHERE duration <= 90;

SELECT * FROM album
  WHERE id IN (SELECT DISTINCT album_id FROM track WHERE duration <= 90)
;

SELECT a.title AS album, a.artist, t.track_number AS seq, t.title, t.duration AS secs
  FROM album AS a
  JOIN track AS t
    ON t.album_id = a.id
  WHERE a.id IN (SELECT DISTINCT album_id FROM track WHERE duration <= 90)
  ORDER BY a.title, t.track_number
;

SELECT a.title AS album, a.artist, t.track_number AS seq, t.title, t.duration AS secs
  FROM album AS a
  JOIN (
    SELECT album_id, track_number, duration, title
      FROM track
      WHERE duration <= 90
  ) AS t
    ON t.album_id = a.id
  ORDER BY a.title, t.track_number
;

54.Creating a view

SELECT id, album_id, title, track_number, duration / 60 AS m, duration % 60 AS s FROM track;

CREATE VIEW trackView AS
  SELECT id, album_id, title, track_number, 
    duration / 60 AS m, duration % 60 AS s FROM track;
SELECT * FROM trackView;

SELECT a.title AS album, a.artist, t.track_number AS seq, t.title, t.m, t.s
  FROM album AS a
  JOIN trackView AS t
    ON t.album_id = a.id
  ORDER BY a.title, t.track_number
;

SELECT a.title AS album, a.artist, t.track_number AS seq, t.title, 
    t.m || ':' || substr('00' || t.s, -2, 2) AS dur
	/*|| concat, -2:2chars from the end, for length of 2*/
  FROM album AS a
  JOIN trackView AS t
    ON t.album_id = a.id
  ORDER BY a.title, t.track_number
;

DROP VIEW IF EXISTS trackView;

55.Creating a joined view

SELECT a.artist AS artist,
    a.title AS album,
    t.title AS track,
    t.track_number AS trackno,
    t.duration / 60 AS m,
    t.duration % 60 AS s
  FROM track AS t
    JOIN album AS a
      ON a.id = t.album_id
;

CREATE VIEW joinedAlbum AS
  SELECT a.artist AS artist,
      a.title AS album,
      t.title AS track,
      t.track_number AS trackno,
      t.duration / 60 AS m,
      t.duration % 60 AS s
    FROM track AS t
    JOIN album AS a
      ON a.id = t.album_id
;

SELECT * FROM joinedAlbum;
SELECT * FROM joinedAlbum WHERE artist = 'Jimi Hendrix';

SELECT artist, album, track, trackno, 
   m || ':' || substr('00' || s, -2, 2) AS duration
    FROM joinedAlbum;

DROP VIEW IF EXISTS joinedAlbum;

56.Overview (functions)
<UDF> User Defined Functions

SELECT SEC_TO_TIME(320);
SELECT TIME_TO_SEC('5:20');
SELECT title, duration, SEC_TO_TIME(duration) FROM track;

SELECT a.title, SUM(duration), SUM_SEC_TO_TIME(t.duration) FROM track AS t
  JOIN album AS a ON t.album_id = a.id
  GROUP BY a.id

58.Embedding SQL


59.The SELECT functions


60.The INSERT, UPDATE, and DELETE functions

61.Goodbye
done

Source: (L) SQL ES 
