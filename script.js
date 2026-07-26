/* ========================================
   サークル情報
======================================== */

const circleInfo = {
    name: "銀河の荒くれモン",
    event: "イベント名",
    date: "開催日未定",
    venue: "会場未定",
    space: "スペース未定",
    message: "遊びに来てください！"
};
/* ========================================
   作者情報
======================================== */

const profileInfo = {
    name: "木狼",
    circle: "銀河の荒くれモン",

    activities: [
        "漫画制作",
        "イラスト制作",
        "同人誌制作"
    ],
/* ========================================
   作者の活動歴・実績
======================================== */

achievements: [
    "同人誌即売会への参加",
    "漫画・イラスト作品の制作",
    "キャラクターデザインの制作"
],
    favoriteGenre:
        "ギャグ漫画や、個性的なキャラクターを中心に制作しています。",

    message:
        "作品についての感想や質問など、気軽に声をかけてください！"
};
/* ========================================
   SNSデータ
======================================== */
const socialLinks = [
    {
        name: "X",
        url: "https://x.com/mokurou8810",
        description: "最新情報はこちら"
    },

    {
        name: "pixiv",
        url: "https://www.pixiv.net/users/1186894",
        description: "イラストや漫画を掲載"
    },

    {
        name: "BOOTH",
        url: "https://mokurou.booth.pm/",
        description: "通販ページはこちら"
    }
];
/* ==========================
   既刊データ
========================== */

const backlistBooks = [

    {
    title: "ドMの品格",
    price: "500円",
    pages: "32P",
    genre: "ギャグ",
    image: "backbook1.png",
    badges: [
    "既刊",
    "全年齢"
],

    special: [
        "描き下ろしペーパー",
        "イベント限定ポストカード"
    ],

    description:
        "レスラー達の日常を描いたギャグ漫画です。"
},

    {
        title: "準備中",
        price: "未定",
        pages: "未定",
        genre: "未定",
        image: "backbook2.png",
　　　　　badges: [
         "準備中"
],
        description:
            "こちらは準備中です。"
    },

    {
        title: "準備中",
        price: "未定",
        pages: "未定",
        genre: "未定",
        image: "backbook3.png",

        description:
            "こちらは準備中です。"
    }

];

const newBook = {
    title: "作品タイトル",
    price: "未定",
    pages: "未定",
    genre: "未定",
    release: "イベント当日",
    image: "newbook-cover.png",
 　　badges: [
    "新刊",
    "全年齢"
],
    special: [
        "描き下ろしペーパー"
    ],

    description:
        "ここに新刊のあらすじや、おすすめポイントを掲載します。"
};
const screens = {
    newbook: {
    title: "新刊情報",
    message: "こちらが今回の新刊です！",
    speech: "こいつが今回の新刊だ！　ぜひ見ていってくれ！",
    content: ""
},

    backlist: {
    title: "既刊情報",
    message: "これまでに頒布した作品をご紹介します。",
    speech: "前に作った本も、ここから確認できるぞ！",
    content: ""
},

    /* ========================================
   作者紹介画面
   ======================================== */

profile: {
    title: "作者紹介",
    message: "作者についてご紹介します！",
    speech: "作者本人にも、気軽に声をかけてみてくれ！",
    content: ""
},

    sns: {
    title: "SNS",
    message: "SNSや通販ページはこちらです。",
    speech: "活動情報を見たいなら、ここを確認してくれ！",
    content: ""
}
};

