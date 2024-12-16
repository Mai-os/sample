document.addEventListener("DOMContentLoaded", function() {
    var cls = document.getElementById("button");
    if (cls) {
        cls.addEventListener("click", function() {
            var text = document.getElementById("text");
            if (text) {
                text.style.color = "blue";
            } else {
                console.error("textが見つかりません。");
            }
        });
    } else {
        console.error("buttonが見つかりません。");
    }
});
