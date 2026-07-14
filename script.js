function changeScreen(title, message, content) {
    document.getElementById("title").textContent = title;
    document.getElementById("message").textContent = message;
    document.getElementById("content").innerHTML = content;
}

function showNewBook() {
    changeScreen(
        "新刊情報",
        "こちらが今回の新刊です！",
        `
            <h2>作品タイトル：準備中</h2>
            <p>価格：未定</p>
            <p>イベント当日に頒布予定です。</p>
            <button class="detail-button">詳しく見る</button>
        `
    );
}

function showBacklist() {
    changeScreen(
        "既刊情報",
        "これまでに頒布した作品をご紹介します。",
        `
            <h2>既刊作品</h2>
            <p>現在、掲載する作品を準備しています。</p>
        `
    );
}

function showProfile() {
    changeScreen(
        "作者紹介",
        "作者についてご紹介します！",
        `
            <h2>プロフィール</h2>
            <p>漫画やイラストを制作しています。</p>
            <p>ぜひ気軽に声をかけてください！</p>
        `
    );
}

function showSNS() {
    changeScreen(
        "SNS",
        "SNSや通販ページはこちらです。",
        `
            <h2>活動ページ</h2>
            <p>X・pixiv・BOOTHなどを掲載する予定です。</p>
            <button class="detail-button">SNSを見る</button>
        `
    );
}
