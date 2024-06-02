// 版本号统一修改
document.addEventListener('DOMContentLoaded', function () {
    var updateElements = document.querySelectorAll('.version-update'); // 选择带有类名 'version-update' 的元素
    if (updateElements.length > 0) {
        updateElements.forEach(function (element) {
            element.textContent = '版本号：v1.3.0'; // 修改版本号
        });
    }
});
//END 版本号统一修改

//滚动公告条

    // 在这里定义公告内容
    var announcement = "近期 1.2.4 更新公告：1、新增多个网站自制工具  2、界面简约化  3、英文界面暂停更新 ____________________________ 点击此公告框 或 侧面固定内容条可查看往期所有更新内容";

    // 更新滚动公告的内容
    var marqueeText = document.getElementById('marqueeText');
    marqueeText.textContent = announcement;

//END 滚动公告条

//点击侧边固定内容条<联系站长>选项自动复制内容

document.querySelector('.contact-the-webmaster').addEventListener('click', function(event) {
    event.preventDefault();  // 阻止链接的默认行为
    navigator.clipboard.writeText('738146595').then(function() {
        alert('官方交流群号已复制到剪贴板');
    }).catch(function(error) {
        alert('官方交流群复制失败，请手动复制：QQ:738146595');
    });
});

//END 点击侧边固定内容条<联系站长>选项自动复制内容

//去除页面所有元素的提示框

document.querySelectorAll('[data-original-title]').forEach(function(element) {
    element.removeAttribute('data-original-title');
});

//END 去除页面所有元素的提示框