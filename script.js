function changeMessage(title, message) {
    document.getElementById("title").textContent = title;
    document.getElementById("message").textContent = message;
}

function showNewBook() {
    changeMessage(
        "新刊情報",
        "こちらが今回の新刊です！"
    );
}

function showBacklist() {
    changeMessage(
        "既刊情報",
        "これまでに頒布した作品をご紹介します。"
    );
}

function showProfile() {
    changeMessage(
        "作者紹介",
        "漫画やイラストを制作しています。よろしくお願いします！"
    );
}

function showSNS() {
    changeMessage(
        "SNS",
        "SNSや通販ページはこちらからご覧いただけます。"
    );
}
