安裝跳過 visual studio/spyder
0203 variables and expressions
# Declare a variable and initialize it
f = 0
print (f)

# re-declaring the variable works
f = "abc"
print (f)

# ERROR: variables of different types cannot be combined
#print ("string type " + 123)
print ("string type " + str(123))
#數字記得轉字串 和JS不同

# Global vs. local variables in functions
# 函式寫法
def someFunction():
  #global f #定義global variable
  f = "def"
  #裡面的f和外面的f不同
  #裡面的f是local variable
  print (f)

someFunction()
print (f) 

del f #delete variable declared
print (f)
##Output:此時f被刪除了 global f undefined

0204 python functions

#
# Example file for working with functions
#

# define a basic function
# 函式1 用冒號不用大括號
def func1():
  print ("I am a function")

# function that takes arguments
def func2(arg1, arg2):
  print (arg1, " ", arg2)

# function that returns a value
def cube(x):
  return x*x*x

# function with default value for an argument
def power(num, x=1):
  result = 1;
  for i in range(x):#迴圈
    result = result * num  
  return result

#function with variable number of arguments
#傳入多個數
def multi_add(*args):
  result = 0;
  for x in args:
    result = result + x
  return result

func1()#正確 輸出 func1 內容 I am a function
print (func1())#正確 輸出 func1 內容  I am a function
print (func1)#回傳object

func2(10,20)#正確 輸出 10 20
print (func2(10,20))#正確 輸出 10 20

print (cube(3))#正確 輸出 27

print (power(2))#正確 輸出2
print (power(2,3))#num=2 x=3 輸出2^3=8
print (power(x=3, num=2))#num=2 x=3 輸出2^3=8


print (multi_add(4,5,10,4))#輸出23
print (multi_add(10,4,5,10,4))#輸出33


0205 conditional structures

#
# Example file for working with conditional statements
#

def main():#定義一個函式叫main
  x, y = 10, 100
  
  # conditional flow uses if, elif, else  
  if(x < y):
    st= "x is less than y"
  elif (x == y):
    st= "x is same as y"
  else:
    st= "x is greater than y"
  print (st)

  # conditional statements let you use "a if C else b"
  #全寫成一行的寫法
  st = "x is less than y" if (x < y) else "x is greater than or equal to y"
  print (st)
  
  # Python does not have support for higher-order conditionals py尚未有switch-case
  # like "switch-case" in other languages
  
if __name__ == "__main__":
  main()


0206 loops
#
# Example file for working with loops
#

def main():
  x = 0
  
  # define a while loop
  while (x < 5):
     print (x)
     x = x + 1

  # define a for loop
  # 意思等於 (var i=5; i<10; i++)
  for x in range(5,10):
    print (x)
	#output: 5 6 7 8 9
    
  # use a for loop over a collection
  # 迴圈印出陣列
  days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
  for d in days:
    print (d)
	
  
  # use the break and continue statements
  for x in range(5,10):
    #if (x == 7): break # output: 5 6
    #if (x % 2 == 0): continue 
	#回到一開始執行 output: 5 7 9
    print (x)
  
  #using the enumerate() function to get index  列印矩陣index和內容
  days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
  for i, d in enumerate(days):
    print (i, d)
	#output: 0 Mon 1 Tue 2 Wed .... 6 Sun
  
if __name__ == "__main__":
  main()



0207 classes

#
# Example file for working with classes
#

class myClass():
  def method1(self):#self類似this 指物件本身
    print ("myClass method1")
    
  def method2(self, someString):
    print ("myClass method2: " + someString)
    
class anotherClass(myClass):
#anotherClass繼承自 myClass
  def method2(self):
    print ("anotherClass method2")
    
  def method1(self):
    myClass.method1(self)
    print ("anotherClass method1")
      
def main():#function main
  c = myClass()
  c.method1()
  c.method2("This is a string")
  #output:myClass method1
  #myClass method2: This is a string
  
  c2 = anotherClass()
  #output:
  #myClass method1
  #myClass method2: This is a string 
  
  c2.method1()
  #output:
  #myClass method1
  #anotherClass method1 
  
  c2.method2("This is a string")
  #anotherClass method2 
 
if __name__ == "__main__":
  main()

0208 importing and using modules
-----------------------------------
import math

print("Pi is: ", math.pi)



@0301 the date, time and datetime classes

#
# Example file for working with date information
#

from datetime import date
from datetime import time
from datetime import datetime

