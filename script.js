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
   イベントモード・お品書き情報
======================================== */

const eventMenu = {
    title: "イベントお品書き",
    image: "picture/oshinagaki.png",
    imageAlt: "イベントのお品書き",
    introduction:
        "本日頒布している作品をご紹介します。お品書き画像はタップすると拡大できます。",
    sectionTitle: "本日の頒布物"
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

    tools: [
        "CLIP STUDIO PAINT",
        "Photoshop",
        "Blender"
    ],

    favorites: [
        "ハイエナ",
        "筋肉質なキャラクター",
        "ギャグ漫画"
    ],

    specialties: [
        "キャラクターデザイン",
        "漫画の構成",
        "デジタルイラスト"
    ],

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

/* ========================================
   新刊データ
======================================== */

const newBook = {
    title: "作品タイトル",
    price: "未定",
    pages: "未定",
    genre: "未定",
    release: "イベント当日",
    image: "picture/newbook-cover.png",

    badges: [
        "新刊",
        "全年齢"
    ],

    status: "在庫あり",
    showInEventMenu: true,
    recommendation: "初めての方におすすめ",

    special: [
        "描き下ろしペーパー"
    ],

    description:
        "ここに新刊のあらすじや、おすすめポイントを掲載します。"
};

/* ========================================
   既刊データ
======================================== */

const backlistBooks = [
    {
        title: "ドMの品格",
        price: "500円",
        pages: "32P",
        genre: "ギャグ",
        image: "picture/backbook1.png",

        badges: [
            "既刊",
            "全年齢"
        ],

        status: "残りわずか",
        recommendation: "ギャグ好きにおすすめ",
        showInEventMenu: true,

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
        image: "picture/backbook2.png",

        badges: [
            "準備中"
        ],

        status: "完売",
        showInEventMenu: false,
        recommendation: "こちらは準備中です",

        description:
            "こちらは準備中です。"
    },
    {
        title: "準備中",
        price: "未定",
        pages: "未定",
        genre: "未定",
        image: "picture/backbook2.png",

        badges: [
            "準備中"
        ],

        status: "準備中",
        showInEventMenu: false,
        recommendation: "こちらは準備中です",

        description:
            "こちらは準備中です。"
    }
];

/* ========================================
   グッズ・無料配布物データ
======================================== */

const eventExtras = [
    {
        title: "イベント限定ポストカード",
        price: "100円",
        pages: "―",
        genre: "グッズ",
        image: "picture/postcard.png",
        category: "グッズ",

        badges: [
            "イベント限定"
        ],

        status: "在庫あり",
        showInEventMenu: true,
        recommendation: "本と一緒にどうぞ",

        description:
            "イベント限定で頒布するオリジナルポストカードです。"
    },
    {
        title: "無料配布ペーパー",
        price: "無料",
        pages: "1枚",
        genre: "ペーパー",
        image: "picture/free-paper.png",
        category: "無料配布",

        badges: [
            "無料配布"
        ],

        status: "在庫あり",
        showInEventMenu: true,

        description:
            "作品紹介や描き下ろしイラストを掲載した無料ペーパーです。"
    }
];

/* ========================================
   画面データ
======================================== */

const screens = {
    newbook: {
        title: "新刊情報",
        message: "こちらが今回の新刊です！",
        speech: "こいつが今回の新刊だ！ ぜひ見ていってくれ！",
        content: ""
    },
    backlist: {
        title: "既刊情報",
        message: "これまでに頒布した作品をご紹介します。",
        speech: "前に作った本も、ここから確認できるぞ！",
        content: ""
    },
    eventmenu: {
        title: "イベントお品書き",
        message: "本日の頒布物をご紹介します！",
        speech: "今日のお品書きだ！ 気になる本を探してみてくれ！",
        content: ""
    },
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

/* ========================================
   詳細画面を開く
======================================== */

function openScreen(screenName) {
    const selectedScreen = screens[screenName];
    const detailContent =
        document.getElementById("detail-content");

    document.getElementById("detail-title").textContent =
        selectedScreen.title;

    document.getElementById("detail-message").textContent =
        selectedScreen.message;

    if (screenName === "newbook") {
        detailContent.innerHTML = createNewBookHTML();
    } else if (screenName === "backlist") {
        detailContent.innerHTML = createBacklistHTML();
    } else if (screenName === "eventmenu") {
        detailContent.innerHTML = createEventMenuHTML();
    } else if (screenName === "profile") {
        detailContent.innerHTML = createProfileHTML();
    } else if (screenName === "sns") {
        detailContent.innerHTML = createSocialLinksHTML();
    } else {
        detailContent.innerHTML = selectedScreen.content;
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

    scrollDetailPageToTop("auto");
}

/* ========================================
   ホーム画面へ戻る
======================================== */

function goHome() {
    document.getElementById("detail-screen")
        .classList.remove("active");

    document.getElementById("home-screen")
        .classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
}

/* ========================================
   詳細ページの上部へ移動
======================================== */

function scrollDetailPageToTop(behavior = "smooth") {
    const detailPanel =
        document.querySelector("#detail-screen .detail-panel");

    if (detailPanel) {
        detailPanel.scrollTo({
            top: 0,
            behavior
        });
    }

    window.scrollTo({
        top: 0,
        behavior
    });
}

/* ========================================
   お品書きの指定カードへ移動
======================================== */

function scrollToEventItem(itemId) {
    const target =
        document.getElementById(itemId);

    if (!target) {
        return;
    }

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    target.classList.remove("event-menu-item-highlight");
    void target.offsetWidth;
    target.classList.add("event-menu-item-highlight");

    window.setTimeout(() => {
        target.classList.remove("event-menu-item-highlight");
    }, 1200);
}

/* ========================================
   新刊表紙の拡大表示
======================================== */

function openCover() {
    openBookCover(
        newBook.image,
        newBook.title
    );
}

/* ========================================
   指定した画像を拡大表示
======================================== */

function openBookCover(image, title) {
    const modal =
        document.getElementById("cover-modal");

    const modalImage =
        document.querySelector(".cover-modal-image");

    modalImage.src = image;
    modalImage.alt = `${title}の拡大画像`;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
 /* ========================================
   新刊サンプル画像
======================================== */

samples: [
    "picture/newbook-sample1.png",
    "picture/newbook-sample2.png",
    "picture/newbook-sample3.png"
],
/* ========================================
   既刊サンプル画像
======================================== */

samples: [
    "picture/backbook1-sample1.png",
    "picture/backbook1-sample2.png",
    "picture/backbook1-sample3.png"
],
}

/* ========================================
   サンプル画像一覧を作る
======================================== */

function createSampleImagesHTML(samples, title) {
    if (!samples || samples.length === 0) {
        return "";
    }

    const sampleItems = samples
        .map((sample, index) => {
            return `
                <button
                    class="sample-image-button"
                    type="button"
                    onclick="openBookCover(
                        '${sample}',
                        '${title} サンプル${index + 1}'
                    )"
                    aria-label="${title}のサンプル${index + 1}を拡大表示"
                >
                    <img
                        class="sample-image"
                        src="${sample}"
                        alt="${title}のサンプル${index + 1}"
                    >
                </button>
            `;
        })
        .join("");

    return `
        <section class="book-samples">

            <h3>
                サンプルを見る
            </h3>

            <div class="sample-image-list">
                ${sampleItems}
            </div>

        </section>
    `;
}

/* ========================================
   画像の外側を押して閉じる
======================================== */

function closeCover(event) {
    if (
        event &&
        event.target !== event.currentTarget
    ) {
        return;
    }

    forceCloseCover();
}

/* ========================================
   閉じるボタンで画像を閉じる
======================================== */

function forceCloseCover() {
    const modal =
        document.getElementById("cover-modal");

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
}

/* ========================================
   購入特典を表示
======================================== */

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

/* ========================================
   作品バッジを表示
======================================== */

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

/* ========================================
   バッジカラー判定
======================================== */

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

/* ========================================
   新刊ページ生成
======================================== */

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
                    <p>${newBook.description}</p>
                </section>
                ${createSampleImagesHTML(
                newBook.samples,
                newBook.title
                     )}
            </div>
        </article>
    `;
}

/* ========================================
   既刊ページ生成
======================================== */

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

                        ${createSampleImagesHTML(
                            book.samples,
                            book.title
                        )}
                    </div>
                </article>
            `;
        })
        .join("");
}

