/*
 * @Author: 阎杰
 * @Date:   2020-04-01 21:18:25
 * @Last Modified by:   Your name
 * @Last Modified time: 2020-04-08 20:10:51
 */

//two
let a = ['addEventListener()','appName','appCodeName','appVersion','alert()'];
let b = ['break'];
let c = ['console.log()','continue','concat()','charAt()','charCodeAt()','cookieEnabled','confirm()','clearTimeout()','clearInterval()'];
let d = ['document.write()','debugger','Date()','Date.now()'];
let e = ['every()'];
let f = ['forEach()','filter()','find()','findIndex()'];
let g = ['getTime()','getFullYear()','getMonth()','getDate()','getHours()','getMinutes()','getSeconds()','getDay()','getMilliseconds()'];
let h = ['history.back()','history.forward()'];
let i = ['innerHTML','instanceof','indexOf()','isArray()'];
let j = ['join()','JSON.parse()','JSON.stringify()','javaEnabled()'];
let k = [];
let l = ['lastIndexOf()','language'];
let m = ['Math.pow()','MAX_VALUE','MIN_VALUE','Math.max.apply()','Math.min.apply()','map()','Math.PI','Math.round()','Math.sqrt()','Math.abs()','Math.ceil()','Math.floor()','Math.sin()','Math.cos()','Math.min()','Math.max()','Math.random()'];
let n = ['NaN'];
let o = ['onclick','onchange','onmouseover','onmouseout','onkeydown','onload','onLine'];
let p = ['parseInt()','parseFloat()','push()','pop()','product','platform','prompt()'];
let q = ['quick','qq'];
let r = ['return','replace()','reverse()','reduce()','removeEventListener()'];
let s = ['script','search()','slice()','substring()','substr()','split()','shift()','splice()','sort()','some()','setFullYear()','setMonth()','setDate()','setHours()','setMinutes()','setSeconds()','screen.width','screen.height','screen.availWidth','screen.availHeight','screen.colorDepth','screen.pixelDepth','setTimeout()','setInterval()'];
let t = ['typeof','this','toUpperCase()','toLowerCase()','trim()','toString()','toExponential()','toFixed()','toPrecision()','test()'];
let u = ['unshift()','userAgent'];
let v = [];
let w = ['window.alert()','window.innerHeight','window.innerWidth','window.open()','window.close()','window.moveTo()','window.resizeTo()','window.location.href','window.location.hostname','window.location.pathname','window.location.protocol','window.location.port','window.location.assign()'];
let x = [];
let y = [];
let z = [];

let data = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];   //one

function dataAll(one,two){
    switch(one){
        case 0: return $(`#liA-${two}`).text();
        case 1: return $(`#liB-${two}`).text();
        case 2: return $(`#liC-${two}`).text();
        case 3: return $(`#liD-${two}`).text();
        case 4: return $(`#liE-${two}`).text();
        case 5: return $(`#liF-${two}`).text();
        case 6: return $(`#liG-${two}`).text();
        case 7: return $(`#liH-${two}`).text();
        case 8: return $(`#liI-${two}`).text();
        case 9: return $(`#liJ-${two}`).text();
        case 10: return $(`#liK-${two}`).text();
        case 11: return $(`#liL-${two}`).text();
        case 12: return $(`#liM-${two}`).text();
        case 13: return $(`#liN-${two}`).text();
        case 14: return $(`#liO-${two}`).text();
        case 15: return $(`#liP-${two}`).text();
        case 16: return $(`#liQ-${two}`).text();
        case 17: return $(`#liR-${two}`).text();
        case 18: return $(`#liS-${two}`).text();
        case 19: return $(`#liT-${two}`).text();
        case 20: return $(`#liU-${two}`).text();
        case 21: return $(`#liV-${two}`).text();
        case 22: return $(`#liW-${two}`).text();
        case 23: return $(`#liX-${two}`).text();
        case 24: return $(`#liY-${two}`).text();
        case 25: return $(`#liZ-${two}`).text();
    }
}

