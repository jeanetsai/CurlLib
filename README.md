# cURLLib
PHP cURL Lib

安裝方式:
1.尋找 php.ini 開啟並找到 php_curl.dll 把前面的 ; 去掉作為啟動
2.尋找 ssleay32.dll libeay32.dll 和 php_ext 資料夾的 php_curl.dll
三個都 copy 至 windows/system32
3.Appserv 初始化 => Appserv => configuration server => Apache test the httpd.conf
configuration file 打開 run 一下
4.下載網路上的 cURL 函式庫解壓至同一路徑 include lib_http.php ... etc.
5.使用 lib_mysql 前 先設定(開啟 php) 參考書 P.114 改 localhost, username = root pw=安裝時pw database=自己建再打名字
