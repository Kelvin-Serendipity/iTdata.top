//版本号统一修改
document.addEventListener('DOMContentLoaded', function () {
    var updateElements = document.querySelectorAll('.version-update'); // 选择带有类名 'version-update' 的元素
    if (updateElements.length > 0) {
        updateElements.forEach(function (element) {
            element.textContent = '版本号：v1.2.0'; // 修改内容
        });
    }
});