function dataA(){
    let $liA0 = $("<li id='liA-0'>addEventListener():该方法为指定元素指定事件处理程序。element.addEventListener(event, function, useCapture);第一个参数是事件的类型（比如 \"click\" 或 \"mousedown\"）,第二个参数是当事件发生时我们需要调用的函数,第三个参数是布尔值，指定使用事件冒泡还是事件捕获,此参数是可选的,默认为false事件冒泡（在冒泡中，最内侧元素的事件会首先被处理，然后是更外侧的；在捕获中，最外侧元素的事件会首先被处理，然后是更内侧的）。</li>");
    let $liA1 = $("<li id='liA-1'>navigator.appName:返回浏览器的应用程序名称。\"Netscape\"是IE11、Chrome、Firefox以及Safari的应用程序名称的统称。</li>");
    let $liA2 = $("<li id='liA-2'>navigator.appCodeName:返回浏览器的应用程序代码名称；\"Mozilla\"是Chrome、Firefox、IE、Safari以及Opera的应用程序代码名称。</li>");
    let $liA3 = $("<li id='liA-3'>navigator.appVersion:返回有关浏览器的版本信息。</li>");
    let $liA4 = $("<li id='liA-4'>alert()：可以使用警告框来显示数据(如果script标签在head中，会先执行警告框的内容，待用户取消或确认后才会执行body部分的内容，请慎重script标签的位置)（window.alert()的简写）</li>");

    $("#list").append($liA0,$liA1,$liA2,$liA3,$liA4);
}

function dataB(){
    let $liB0 = $("<li id='liB-0'>终止switch或者循环(while、for)</li>");

    $("#list").append($liB0);
}

function dataC(){
    let $liC0 = $("<li id='liC-0'>可以使用console.log()来显示数据，通过开发者工具中的Console来观测数据。(可以在浏览器中按下F12快速打开)</li>");
    let $liC1 = $("<li id='liC-1'>跳出(当次)循环并开始下一次循环</li>");
    let $liC2 = $("<li id='liC-2'>.concat():连接两个或多个字符串。例如let text1=\"Hello\";let text2=\"World\";text3=text1.concat(\" \",text2);</li>");
    let $liC3 = $("<li id='liC-3'>.charAt():返回字符串中指定下标的字符串。例如：let str=\"Hi friend\"; str.charAt(1);结果会返回i</li>");
    let $liC4 = $("<li id='liC-4'>.charCodeAt():返回字符串中指定下标的字符unicode编码。例如：let str=\"Hi friend\"; str.charCodeAt(0);结果会返回72</li>");
    let $liC5 = $("<li id='liC-5'>navigator.cookieEnabled:如果cookie已启用则返回true，否则返回false。</li>");
    let $liC6 = $("<li id='liC-6'>confirm():希望用户验证或接受某个东西，当确认框弹出时，用户将不得不单击“确定”或“取消”来继续进行，如果用户单击“确定”，该框返回true。如果用户单击“取消”，该框返回false。(window.confirm()的简写)</li>");
    let $liC7 = $("<li id='liC-7'>clearTimeout()：停止执行setTimeout()中规定的函数。参数为需要停止的一次性定时器的名字。</li>");
    let $liC8 = $("<li id='liC-8'>clearInterval()：停止setInterval()方法中指定的函数的执行。参数为需要停止的周期性定时器的名字。</li>");
    
    $("#list").append($liC0,$liC1,$liC2,$liC3,$liC4,$liC5,$liC6,$liC7,$liC8);
}

function dataD(){
    let $liD0 = $("<li id='liD-0'>document.write()是为了完成测试而使用，可以直接显示内容，但如果在HTML文档完全加载后使用会将所有的HTML内容统统删除，也就是直接替换。</li>");
    let $liD1 = $("<li id='liD-1'>debugger类似于在代码中设置断点，程序会在“debugger;”之后终止并调用(如果可用)调试函数</li>");
    let $liD2 = $("<li id='liD-2'>new Date():用当前日期和时间创建新的日期对象。</li>");
    let $liD3 = $("<li id='liD-3'>Date.now():返回自零日期（1970 年 1 月 1 日 00:00:00:00）以来的毫秒数。</li>");

    $("#list").append($liD0,$liD1,$liD2,$liD3);
}