def main():
  ## DATE OBJECTS
  # Get today's date from the simple today() method from the date class
  today = date.today()
  print ("Today's date is ", today)
  
  # print out the date's individual components
  print ("Date Components: ", today.day, today.month, today.year)
  
  # retrieve today's weekday (0=Monday, 6=Sunday)
  print ("Today's Weekday #: ", today.weekday())
  days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
  print ("Which is a " + days[today.weekday()])
  
  ## DATETIME OBJECTS
  # Get today's date from the datetime class
  today = datetime.now()
  print  ("The current date and time is ", today)
  
  # Get the current time
  t = datetime.time(datetime.now())
  print ("The current time is ", t)
  
  
if __name__ == "__main__":
  main();
  

@0302 formatting time output
#
# Example file for formatting time and date output
#

from datetime import datetime

def main():
  # Times and dates can be formatted using a set of predefined string
  # control codes 
  now = datetime.now() # get the current date and time
  
  #### Date Formatting ####
  
  # %y/%Y - Year, %a/%A - weekday, %b/%B - month, %d - day of month
  print (now.strftime("The current year is: %Y")) # full year with century
  print (now.strftime("%a, %d %B, %y")) # abbreviated day, num, full month, abbreviated year
  
  # %c - locale's date and time, %x - locale's date, %X - locale's time
  print (now.strftime("Locale date and time: %c"))
  print (now.strftime("Locale date: %x"))
  print (now.strftime("Locale time: %X"))
  
  #### Time Formatting ####
  
  # %I/%H - 12/24 Hour, %M - minute, %S - second, %p - locale's AM/PM
  print (now.strftime("Current time: %I:%M:%S %p")) # 12-Hour:Minute:Second:AM
  print (now.strftime("24-hour time: %H:%M")) # 24-Hour:Minute


if __name__ == "__main__":
  main();


@0303 using timedelta objects

#
# Example file for working with timedelta objects
#

from datetime import date
from datetime import time
from datetime import datetime
from datetime import timedelta

# construct a basic timedelta and print it
print (timedelta(days=365, hours=5, minutes=1))

# print today's date
now = datetime.now()
print ("today is: " + str(now))

# print today's date one year from now
print ("one year from now it will be: " + str(now + timedelta(days=365)))

# create a timedelta that uses more than one argument
print ("in two weeks and 3 days it will be: " + str(now + timedelta(weeks=2, days=3)))

# calculate the date 1 week ago, formatted as a string
t = datetime.now() - timedelta(weeks=1)
s = t.strftime("%A %B %d, %Y")
print ("one week ago it was " + s)

### How many days until April Fools' Day?

today = date.today()  # get today's date
afd = date(today.year, 4, 1)  # get April Fool's for the same year
# use date comparison to see if April Fool's has already gone for this year
# if it has, use the replace() function to get the date for next year
if afd < today:
  print ("April Fool's day already went by %d days ago" % ((today-afd).days))
  afd = afd.replace(year=today.year + 1)  # if so, get the date for next year

# Now calculate the amount of time until April Fool's Day  
time_to_afd = afd - today
print ("It's just", time_to_afd.days, "days until next April Fools' Day!")



@0304 working with calendars

#
# Example file for working with Calendars
#

import calendar

# create a plain text calendar
c = calendar.TextCalendar(calendar.SUNDAY)
str = c.formatmonth(2017, 1, 0, 0)
print (str)

# create an HTML formatted calendar
hc = calendar.HTMLCalendar(calendar.SUNDAY)
str = hc.formatmonth(2017, 1)
print (str)

# loop over the days of a month
# zeroes mean that the day of the week is in an overlapping month
for i in c.itermonthdays(2017, 8):
  print (i)
  
# The Calendar module provides useful utilities for the given locale,
# such as the names of days and months in both full and abbreviated forms
for name in calendar.month_name:
  print (name)

for day in calendar.day_name:
  print (day)

# Calculate days based on a rule: For example, consider
# a team meeting on the first Friday of every month.
# To figure out what days that would be for each month,
# we can use this script:
print ("Team meetings will be on:")
for m in range(1,13):
  # returns an array of weeks that represent the month
  cal = calendar.monthcalendar(2017, m)
  # The first Friday has to be within the first two weeks
  weekone = cal[0]
  weektwo = cal[1]
   
  if weekone[calendar.FRIDAY] != 0:
    meetday = weekone[calendar.FRIDAY]
  else:
    # if the first friday isn't in the first week, it must be in the second
    meetday = weektwo[calendar.FRIDAY]
      
  print ("%10s %2d" % (calendar.month_name[m], meetday))


04 working with files
0401 reading and writing files
#
# Read and write files using the built-in Python file methods
#

