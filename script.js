const screens = {
    newbook: {
        title: "新刊情報",
        message: "こちらが今回の新刊です！",
        speech: "こいつが今回の新刊だ！　ぜひ見ていってくれ！",
        content: `
            <article class="book-card">

                <button
    class="cover-button"
    type="button"
    onclick="openCover()"
    aria-label="新刊表紙を拡大表示"
>
    <img
        class="book-cover"
        src="newbook-cover.png"
        alt="新刊表紙"
    >
</button>

                <div class="book-info">

                    <h2 class="book-title">
                        作品タイトル
                    </h2>

                    <dl class="book-details">

                        <div>
                            <dt>価格</dt>
                            <dd>未定</dd>
                        </div>

                        <div>
                            <dt>ページ数</dt>
                            <dd>未定</dd>
                        </div>

                        <div>
                            <dt>ジャンル</dt>
                            <dd>未定</dd>
                        </div>

                        <div>
                            <dt>頒布予定</dt>
                            <dd>イベント当日</dd>
                        </div>

                    </dl>

                    <section class="book-summary">
                        <h3>作品紹介</h3>

                        <p>
                            ここに新刊のあらすじや、
                            おすすめポイントを掲載します。
                        </p>
                    </section>

                </div>

            </article>
        `
    },

    backlist: {
        title: "既刊情報",
        message: "これまでに頒布した作品をご紹介します。",
        speech: "前に作った本も、ここから確認できるぞ！",
        content: `
            <h2>既刊作品</h2>
            <p>現在、掲載する作品を準備しています。</p>
        `
    },

    profile: {
        title: "作者紹介",
        message: "作者についてご紹介します！",
        speech: "作者本人にも、気軽に声をかけてみてくれ！",
        content: `
            <h2>プロフィール</h2>
            <p>漫画やイラストを制作しています。</p>
            <p>ぜひ気軽に声をかけてください！</p>
        `
    },

    sns: {
        title: "SNS",
        message: "SNSや通販ページはこちらです。",
        speech: "活動情報を見たいなら、ここを確認してくれ！",
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

    document.getElementById("detail-speech").textContent =
    selectedScreen.speech;
    const character =
    document.getElementById("detail-character");

character.classList.remove("character-reaction");

void character.offsetWidth;

character.classList.add("character-reaction");

    document.getElementById("home-screen")
        .classList.remove("active");

    document.getElementById("detail-screen")
        .classList.add("active");
}

function goHome() {
    function openCover() {
    const modal = document.getElementById("cover-modal");

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
}

function closeCover(event) {
    if (
        event &&
        event.target !== event.currentTarget
    ) {
        return;
    }

    const modal = document.getElementById("cover-modal");

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
}
    document.getElementById("detail-screen")
        .classList.remove("active");

    document.getElementById("home-screen")
        .classList.add("active");
    <button
    class="cover-close-button"
    type="button"
    onclick="
        document
            .getElementById('cover-modal')
            .classList.remove('open')
    "
    aria-label="拡大表示を閉じる"
>
    ×
</button>
}
