    "use strict"
    class MyAjax {
        constructor(option) {
            this.option = option
            this.ajax(option)
        }
        ajax(option) {
            window.fetch?(window.fetch(option.url)
                .then(res => res.json())
                .then(data => {
                    this.render(data)
                })
                .catch(e=>console.log(e))):this.xml(option)
        }
        xml(option){
            var xml = new XMLHttpRequest()
            xml.open("get",option.url)
            xml.onreadystatechange=()=>{
                if(xml.readyStat==4){
                    this.render(JSON.pares(xml.responseText))
                }
            }
            xml.send()
        }
        render(data){
            let str = ''
            for (let i = 0; i < data.videos.length; i++) {
                str += `<li>
            <div class="left"><img src="${data.videos[i].imgs}"></div>
            <div class="right">
                <p>${data.videos[i].docs||data.videos[i].name||"未命名"}</p>
                <p>${data.videos[i].createTime.split(" ")[0]}</p>
                <p>播放 <span>${data.videos[i].duration}</span></p>
            </div>
        </li>`
            }
            document.querySelector(this.option.container).innerHTML=str
        }
    }
export default MyAjax