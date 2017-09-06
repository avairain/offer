import "./less/userinfo.less"
import MyAjax from "./js/main.js"
 new MyAjax({
     url:'http://117.131.17.174:8083/mam-cloud/ugc/getVideosByUser?appId=564&userId=314276022&start=0&limit=10',
     container:'#container'
 })