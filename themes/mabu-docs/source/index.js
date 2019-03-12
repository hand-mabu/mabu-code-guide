$(function () {
    let currentIdx = -1; // 当前定位坐标

    const $tocList = $('#post-toc .post-toc-item.post-toc-level-1'), // 目录集合
        $h1List = $('#post-content h1'), // 标题集合
        h1TopList = $h1List.map((idx, h1) => h1.offsetTop).toArray().reverse(); // 标题偏移量集合

    // 根据定位，高亮当前右侧目录
    function contentsPositioning() {
        const top = $(window).scrollTop();
        let nextIdx = h1TopList.length - h1TopList.findIndex(h1Top => top > h1Top) - 1;
        if (nextIdx !== currentIdx) {
            if (nextIdx === -1) {
                $tocList.eq(currentIdx).removeClass('active');
                currentIdx = nextIdx;
            } else {
                $tocList.eq(currentIdx).removeClass('active');
                $tocList.eq(nextIdx).addClass('active');
                currentIdx = nextIdx;
            }
        }
    }

    let timer = null;
    contentsPositioning();
    $(window).scroll(() => {
        clearTimeout(timer);
        scrollHandler = setTimeout(function () {
            contentsPositioning();
        }, 100);
    });
});