function openScreen(screenName) {
    const selectedScreen = screens[screenName];

    document.getElementById("detail-title").textContent =
        selectedScreen.title;

    document.getElementById("detail-message").textContent =
        selectedScreen.message;

    /* ========================================
   詳細画面に表示する内容を選ぶ
   ======================================== */

if (screenName === "newbook") {
    document.getElementById("detail-content").innerHTML =
        createNewBookHTML();

} else if (screenName === "backlist") {
    document.getElementById("detail-content").innerHTML =
        createBacklistHTML();

} else if (screenName === "profile") {
    document.getElementById("detail-content").innerHTML =
        createProfileHTML();

} else if (screenName === "sns") {
    document.getElementById("detail-content").innerHTML =
        createSocialLinksHTML();

} else {
    document.getElementById("detail-content").innerHTML =
        selectedScreen.content;
}

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
    document.getElementById("detail-screen")
        .classList.remove("active");

    document.getElementById("home-screen")
        .classList.add("active");
}

function openCover() {
    const modal =
        document.getElementById("cover-modal");

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

    const modal =
        document.getElementById("cover-modal");

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
}

function forceCloseCover() {
    const modal =
        document.getElementById("cover-modal");

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
}
function createNewBookHTML() {
    return `
        <article class="book-card">

            <button
                class="cover-button"
                type="button"
                onclick="openCover()"
                aria-label="${newBook.title}の表紙を拡大表示"
            >
                <img
                    class="book-cover"
                    src="${newBook.image}"
                    alt="${newBook.title}の表紙"
                >
            </button>

            <div class="book-info">
　　　　　　　　　　${createBadgeHTML(newBook.badges)}
                <h2 class="book-title">
                    ${newBook.title}
                </h2>

                <dl class="book-details">

                    <div>
                        <dt>価格</dt>
                        <dd>${newBook.price}</dd>
                    </div>

                    <div>
                        <dt>ページ数</dt>
                        <dd>${newBook.pages}</dd>
                    </div>

                    <div>
                        <dt>ジャンル</dt>
                        <dd>${newBook.genre}</dd>
                    </div>

                    <div>
                        <dt>頒布予定</dt>
                        <dd>${newBook.release}</dd>
                    </div>

                </dl>

                ${createSpecialHTML(newBook.special)}

                <section class="book-summary">
                    <h3>作品紹介</h3>

                    <p>
                        ${newBook.description}
                    </p>
                </section>

            </div>

        </article>
    `;
}
/* ========================================
   作者紹介ページ生成
======================================== */