function dataE(){
    let $liE0 = $("<li id='liE-0'>Array.every():检查所有数组值是否通过测试。所运行函数的第一个参数为项目值value，第二个为项目索引(可省)，第三个为数组本身(可省)。</li>");
    
    $("#list").append($liE0);
}

function dataF(){
    let $liF0 = $("<li id='liF-0'>.forEach():为每个数组元素调用一次函数（回调函数），可以替换for循环完成遍历数组。所运行函数的第一个参数为项目值value，第二个为项目索引(可省)，第三个为数组本身(可省)。</li>");
    let $liF1 = $("<li id='liF-1'>Array.filter():创建一个包含通过测试的数组元素的新数组。所运行函数的第一个参数为项目值value，第二个为项目索引(可省)，第三个为数组本身(可省)。</li>");
    let $liF2 = $("<li id='liF-2'>Array.find():返回通过测试函数的第一个数组元素的值。所运行函数的第一个参数为项目值value，第二个为项目索引(可省)，第三个为数组本身(可省)。</li>");
    let $liF3 = $("<li id='liF-3'>Array.findIndex():返回通过测试函数的第一个数组元素的索引。所运行函数的第一个参数为项目值value，第二个为项目索引(可省)，第三个为数组本身(可省)。</li>");
    
    $("#list").append($liF0,$liF1,$liF2,$liF3);
}

function dataG(){
    let $liG0 = $("<li id='liG-0'>.getTime():返回自1970年1月1日以来的毫秒数。</li>");
    let $liG1 = $("<li id='liG-1'>.getFullYear():返回四位数字形式的年份。</li>");
    let $liG2 = $("<li id='liG-2'>.getMonth():以数字（0-11）返回日期的月份。</li>");
    let $liG3 = $("<li id='liG-3'>.getDate():以数字（1-31）返回日期的日。</li>");
    let $liG4 = $("<li id='liG-4'>.getHours():以数字（0-23）返回日期的小时数。</li>");
    let $liG5 = $("<li id='liG-5'>.getMinutes():以数字（0-59）返回日期的分钟数。</li>");
    let $liG6 = $("<li id='liG-6'>.getSeconds():以数字（0-59）返回日期的秒。</li>");
    let $liG7 = $("<li id='liG-7'>.getDay():以数字（0-6）返回日期的星期名。</li>");
    let $liG8 = $("<li id='liG-8'>.getMilliseconds():以数字（0-999）返回日期的毫秒数。</li>");
    
    $("#list").append($liG0,$liG1,$liG2,$liG3,$liG4,$liG5,$liG6,$liG7,$liG8);
}

function dataH(){
    let $liH0 = $("<li id='liH-0'>history.back():加载历史列表中前一个URL，相当于在浏览器中点击后退按钮。</li>");
    let $liH1 = $("<li id='liH-1'>history.forward():加载历史列表中下一个URL，相当于在浏览器中点击前进按钮。</li>");

    $("#list").append($liH0,$liH1);
}

function dataI(){
    let $liI0 = $("<li id='liI-0'>innerHTML属性定义了HTML内容。例如document.getElementById('demo').innerHTML可以获取id为demo的html内容，还可以直接赋值,但是会删除其原来的内容。</li>");
    let $liI1 = $("<li id='liI-1'>instanceof:如果对象是对象类型的实例则返回true。</li>");
    let $liI2 = $("<li id='liI-2'>indexOf():返回字符串中指定文本首次出现的索引(如果未找到文本就返回-1)。支持第二个参数设置起始位置。</li>");
    let $liI3 = $("<li id='liI-3'>Array.isArray():检查对象是否为数组。var fruits = [\"Banana\", \"Orange\", \"Apple\", \"Mango\"];\
    var x = document.getElementById(\"demo\");x.innerHTML = Array.isArray(fruits);结果返回true。</li>");

    $("#list").append($liI0,$liI1,$liI2,$liI3);
}