def main():  
  # Open a file for writing and create it if it doesn't exist 新增檔案
  f = open("textfile.txt","w+")
  
  # Open the file for appending text to the end
  # a = append
  # f = open("textfile.txt","a+")
  # r = read only
  # f = open("textfile.txt","r")
  
  # write some lines of data to the file
  for i in range(10):
    f.write("This is line %d\r\n" % (i+1))
  
  for i in range(10):
    f.write("This is line" +str(i)+"\r\n")
    
  # close the file when done
  f.close()
  
  # Open the file back up and read the contents
  f = open("textfile.txt","r")
  if f.mode == 'r': # check to make sure that the file was opened
    # use the read() function to read the entire file
    contents = f.read()#重要 讀txt
    print (contents)
 

	#重要 逐行讀入txt
    fl = f.readlines() # readlines reads the individual lines into a list
    for x in fl:
      print (x)

	  
if __name__ == "__main__":
  main()



0402 working with os path utilities
#找出檔案資訊
#
# Example file for working with os.path module
#

import os
from os import path
import datetime
from datetime import date, time, timedelta
import time

def main():
  # Print the name of the OS
  #print (os.name)
  
  # Check for item existence and type
  print ("Item exists: " + str(path.exists("textfile.txt")))
  #檢查是否存在 回傳true
  
  print ("Item is a file: " + str(path.isfile("textfile.txt")))
  #檢查是否為檔案 回傳true
  
  print ("Item is a directory: " + str(path.isdir("textfile.txt")))
  #檢查是否為資料夾 回傳false  
  
  # Work with file paths
  print ("Item's path: " + str(path.realpath("textfile.txt")))
  #回傳完整的路徑和檔名
  
  print ("Item's path and name: " + str(path.split(path.realpath("textfile.txt"))))
  #回傳路徑和檔名，分開列出  
  
  # Get the modification time
  t = time.ctime(path.getmtime("textfile.txt"))
  print (t)
  #回傳修改日期
  
  print (datetime.datetime.fromtimestamp(path.getmtime("textfile.txt")))
  #回傳修改日期(另一種格式)
  
  # Calculate how long ago the item was modified 看修改至今已多久時間
  td= datetime.datetime.now() - datetime.datetime.fromtimestamp(path.getmtime("textfile.txt"))#現在時間 減掉 修改時間
  print ("It has been " + str(td) + " since the file was modified")
  #回傳幾分鐘幾秒
  print ("Or, " + str(td.total_seconds()) + " seconds")
  #只回傳秒數

if __name__ == "__main__":
  main()



0403 using file system shell methods

#
# Example file for working with filesystem shell methods
#
import os
from os import path
import shutil #記得import
from shutil import make_archive
from zipfile import ZipFile

def main():
  # make a duplicate of an existing file
  if path.exists("textfile.txt"):#如果txt存在就
    # get the path to the file in the current directory
    src = path.realpath("textfile.txt");
	#找出本txt所在的路徑
        
    # # let's make a backup copy by appending "bak" to the name
    dst = src + ".bak"
    # # now use the shell to make a copy of the file
    shutil.copy(src,dst)
	#複製textfile.txt成textfile.txt.bak
    
    # # copy over the permissions, modification times, and other info
    shutil.copystat(src, dst)
	#複製textfile.txt成textfile.txt.bak
    
    # # rename the original file
    os.rename("textfile.txt", "newfile.txt")
	#改檔案名稱
    
    # now put things into a ZIP archive
	# 建立archive.zip
    root_dir,tail = path.split(src)
    shutil.make_archive("archive", "zip", root_dir)

    # more fine-grained control over ZIP files
	# 建立新的testzip.zip檔案 並寫入兩個檔案
	# 完成後解壓 zip 即可得到檔案
    with ZipFile("testzip.zip","w") as newzip:
      newzip.write("newfile.txt")
      newzip.write("textfile.txt.bak")
      
if __name__ == "__main__":
  main()

05 working with web data
0501 fetching internet data

# 
# Example file for retrieving data from the internet
#
import urllib.request # instead of urllib2 like in Python 2.7

def main():
  # open a connection to a URL using urllib2
  # 重要 下載URL
  webUrl = urllib.request.urlopen("http://www.google.com")
  
  # get the result code and print it
  print ("result code: " + str(webUrl.getcode()))
  # result code: 200
  
  # read the data from the URL and print it
  # 重要 印出網頁
  data = webUrl.read()
  print (data)

if __name__ == "__main__":
  main()


@0502 working with json data

# 
# Example file for parsing and processing JSON
#

import urllib.request # instead of urllib2 like in Python 2.7
import json

