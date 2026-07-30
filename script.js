/* ========================================
   お品書きの価格早見表を作る
======================================== */

function createEventPriceListHTML(items) {
    const priceItems = items
        .map((item) => {
            return `
                <div class="event-price-item">

                    <span class="event-price-title">
                        ${item.title}
                    </span>

                    <span class="event-price-value">
                        ${item.price}
                    </span>

                </div>
            `;
        })
        .join("");

    return `
        <section class="event-price-list">

            <h3 class="event-price-list-title">
                価格早見表
            </h3>

            <div class="event-price-list-items">
                ${priceItems}
            </div>

        </section>
    `;
}


/* ========================================
   お品書きをカテゴリーごとに分ける
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

            const categoryClass =
                getEventMenuCategoryClass(category);

            return `
                <section class="event-menu-group">

                    <h4
                        class="
                            event-menu-group-title
                            ${categoryClass}
                        "
                    >
                        ${category}
                    </h4>

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
    const eventMenuItems = getEventMenuItems();

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

        </section>
    `;
}
