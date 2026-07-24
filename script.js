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

    if (screenName === "newbook") {
    document.getElementById("detail-content").innerHTML =
        createNewBookHTML();
} else if (screenName === "backlist") {
    document.getElementById("detail-content").innerHTML =
        createBacklistHTML();
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