def printResults(data):
  # Use the json module to load the string data into a dictionary
  theJSON = json.loads(data)
  
  # now we can access the contents of the JSON like any other Python object
  if "title" in theJSON["metadata"]:
    print (theJSON["metadata"]["title"])
  
  # output the number of events, plus the magnitude and each event name  
  count = theJSON["metadata"]["count"];
  print (str(count) + " events recorded")
  
  # for each event, print the place where it occurred
  for i in theJSON["features"]:
    print (i["properties"]["place"])
  print ("--------------\n")

  # print the events that only have a magnitude greater than 4
  for i in theJSON["features"]:
    if i["properties"]["mag"] >= 4.0:
      print ("%2.1f" % i["properties"]["mag"], i["properties"]["place"])
  print ("--------------\n")

  # print only the events where at least 1 person reported feeling something
  print ("\n\nEvents that were felt:")
  for i in theJSON["features"]:
    feltReports = i["properties"]["felt"]
    if (feltReports != None):
      if (feltReports > 0):
        print ("%2.1f" % i["properties"]["mag"], i["properties"]["place"], " reported " + str(feltReports) + " times")
  
  
def main():
  # define a variable to hold the source URL
  # In this case we'll use the free data feed from the USGS
  # This feed lists all earthquakes for the last day larger than Mag 2.5
  urlData = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson"
  
  # Open the URL and read the data
  webUrl = urllib.request.urlopen(urlData)
  print ("result code: " + str(webUrl.getcode()))
  if (webUrl.getcode() == 200):
    data = webUrl.read()
    # print out our customized results
    printResults(data)
  else:
    print ("Received an error from server, cannot retrieve results " + str(webUrl.getcode()))

if __name__ == "__main__":
  main()


@0503 parsing and processing html

# 
# Example file for parsing and processing HTML
#

# import the HTMLParser module
# in Python 3 you need to import from html.parser
from html.parser import HTMLParser

metacount = 0;

# create a subclass of HTMLParser and override the handler methods
class MyHTMLParser(HTMLParser):
  # function to handle an opening tag in the doc
  # this will be called when the closing ">" of the tag is reached
  def handle_starttag(self, tag, attrs):
    global metacount
    if tag == "meta":
      metacount += 1

    print ("Encountered a start tag:", tag)
    pos = self.getpos() # returns a tuple indication line and character
    print ("\tAt line: ", pos[0], " position ", pos[1])

    if attrs.__len__() > 0:
      print ("\tAttributes:")
      for a in attrs:
        print ("\t", a[0],"=",a[1])
      
  # function to handle the ending tag
  def handle_endtag(self, tag):
    print ("Encountered an end tag:", tag)
    pos = self.getpos()
    print ("\tAt line: ", pos[0], " position ", pos[1])
    
  # function to handle character and text data (tag contents)
  def handle_data(self, data):
    if (data.isspace()):
      return
    print ("Encountered some text data:", data)
    pos = self.getpos()
    print ("\tAt line: ", pos[0], " position ", pos[1])
  
  # function to handle the processing of HTML comments
  def handle_comment(self, data):
    print ("Encountered comment:", data)
    pos = self.getpos()
    print ("\tAt line: ", pos[0], " position ", pos[1])

def main():
  # instantiate the parser and feed it some HTML
  parser = MyHTMLParser()
    
  # open the sample HTML file and read it
  f = open("samplehtml.html")
  if f.mode == "r":
    contents = f.read() # read the entire file
    parser.feed(contents)
  
  print ("%d meta tags encountered" % metacount)

if __name__ == "__main__":
  main();
  

@0504 manipulating XML

# 
# Example file for parsing and processing XML
#

import xml.dom.minidom

def main():
  # use the parse() function to load and parse an XML file
  doc = xml.dom.minidom.parse("samplexml.xml")
  
  # print out the document node and the name of the first child tag
  print (doc.nodeName)
  print (doc.firstChild.tagName)
  
  # get a list of XML tags from the document and print each one
  skills = doc.getElementsByTagName("skill")
  print ("%d skills:" % skills.length)
  for skill in skills:
    print (skill.getAttribute("name"))
    
  # create a new XML tag and add it into the document
  newSkill = doc.createElement("skill")
  newSkill.setAttribute("name", "jQuery")
  doc.firstChild.appendChild(newSkill)

  skills = doc.getElementsByTagName("skill")
  print ("%d skills:" % skills.length)
  for skill in skills:
    print (skill.getAttribute("name"))
        
if __name__ == "__main__":
  main();



next steps
python 3 esst
docs.python.org




Source: L_ing_Python