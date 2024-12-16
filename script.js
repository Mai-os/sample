document.addEventListener("DOMContentLoaded", function() {
    var cls = document.getElementById("button");
    cls.addEventListener("click", () => {
        var text = document.getElementById("text");
        text.style.color = "blue";  // クリック時に文字色を青に変更
    });

    console.log(cls);  // 正しくbutton要素が取得できているか確認
});
