document.addEventListener("DOMContentLoaded", function() {
    // 予約ボタンを取得
    var button = document.getElementById("button");

    // ボタンがクリックされた時の処理
    button.addEventListener("click", function() {
        // bodyの背景色をランダムに変更する
        document.body.style.backgroundColor = getRandomColor();
    });

    // ランダムな色を生成する関数
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    console.log("JavaScriptが動作しています");
});
