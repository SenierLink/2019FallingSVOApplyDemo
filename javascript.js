//web rtc 调用摄像头(兼容性写法(谷歌、火狐、ie))
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
//调用成功会回调返回一个stream流 video:true 表示采集视频,audio:true 表示采集声音,反之就都不采集。 
navigator.getUserMedia({video:true,audio:false},function(stream){
    //将采集到的视频信息显示在video标签中
    document.getElementById("vi").srcObject = stream;
},console.log)

function addQuestion () {
    var question = document.getElementById("template_question").cloneNode(true);
    //在这里可以配置这个新的问题。
    question.setAttribute("style","dispaly = true")
    console.log(question)
    document.getElementById("questions").appendChild(question);
    return question;
}