function dataJ(){
    let $liJ0 = $("<li id='liJ-0'>.join():可将所有数组元素结合为一个字符串。参数可以设置为用户需要地分隔符。(正好与split()相反)</li>");
    let $liJ1 = $("<li id='liJ-1'>JSON.parse():用于将文本转换为JavaScript对象。例如：var txt = '{\"name\":\"Bill Gates\", \"age\":62, \"city\":\"Seattle\"}'\&nbsp\
    var obj = JSON.parse(txt);document.getElementById(\"demo\").innerHTML = obj.name + \", \" + obj.age;结果为Bill Gates, 62 （一般用于从web服务器接收数据）</li>");
    let $liJ2 = $("<li id='liJ-2'>JSON.stringify():将对象转换为字符串。（一般用于将数据发送到web服务器）</li>");
    let $liJ3 = $("<li id='liJ-3'>navigator.javaEnabled():如果Java已经启用则返回true。</li>");
    
    $("#list").append($liJ0,$liJ1,$liJ2,$liJ3);    
}

function dataL(){
    let $liL0 = $("<li id='liL-0'>返回指定文本在字符串最后一次出现的索引(如果未找到文本就返回-1)。检索方向与indexof()相反，为从尾到头检索。支持第二个参数设置起始位置。</li>");
    let $liL1 = $("<li id='liL-1'>navigator.language:返回浏览器语言。</li>");

    $("#list").append($liL0,$liL1);
}

function dataM(){
    let $liM0 = $("<li id='liM-0'>let z = Math.pow(x,y);结果z为x的y次方。</li>");
    let $liM1 = $("<li id='liM-1'>.MAX_VALUE:返回js中可能的最大数字。</li>");
    let $liM2 = $("<li id='liM-2'>.MIN_VALUE:返回js中可能的最小数字。</li>");
    let $liM3 = $("<li id='liM-3'>Math.max.apply:查找数组中的最高值。Math.max.apply([1,2,3])等于Math.max(1,2,3)</li>");
    let $liM4 = $("<li id='liM-4'>Math.min.apply:查找数组中的最低值。Math.min.apply([1,2,3])等于Math.min(1,2,3)</li>");
    let $liM5 = $("<li id='liM-5'>Array.map():通过对每个数组元素执行函数来创建新数组，且不会对没有值得数组元素执行函数，不会更改原始数组。所运行函数的第一个参数为项目值value，第二个为项目索引(可省)，第三个为数组本身(可省)。</li>");
    let $liM6 = $("<li id='liM-6'>Math.PI:返回3.141592653589793。</li>");
    let $liM7 = $("<li id='liM-7'>Math.round(x):返回值为x四舍五入的整数。</li>");
    let $liM8 = $("<li id='liM-8'>Math.sqrt(x):返回x的平方根。</li>");
    let $liM9 = $("<li id='liM-9'>Math.abs(x):返回x的绝对值。</li>");
    let $liM10 = $("<li id='liM-10'>Math.ceil(x):返回x向上舍入的整数。</li>");
    let $liM11 = $("<li id='liM-11'>Math.floor(x):返回x向下舍入的整数。</li>");
    let $liM12 = $("<li id='liM-12'>Math.sin(x):返回角x(弧度制)的正弦值。</li>");
    let $liM13 = $("<li id='liM-13'>Math.cos(x):返回角x(弧度制)的余弦值。</li>");
    let $liM14 = $("<li id='liM-14'>Math.min():查询参数列表中最小值。</li>");
    let $liM15 = $("<li id='liM-15'>Math.max():查询参数列表中最大值。</li>");
    let $liM16 = $("<li id='liM-16'>Math.random():返回介于0(包括)与1(不包括)之间的随机数。</li>");

    $("#list").append($liM0,$liM1,$liM2,$liM3,$liM4,$liM5,$liM6,$liM7,$liM8,$liM9,$liM10,$liM11,$liM12,$liM13,$liM14,$liM15,$liM16);
}

