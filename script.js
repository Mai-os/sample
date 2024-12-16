document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("button");

    button.addEventListener("click", function() {
        // ボタンがクリックされると、文字の色をランダムに変更する
        var text = document.getElementById("text");
        
        // 色をランダムで選ぶ関数
        function getRandomColor() {
            var letters = "0123456789ABCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        // 色を変更
        text.style.color = getRandomColor();
    });

    console.log("JavaScriptが動作しています");
});