/* ========================================
   作者紹介ページ生成
======================================== */

function createProfileHTML() {
    const activityItems =
        createListItemsHTML(profileInfo.activities);

    const toolItems =
        createListItemsHTML(profileInfo.tools);

    const favoriteItems =
        createListItemsHTML(profileInfo.favorites);

    const specialtyItems =
        createListItemsHTML(profileInfo.specialties);

    const achievementItems =
        createListItemsHTML(profileInfo.achievements);

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
                <div>
                    <dt>使用ソフト</dt>
                    <dd>
                        <ul class="profile-activities">
                            ${toolItems}
                        </ul>
                    </dd>
                </div>
                <div>
                    <dt>好きなもの</dt>
                    <dd>
                        <ul class="profile-tags profile-favorite-tags">
                            ${favoriteItems}
                        </ul>
                    </dd>
                </div>
                <div>
                    <dt>得意分野</dt>
                    <dd>
                        <ul class="profile-tags profile-specialty-tags">
                            ${specialtyItems}
                        </ul>
                    </dd>
                </div>
            </dl>

            <section class="profile-section">
                <h3>活動歴・実績</h3>
                <ul class="profile-achievements">
                    ${achievementItems}
                </ul>
            </section>

            <section class="profile-section">
                <h3>作風・ジャンル</h3>
                <p>${profileInfo.favoriteGenre}</p>
            </section>

            <section class="profile-message">
                <h3>ひとこと</h3>
                <p>${profileInfo.message}</p>
            </section>
        </section>
    `;
}

/* ========================================
   配列からli要素を作る
======================================== */

function createListItemsHTML(items) {
    return items
        .map((item) => {
            return `<li>${item}</li>`;
        })
        .join("");
}

/* ========================================
   SNSページ生成
======================================== */

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
   お品書き用の頒布物データを作る
======================================== */

function getEventMenuItems() {
    const allItems = [
        {
            ...newBook,
            category: "新刊"
        },
        ...backlistBooks.map((book) => {
            return {
                ...book,
                category: "既刊"
            };
        }),
        ...eventExtras
    ];

    return allItems
        .filter((item) => {
            return item.showInEventMenu !== false;
        })
        .map((item, index) => {
            return {
                ...item,
                eventItemId: `event-menu-item-${index + 1}`
            };
        });
}

/* ========================================
   在庫状況を表示する
======================================== */

function createStockStatusHTML(status) {
    if (!status) {
        return "";
    }

    let statusClass = "";

    if (status === "在庫あり") {
        statusClass = "stock-available";
    } else if (status === "残りわずか") {
        statusClass = "stock-low";
    } else if (status === "完売") {
        statusClass = "stock-sold-out";
    } else if (status === "準備中") {
        statusClass = "stock-coming-soon";
    }

    return `
        <p class="stock-status ${statusClass}">
            ${status}
        </p>
    `;
}

/* ========================================
   おすすめ情報を表示する
======================================== */

function createRecommendationHTML(recommendation) {
    if (!recommendation) {
        return "";
    }

    return `
        <p class="event-recommendation">
            ${recommendation}
        </p>
    `;
}

/* ========================================
   お品書きカテゴリーのクラスを作る
======================================== */

function getEventMenuCategoryClass(category) {
    if (category === "新刊") {
        return "event-category-new";
    }

    if (category === "既刊") {
        return "event-category-backlist";
    }

    if (category === "グッズ") {
        return "event-category-goods";
    }

    if (category === "無料配布") {
        return "event-category-free";
    }

    return "";
}

/* ========================================
   お品書きカードの状態クラスを作る
======================================== */

function getEventMenuItemClass(status) {
    if (status === "完売") {
        return "event-menu-item-sold-out";
    }

    if (status === "残りわずか") {
        return "event-menu-item-low-stock";
    }

    return "";
}

/* ========================================
   お品書き用のバッジを作る
======================================== */

function createEventMenuBadgeHTML(badges) {
    if (!badges || badges.length === 0) {
        return "";
    }

    const eventMenuBadges = badges.filter((badge) => {
        return badge !== "新刊" && badge !== "既刊";
    });

    return createBadgeHTML(eventMenuBadges);
}

/* ========================================
   お品書きカードを作る
======================================== */

function createEventMenuItemHTML(item) {
    const itemStatusClass =
        getEventMenuItemClass(item.status);

    const categoryClass =
        getEventMenuCategoryClass(item.category);

    const soldOutLabel = item.status === "完売"
        ? `
            <p class="event-menu-sold-out-label">
                完売
            </p>
        `
        : "";

    return `
        <article
            id="${item.eventItemId}"
            class="event-menu-item ${itemStatusClass} ${categoryClass}"
        >
            <button
                class="backlist-cover-button"
                type="button"
                onclick="openBookCover('${item.image}', '${item.title}')"
                aria-label="${item.title}の表紙を拡大表示"
            >
                <img
                    class="event-menu-item-image"
                    src="${item.image}"
                    alt="${item.title}の表紙"
                >
            </button>

            ${soldOutLabel}

            <div class="event-menu-item-info">
                <p class="event-menu-item-category ${categoryClass}">
                    ${item.category}
                </p>

                ${createEventMenuBadgeHTML(item.badges)}
                ${createStockStatusHTML(item.status)}
                ${createRecommendationHTML(item.recommendation)}

                <h3 class="event-menu-item-title">
                    ${item.title}
                </h3>

                <dl class="event-menu-item-details">
                    <div>
                        <dt>価格</dt>
                        <dd>${item.price}</dd>
                    </div>
                    <div>
                        <dt>ページ数</dt>
                        <dd>${item.pages}</dd>
                    </div>
                    <div>
                        <dt>ジャンル</dt>
                        <dd>${item.genre}</dd>
                    </div>
                </dl>

                ${createSpecialHTML(item.special)}

                <p class="event-menu-item-description">
                    ${item.description}
                </p>
            </div>
        </article>
    `;
}

/* ========================================
   価格早見表の在庫状況を表示する
======================================== */

function createPriceStatusHTML(status) {
    if (!status) {
        return "";
    }

    let statusClass = "";

    if (status === "在庫あり") {
        statusClass = "price-status-available";
    } else if (status === "残りわずか") {
        statusClass = "price-status-low";
    } else if (status === "完売") {
        statusClass = "price-status-sold-out";
    }

    return `
        <span class="event-price-status ${statusClass}">
            ${status}
        </span>
    `;
}

/* ========================================
   価格早見表のカテゴリーを表示する
======================================== */

function createPriceCategoryHTML(category) {
    if (!category) {
        return "";
    }

    const categoryClass =
        getEventMenuCategoryClass(category);

    return `
        <span class="event-price-category ${categoryClass}">
            ${category}
        </span>
    `;
}

/* ========================================
   お品書きの価格早見表を作る
======================================== */

function createEventPriceListHTML(items) {
    const priceItems = items
        .map((item) => {
            return `
                <a
                    class="event-price-item"
                    href="#${item.eventItemId}"
                    onclick="scrollToEventItem('${item.eventItemId}'); return false;"
                    aria-label="${item.title}の詳細へ移動"
                >
                    <div class="event-price-name-area">
                        ${createPriceCategoryHTML(item.category)}

                        <span class="event-price-title">
                            ${item.title}
                        </span>

                        ${createPriceStatusHTML(item.status)}
                    </div>

                    <span class="event-price-value">
                        ${item.price}
                    </span>

                    <span
                        class="event-price-jump"
                        aria-hidden="true"
                    >
                        ↓
                    </span>
                </a>
            `;
        })
        .join("");

    return `
        <section class="event-price-list">
            <h3 class="event-price-list-title">
                価格早見表
            </h3>

            <p class="event-price-list-help">
                項目をタップすると、作品の詳細へ移動します。
            </p>

            <div class="event-price-list-items">
                ${priceItems}
            </div>
        </section>
    `;
}

/* ========================================
   お品書きをカテゴリーごとに並べる
======================================== */

function createEventMenuGroupsHTML(items) {
    const categories = [
        "新刊",
        "既刊",
        "グッズ",
        "無料配布"
    ];

    return categories
        .map((category) => {
            const categoryItems = items.filter((item) => {
                return item.category === category;
            });

            if (categoryItems.length === 0) {
                return "";
            }

            const itemCards = categoryItems
                .map((item) => {
                    return createEventMenuItemHTML(item);
                })
                .join("");

            return `
                <section class="event-menu-group">
                    <div class="event-menu-items-list">
                        ${itemCards}
                    </div>
                </section>
            `;
        })
        .join("");
}

/* ========================================
   お品書きページ生成
======================================== */

function createEventMenuHTML() {
    const eventMenuItems =
        getEventMenuItems();

    const eventPriceList =
        createEventPriceListHTML(eventMenuItems);

    const eventMenuGroups =
        createEventMenuGroupsHTML(eventMenuItems);

    return `
        <section class="event-menu-card">
            <p class="event-menu-label">
                イベントモード
            </p>

            <h2 class="event-menu-title">
                ${eventMenu.title}
            </h2>

            <p class="event-menu-introduction">
                ${eventMenu.introduction}
            </p>

            <button
                class="event-menu-image-button"
                type="button"
                onclick="openBookCover('${eventMenu.image}', '${eventMenu.title}')"
                aria-label="お品書き画像を拡大表示"
            >
                <img
                    class="event-menu-image"
                    src="${eventMenu.image}"
                    alt="${eventMenu.imageAlt}"
                >
            </button>

            <p class="event-menu-help">
                画像をタップすると拡大できます
            </p>

            ${eventPriceList}

            <section class="event-menu-items-section">
                <h3 class="event-menu-items-title">
                    ${eventMenu.sectionTitle}
                </h3>

                <div class="event-menu-groups">
                    ${eventMenuGroups}
                </div>
            </section>

            <button
                class="event-menu-top-button"
                type="button"
                onclick="scrollDetailPageToTop()"
            >
                ↑ ページ上部へ戻る
            </button>
        </section>
    `;
}

/* ========================================
   初期表示
======================================== */

renderCircleInfo();
