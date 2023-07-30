# 餐廳清單頁面
由Node.js、Express所建構而成的網頁，清楚展示餐廳相關資訊，如下所示:
- 店家名稱、料理風格、圖片
- 大眾推薦評分，呈現顧客真實回饋，皆能在此頁面上查看
- 透過搜尋關鍵字，直接將所需資訊呈現出來
- 甚至亦能新增資訊，進行編輯、刪除等，完成屬於您的個人餐廳頁面

## 專案安裝流程
1.開啟終端機(Terminal)，執行clone指令，將專案儲存至本機端
```
git clone https://github.com/FrancisCKY/RestaurantsPage.git
```
2.開啟終端機，進入放置該專案資料夾中，並進行安裝相關套件
```
cd Restaurant //移動至該資料夾
```
```
npm install //安裝套件
```
3.開啟終端機安裝nodemon套件
```
nodemon app.js
```
4.開始執行程式
```
npm run dev
```
若終端機出現'express server is running on http://localhost:3000 '，代表啟動完成，請至''http://localhost:3000''網頁開始使用

![](./img/Restaurant%20cover.png)

## 使用工具
- Visual Studio Code - 軟體開發環境
- Express - 應用程式架構
- Express - Handlebars - 模板引擎
- Sequelize - 為一個基於 Promise 的 Node.js ORM，目前支援 Postgres、MySQL、MariaDB、SQLite 以及 Microsoft SQL Server

## 專案開發人員
> Francis chen