function dataN(){
    let $liN0 = $("<li id='liN-0'>NaN:(Not a Number)常使用isNaN()来判断某个值是否为数。例如：let x=5;isNaN(x);结果返回false。</li>");

    $("#list").append($liN0);    
}

function dataO(){
    let $liO0 = $("<li id='liO-0'>用户点击了HTML元素。可以添加css属性或者添加函数。</li>");
    let $liO1 = $("<li id='liO-1'>HTML元素已被改变。</li>");
    let $liO2 = $("<li id='liO-2'>用户把鼠标移动到HTML元素上。</li>");
    let $liO3 = $("<li id='liO-3'>用户把鼠标移开HTML元素。</li>");
    let $liO4 = $("<li id='liO-4'>用户按下键盘按键。</li>");
    let $liO5 = $("<li id='liO-5'>浏览器已经完成页面加载。</li>");
    let $liO6 = $("<li id='liO-6'>navigator.onLine:如果浏览器在线则返回true。</li>");

    $("#list").append($liO0,$liO1,$liO2,$liO3,$liO4,$liO5,$liO6);
}

function dataP(){
    let $liP0 = $("<li id='liP-0'>parseInt():解析一段字符串(参数处填写)并返回数值(整型数字)。只返回首个数字，如果在遇到数字前先遇到其他字符则会返回NaN。</li>");
    let $liP1 = $("<li id='liP-1'>parseFloat():解析一段字符串(参数处填写)并返回数值(浮点型数字)。只返回首个数字，如果在遇到数字前先遇到其他字符则会返回NaN。</li>");
    let $liP2 = $("<li id='liP-2'>.push():向数组添加新元素，同时返回新数组的长度。例如：let fruits=[\"Banana\",\"Orange\"];fruits.push(\"Lemon\");向数组fruits添加一个新元素(Lemon)</li>");
    let $liP3 = $("<li id='liP-3'>.pop():从数组中删除最后一个元素，同时还会返回被删除的值。</li>");
    let $liP4 = $("<li id='liP-4'>navigator.product:返回浏览器引擎的产品名称。大多数浏览器都将“Gecko”作为产品名称返回。</li>");
    let $liP5 = $("<li id='liP-5'>navigator.platform:返回浏览器平台（操作系统）。</li>");
    let $liP6 = $("<li id='liP-6'>prompt():希望用户在进入页面前输入值，通常会使用提示框。当提示框弹出时，用户将不得不输入值后单击“确定”或点击“取消”来继续进行，如果用户单击“确定”，该框返回输入值。如果用户单击“取消”，该框返回NULL。（window.prompt()的简写）</li>");
    
    $("#list").append($liP0,$liP1,$liP2,$liP3,$liP4,$liP5,$liP6);
}

function dataR(){
    let $liR0 = $("<li id='liR-0'>退出函数并返回数据，使得函数名可以当作数据来使用。</li>");
    let $liR1 = $("<li id='liR-1'>用另一个值替换在字符串中指定的值。.replace(\"x\",\"y\"),x为原始值，y为修改后的值。注：不会改变原有的字符串，会返回一个新字符串，且只会替换字符串中首次出现的x。</li>");
    let $liR2= $("<li id='liR-2'>.reverse():反转数组中的元素。</li>");
    let $liR3= $("<li id='liR-3'>Array.reduce():在每个数组元素上运行函数，以生成（减少它）单个值，且在数组中从左到右工作，不会减少原始数组，可以接受第二个参数为初始值。所运行函数的第一个参数为总数，第二个参数为项目值，第三个参数为项目索引(可省)，第四个参数为数组本身(可省)。</li>");
    let $liR4= $("<li id='liR-4'>removeEventListener():删除已通过addEventListener()方法附加的事件处理程序。element.removeEventListener(\"mousemove\", myFunction);</li>");

    $("#list").append($liR0,$liR1,$liR2,$liR3,$liR4);
}

