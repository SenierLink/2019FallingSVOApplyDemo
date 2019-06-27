//web rtc 调用摄像头(兼容性写法(谷歌、火狐、ie))
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
//调用成功会回调返回一个stream流 video:true 表示采集视频,audio:true 表示采集声音,反之就都不采集。 
navigator.getUserMedia({video:true,audio:false},function(stream){
    //将采集到的视频信息显示在video标签中
    document.getElementById("vi").srcObject = stream;
},console.log)

question_number_ID = 0; //全局变量，用来赋值问题ID

/**
 * 这个函数可以接受多个参数，分别是question_title，check_list ，check_question
 * @param question_title string
 * @param check_question Array 四个元素，分别是题目的选项
 * @param check_list Array 四个元素，分别是四个选项的答案
 */
function addQuestion (question_title, check_list, check_question) {

    var question = document.getElementById("template_question").cloneNode(true);
    question.id = "question"+question_number_ID;
    question.setAttribute("style","dispaly = true")
    document.getElementById("questions").appendChild(question);
}

