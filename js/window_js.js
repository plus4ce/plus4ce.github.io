$(document).ready(function() {
    $('#Logo').click(function(event) {
        event.preventDefault(); // 阻止默认的链接跳转行为
        yourFunction(); // 调用你的自定义函数
    });

    function yourFunction() {
        // 在这里编写你想要执行的代码
        console.log('执行了自定义函数');
    }
});