function dataS(){
    let $liS0 = $("<li id='liS-0'>script标签最好的位置是放在< /body>的上边，HTML内容的下面。①通过标签内的src引用外部js文件；②在标签的内容区直接写入js程序。</li>");
    let $liS1 = $("<li id='liS-1'>搜索特定值的字符串，并返回匹配的位置。(与indexof()基本相同，只是不能设置第二个参数)</li>");
    let $liS2 = $("<li id='liS-2'>提取字符串的某个部分并在新字符串中返回被提取的部分。可以设置两个参数，起始索引(开始位置)，终止索引(结束位置)(不包含结束位置)，如果某个参数为负数，则从字符串的结尾开始计数。可以省略第二个参数，则从起始位置开始裁剪字符串的剩余部分。注：不修改原字符串(或数组)，而是返回一个新字符串(数组)。</li>");
    let $liS3 = $("<li id='liS-3'>与slice()类似，可以接受两个参数，裁剪范围内的内容并返回一个新数组(或字符串)，但无法接受负的索引。</li>");
    let $liS4 = $("<li id='liS-4'>与slice()类似，可以接受两个参数，第一个参数规定起始位置，但是第二个参数规定的是被提取部分的长度。</li>");
    let $liS5 = $("<li id='liS-5'>.split():将字符串转换为数组(括号内可填写分割字符串的标点)。</li>");
    let $liS6 = $("<li id='liS-6'>.shift():删除首个数组元素，并把所有其他元素移动到更低的索引，同时还会返回被删除的元素。</li>");
    let $liS7 = $("<li id='liS-7'>.splice():①删除数组中的元素；②向数组添加新项。第一个参数定义了应添加新元素的位置，第二个元素定义了应删除多少元素(个数)，其余参数定义了要添加的新元素。</li>");
    let $liS8 = $("<li id='liS-8'>.sort():以字母顺序对数组进行排序(先比较每个元素的第一位，第一位相同再比较第二位，以此类推)。</li>");
    let $liS9 = $("<li id='liS-9'>Array.some():检查某些数组值是否通过了测试。所运行函数的第一个参数为项目值value，第二个为项目索引(可省)，第三个为数组本身(可省)。</li>");
    let $liS10 = $("<li id='liS-10'>.setFullYear():设置日期对象的年份。</li>");
    let $liS11 = $("<li id='liS-11'>.setMonth():设置日期对象的月份（0-11）。</li>");
    let $liS12 = $("<li id='liS-12'>.setDate():设置日期对象的日（1-31）。</li>");
    let $liS13 = $("<li id='liS-13'>.setHours():设置日期对象的小时（0-23）。</li>");
    let $liS14 = $("<li id='liS-14'>.setMinutes():设置日期对象的分钟（0-59）。</li>");
    let $liS15 = $("<li id='liS-15'>.setSeconds():设置日期对象的秒数（0-59）。</li>");
    let $liS16 = $("<li id='liS-16'>screen.width:返回以像素计的访问者屏幕宽度。</li>");
    let $liS17 = $("<li id='liS-17'>screen.height:返回以像素计的访问者屏幕的高度。</li>");
    let $liS18 = $("<li id='liS-18'>screen.availWidth:返回访问者屏幕的宽度，以像素计，减去诸如窗口工具条之类的界面特征。</li>");
    let $liS19 = $("<li id='liS-19'>screen.availHeight:返回访问者屏幕的高度，以像素计，减去诸如窗口工具条之类的界面特征。</li>");
    let $liS20 = $("<li id='liS-20'>screen.colorDepth:返回用于显示一种颜色的比特数,显示以位计的屏幕色彩深度。</li>");
    let $liS21 = $("<li id='liS-21'>screen.pixelDepth:返回屏幕的像素深度。</li>");
    let $liS22 = $("<li id='liS-22'>setTimeout(function,milliseconds):（一次性定时器）在等待指定毫秒数之后执行函数。</li>");
    let $liS23 = $("<li id='liS-23'>setInterval(function,milliseconds):（周期性定时器）等同于setTimeout()，但是重复执行该函数。</li>");

    $("#list").append($liS0,$liS1,$liS2,$liS3,$liS4,$liS5,$liS6,$liS7,$liS8,$liS9,$liS10,$liS11,$liS12,$liS13,$liS14,$liS15,$liS16,$liS17,$liS18,$liS19,$liS20,$liS21,$liS22,$liS23);
}

