// 新增按钮
function add() {
    // 打开新增框架
    document.getElementById('addBlock').style.display = 'block';
    document.getElementById('totalBackground').style.display = 'block';
}

// console.log("==========")
// console.log(dbData)
// console.log(document.getElementById('stuId1').value)

// 提交按钮
function sumbit() {

    // 关闭新增框架
    document.getElementById('addBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';

    // 写入表单
    // 获取表
    var iTable = document.getElementById('myTable');

    // 获取输入值
    // var stuId = (document.getElementById('stuId1').value === null) ? data.studyNo : document.getElementById('stuId1').value === null;
    // var name = (document.getElementById('name1').value === null) ? data.name : document.getElementById('name1').value;
    // var colg = (document.getElementById('colg1').value === null) ? data.college : document.getElementById('colg1').value;
    // var profession = (document.getElementById('profession1').value === null) ? data.major : document.getElementById('profession1').value;
    var stuId = document.getElementById('stuId1').value
    var name = document.getElementById('name1').value
    var colg = document.getElementById('colg1').value
    var profession = document.getElementById('profession1').value
    var grade = document.getElementById('grade1').value;
    var stuClass = document.getElementById('stuClass1').value;
    var age = document.getElementById('age1').value;
    var nums = iTable.rows.length;
    console.log("========== rows: ", iTable.rows.length)

    // 创建一行tr
    var iTr = document.createElement('tr');
    // console.log("========== xxxxxxx: ", iTr)

    // 隔行换色
    if (nums % 2 != 0)
    {
        iTr.className = 'mainTbodyTr1';
    }
    else {
        iTr.className = 'mainTbodyTr2';
    }

    // 将tr添加到table中
    iTable.appendChild(iTr);

    // 创建选择按钮
    var sel = document.createElement('input');
    sel.setAttribute('type','checkbox');
    sel.setAttribute('name','item');

    // 创建单元格td，并添加属性、内容
    var iTd1 = document.createElement('td');
    iTd1.className = "col1";
    iTd1.appendChild(sel);
    var iTd2 = document.createElement('td');
    iTd2.className = "col2";
    iTd2.appendChild(document.createTextNode(nums));
    var iTd3 = document.createElement('td');
    iTd3.className = "col3";
    iTd3.appendChild(document.createTextNode(stuId));
    var iTd4 = document.createElement('td');
    iTd4.className = "col4";
    iTd4.appendChild(document.createTextNode(name));
    var iTd5 = document.createElement('td');
    iTd5.className = "col5";
    iTd5.appendChild(document.createTextNode(colg));
    var iTd6 = document.createElement('td');
    iTd6.className = "col6";
    iTd6.appendChild(document.createTextNode(profession));
    var iTd7 = document.createElement('td');
    iTd7.className = "col7";
    iTd7.appendChild(document.createTextNode(grade));
    var iTd8 = document.createElement('td');
    iTd8.className = "col8";
    iTd8.appendChild(document.createTextNode(stuClass));
    var iTd9 = document.createElement('td');
    iTd9.className = "col9";
    iTd9.appendChild(document.createTextNode(age));
    var iTd10 = document.createElement('td');
    iTd10.className = "col10";
    var examine = document.createElement('input');
    examine.id = 'examine';
    examine.setAttribute('type','button');
    examine.setAttribute('value','查看');
    examine.setAttribute('onclick','examine(this)');
    var update = document.createElement('input');
    update.id = 'update';
    update.setAttribute('type','button');
    update.setAttribute('value','修改');
    update.setAttribute('onclick','update(this)');
    iTd10.appendChild(examine);
    iTd10.appendChild(update);

    // 将单元格添加到行
    iTr.appendChild(iTd1);
    iTr.appendChild(iTd2);
    iTr.appendChild(iTd3);
    iTr.appendChild(iTd4);
    iTr.appendChild(iTd5);
    iTr.appendChild(iTd6);
    iTr.appendChild(iTd7);
    iTr.appendChild(iTd8);
    iTr.appendChild(iTd9);
    iTr.appendChild(iTd10);

    // 将新增框架中的输入框值初始化
    document.getElementById('stuId1').value = null;
    document.getElementById('name1').value = null;
    document.getElementById('colg1').value = null;
    document.getElementById('profession1').value = null;
    document.getElementById('grade1').value = null;
    document.getElementById('stuClass1').value = null;
    document.getElementById('age1').value = null;

    document.getElementById('nums').innerText = nums;

    var pageNum = document.getElementById('pageNum').innerText;
    pageNum = parseInt(pageNum);
    for (var i=10*pageNum+1; i<=nums; i++) {
        iTable.rows[i].style.display = 'none';
    }
}

// 新增中的取消按钮
function addCancel() {
    // 关闭新增框架
    document.getElementById('addBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';
}
