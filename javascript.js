//web rtc 调用摄像头(兼容性写法(谷歌、火狐、ie))
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
//调用成功会回调返回一个stream流 video:true 表示采集视频,audio:true 表示采集声音,反之就都不采集。 
navigator.getUserMedia({video:true,audio:false},function(stream){
    //将采集到的视频信息显示在video标签中
    document.getElementById("vi").srcObject = stream;
},console.log)


var myQuestion = document.getElementById("template_question");  //调试用的

/**
 * 调试用的一块代码
 */
var check_title_list = ["aaa","bbbb","ccc","ddd"];
var answer = [];
var question_title = "test"




/**
 * 用来添加单道题目
 * @param {string} question_title string 题目题干
 * @param {string} question_answer string 题目答案
 * @param {Array} check_title_list Array 四个元素，分别是题目的选项的文字内容
 * @param {string} question_only_ID string 题目唯一编码
 * @param {number} question_order 题目序号
 * 
 */
function addQuestion (question_title ="test", check_title_list = ["aaa","bbbb","ccc","ddd"], question_answer = "A", question_only_ID, question_order=-1) {

    var question = document.getElementById("template_question").cloneNode(true);
    question.id = "question"+question_order;
    question.children[0].textContent = "第" + question_order +" 题： " + question_title;  //赋值题目
    question.setAttribute("style","dispaly = true");
    question.firstElementChild = question_title;
    question.setAttribute("data-answer", question_answer);     //在元素中自定义data-answer属性，明确可以被查看到，给有基础的同学一点后门。
    question.setAttribute("data-answer-only-ID", question_only_ID);     //在元素中自定义data-answer属性，明确可以被查看到，给有基础的同学一点后门。


    //为每道题正确赋予选项
    for (let index = 0; index < 4; index++) {
        question.children[index+1].firstElementChild.name = "question" + question_order;
        question.children[index+1].firstElementChild.nextElementSibling.textContent = String.fromCharCode(65+index) +"："+ check_title_list[index];
    }


    document.getElementById("questions").appendChild(question);

}

/**
 * 用来初始化题目，添加所有题目，和数据库中给出的本次题目list对接。
 * @param {Array}  question_list 所有题目总和 元素为Object的数组，
 *          每个对象都含有属性question_title 用来储存题干,
 *          check_title_list 每一个选项， 
 *          question_answer 本题答案,
 *          question_only_ID 题目唯一标识id
 * 
 */
function initializeQuestion(question_list){
    let question_number_ID = 0; //全局变量，用来赋值问题ID

    for (let index = 0; index < question_list.length; index++) {
        question_title = question_list[index].question_title;
        check_title_list = question_list[index].check_title_list;
        question_answer = question_list[index].answer;
        question_only_ID = question_list[index].only_ID;
        addQuestion(question_title,check_title_list,question_answer,question_only_ID,question_number_ID)
        question_number_ID++;
    }
}