function dataT(){
    let $liT0 = $("<li id='liT-0'>返回变量的类型。例如：typeof(5);结果会返回number。</li>");
    let $liT1 = $("<li id='liT-1'>在函数定义中，this引用该函数的拥有者。</li>");
    let $liT2 = $("<li id='liT-2'>.toUpperCase():把字符串转换为大写</li>");
    let $liT3 = $("<li id='liT-3'>.toLowerCase():把字符串转换为小写</li>");
    let $liT4 = $("<li id='liT-4'>.trim():删除字符串两端的空白符。例如：let str=\"     hello     \";document.write(str.trim());会只显示hello而不显示空格。</li>");
    let $liT5 = $("<li id='liT-5'>.toString()：把数输出为其他进制数(在括号内填写需要转换的进制数的阿拉伯数字)。</li>");
    let $liT6 = $("<li id='liT-6'>.toExponential()：返回字符串值，它包含已经被四舍五入并使用指数计数法的数字。</li>");
    let $liT7 = $("<li id='liT-7'>.toFixed()：返回字符串值，它包含了指定位数小数的数字。例如：let y=8.765;y.toFixed(1);结果返回8.8</li>");
    let $liT8 = $("<li id='liT-8'>.toPrecision()：返回字符串值，它包含了指定长度的数字。</li>");
    let $liT9 = $("<li id='liT-9'>.test()：是一个正则表达式方法，通过搜索字符串然后返回true或者false。例如：/e/.test(\"The best things in life are free!\");返回true。</li>");
    
    $("#list").append($liT0,$liT1,$liT2,$liT3,$liT4,$liT5,$liT6,$liT7,$liT8,$liT9);
}

function dataU(){
    let $liU0 = $("<li id='liU-0'>.unshift():向数组添加新元素(在开头),并将旧元素向后移动，同时返回新数组的长度。</li>");
    let $liU1 = $("<li id='liU-1'>navigator.userAgent:返回由浏览器发送到服务器的用户代理报头（user-agent header）。</li>");

    $("#list").append($liU0,$liU1);
}

function dataW(){
    let $liW0 = $("<li id='liW-0'>window.alert()：可以使用警告框来显示数据(如果script标签在head中，会先执行警告框的内容，待用户取消或确认后才会执行body部分的内容，请慎重script标签的位置)（可以省去window前缀）</li>");
    let $liW1 = $("<li id='liW-1'>window.innerHeight:浏览器窗口的内高度（以像素计）</li>");
    let $liW2 = $("<li id='liW-2'>window.innerWidth:浏览器窗口的内宽度（以像素计）</li>");
    let $liW3 = $("<li id='liW-3'>window.open():打开新窗口</li>");
    let $liW4 = $("<li id='liW-4'>window.close():关闭当前窗口</li>");
    let $liW5 = $("<li id='liW-5'>window.moveTo():移动当前窗口</li>");
    let $liW6 = $("<li id='liW-6'>window.resizeTo():重新调整当前窗口</li>");
    let $liW7 = $("<li id='liW-7'>window.location.href:返回当前页面的URL。</li>");
    let $liW8 = $("<li id='liW-8'>window.location.hostname:返回（当前页面的）因特网主机的名称。</li>");
    let $liW9 = $("<li id='liW-9'>window.location.pathname:返回当前页面的路径名。</li>");
    let $liW10 = $("<li id='liW-10'>window.location.protocol:返回页面的web协议。</li>");
    let $liW11 = $("<li id='liW-11'>window.location.port:返回（当前页面的）互联网主机端口的编号。</li>");
    let $liW12 = $("<li id='liW-12'>window.location.assign():加载新文档。</li>");

    $("#list").append($liW0,$liW1,$liW2,$liW3,$liW4,$liW5,$liW6,$liW7,$liW8,$liW9,$liW10,$liW11,$liW12);
}