function createProfileHTML() {
    const activityItems = profileInfo.activities
        .map((activity) => {
            return `<li>${activity}</li>`;
        })
        .join("");
/* ========================================
   活動歴・実績の一覧を作る
======================================== */

const achievementItems = profileInfo.achievements
    .map((achievement) => {
        return `<li>${achievement}</li>`;
    })
    .join("");
    return `
        <section class="profile-card">

            <p class="profile-label">
                作者プロフィール
            </p>

            <h2 class="profile-name">
                ${profileInfo.name}
            </h2>

            <dl class="profile-details">
                <div>
                    <dt>サークル名</dt>
                    <dd>${profileInfo.circle}</dd>
                </div>

                <div>
                    <dt>主な活動</dt>
                    <dd>
                        <ul class="profile-activities">
                            ${activityItems}
                        </ul>
                    </dd>
                </div>
            </dl>
/* ========================================
   活動歴・実績の表示
======================================== */

<section class="profile-section">
    <h3>活動歴・実績</h3>

    <ul class="profile-achievements">
        ${achievementItems}
    </ul>
</section>
            <section class="profile-section">
                <h3>作風・ジャンル</h3>

                <p>
                    ${profileInfo.favoriteGenre}
                </p>
            </section>

            <section class="profile-message">
                <h3>ひとこと</h3>

                <p>
                    ${profileInfo.message}
                </p>
            </section>

        </section>
    `;
}
function createBacklistHTML() {
    return backlistBooks
        .map((book) => {
            return `
                <article class="backlist-card">

                    <button
                        class="backlist-cover-button"
                        type="button"
                        onclick="openBookCover('${book.image}', '${book.title}')"
                        aria-label="${book.title}の表紙を拡大表示"
                    >
                        <img
                            class="backlist-cover"
                            src="${book.image}"
                            alt="${book.title}の表紙"
                        >
                    </button>

                    <div class="backlist-info">
　　　　　　　　　　　　　　　　${createBadgeHTML(book.badges)}
                        <h2>${book.title}</h2>

                        <dl>
                            <div>
                                <dt>価格</dt>
                                <dd>${book.price}</dd>
                            </div>

                            <div>
                                <dt>ページ数</dt>
                                <dd>${book.pages}</dd>
                            </div>

                            <div>
                                <dt>ジャンル</dt>
                                <dd>${book.genre}</dd>
                            </div>
                        </dl>

                        ${createSpecialHTML(book.special)}

                        <p>
                        ${book.description}
                        </p>

                    </div>

                </article>
            `;
        })
        .join("");
}
function openBookCover(image, title) {
    const modal =
        document.getElementById("cover-modal");

    const modalImage =
        document.querySelector(".cover-modal-image");

    modalImage.src = image;
    modalImage.alt = `${title}の拡大画像`;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
}
function createSpecialHTML(specialItems) {
    if (!specialItems || specialItems.length === 0) {
        return "";
    }

    const listItems = specialItems
        .map((item) => {
            return `<li>${item}</li>`;
        })
        .join("");

    return `
        <section class="book-special">
            <h3>購入特典</h3>

            <ul>
                ${listItems}
            </ul>
        </section>
    `;
}
function createBadgeHTML(badges) {
    if (!badges || badges.length === 0) {
        return "";
    }

    const badgeItems = badges
        .map((badge) => {
            const badgeClass = getBadgeClass(badge);

            return `
                <span class="book-badge ${badgeClass}">
                    ${badge}
                </span>
            `;
        })
        .join("");

    return `
        <div class="book-badges">
            ${badgeItems}
        </div>
    `;
}
function getBadgeClass(badge) {
    if (badge === "新刊") {
        return "badge-new";
    }

    if (badge === "既刊") {
        return "badge-backlist";
    }

    if (badge === "全年齢") {
        return "badge-all-ages";
    }

    if (badge === "準備中") {
        return "badge-coming-soon";
    }

    if (badge === "R18") {
        return "badge-r18";
    }

    return "";
}
function createSocialLinksHTML() {
    const linkItems = socialLinks
        .map((link) => {
            return `
                <a
                    class="social-link"
                    href="${link.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span class="social-link-name">
                        ${link.name}
                    </span>

                    <span class="social-link-description">
                        ${link.description}
                    </span>

                    <span class="social-link-arrow">
                        →
                    </span>
                </a>
            `;
        })
        .join("");

    return `
        <section class="social-links">
            <h2>活動ページ</h2>

            <p class="social-links-intro">
                各サービスのページを開きます。
            </p>

            <div class="social-link-list">
                ${linkItems}
            </div>
        </section>
    `;
}
/* ========================================
   サークル情報の表示
======================================== */

function renderCircleInfo() {
    const circleInfoArea =
        document.getElementById("circle-info");

    if (!circleInfoArea) {
        return;
    }

    circleInfoArea.innerHTML = `
        <p class="circle-info-label">
            サークル情報
        </p>

        <h2 class="circle-info-name">
            ${circleInfo.name}
        </h2>

<dl class="circle-info-details">
    <div>
        <dt>参加イベント</dt>
        <dd>${circleInfo.event}</dd>
    </div>

    <div>
        <dt>開催日</dt>
        <dd>${circleInfo.date}</dd>
    </div>

    <div>
        <dt>会場</dt>
        <dd>${circleInfo.venue}</dd>
    </div>

    <div>
        <dt>スペース</dt>
        <dd class="circle-info-space">
            ${circleInfo.space}
        </dd>
    </div>
</dl>

        <p class="circle-info-message">
            ${circleInfo.message}
        </p>
    `;
}
/* ========================================
   初期表示
======================================== */

renderCircleInfo();
