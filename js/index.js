function addMain(pages, posts, media) {
    document.querySelector("main").innerHTML += `
    <section id="main-container">
        <div class="intro"><div class="wrapper">${pagesFilter(pages, extractPageName).content.rendered}</div></div>
        <div class="info"><div class="wrapper">${postFilter(posts, index)[3].content.rendered}</div></div>
        <div class="kids"><div class="wrapper">${postFilter(posts, index)[2].content.rendered}</div></div>
        <div class="adults">
            <div class="wrapper">
                <div class="teachers">${postFilter(posts, index)[0].content.rendered}</div>
                <div class="researchers">${postFilter(posts, index)[1].content.rendered}</div>
            </div>
        </div>
    </section>`;
}
