const screens = {
    newbook: {
    title: "新刊情報",
    message: "こちらが今回の新刊です！",
    content: `
        <article class="book-card">

            <div class="book-cover-placeholder">
                表紙画像
            </div>
            <div class="book-info">
                <h2>作品タイトル：準備中</h2>
                <p class="book-price">
                    価格：未定
                </p>
                <p>
                    イベント当日に頒布予定です。
                </p>
                <p>
                    詳しい内容は、今後こちらへ追加します。
                </p>
            </div>
        </article>
    `
},

    backlist: {
        title: "既刊情報",
        message: "これまでに頒布した作品をご紹介します。",
        content: `
            <h2>既刊作品</h2>
            <p>現在、掲載する作品を準備しています。</p>
        `
    },

    profile: {
        title: "作者紹介",
        message: "作者についてご紹介します！",
        content: `
            <h2>プロフィール</h2>
            <p>漫画やイラストを制作しています。</p>
            <p>ぜひ気軽に声をかけてください！</p>
        `
    },

    sns: {
        title: "SNS",
        message: "SNSや通販ページはこちらです。",
        content: `
            <h2>活動ページ</h2>
            <p>X・pixiv・BOOTHなどを掲載する予定です。</p>
        `
    }
};

function openScreen(screenName) {
    const selectedScreen = screens[screenName];

    document.getElementById("detail-title").textContent =
        selectedScreen.title;

    document.getElementById("detail-message").textContent =
        selectedScreen.message;

    document.getElementById("detail-content").innerHTML =
        selectedScreen.content;

    document.getElementById("home-screen")
        .classList.remove("active");

    document.getElementById("detail-screen")
        .classList.add("active");
}

function goHome() {
    document.getElementById("detail-screen")
        .classList.remove("active");

    document.getElementById("home-screen")
        .classList.add("active");
}
