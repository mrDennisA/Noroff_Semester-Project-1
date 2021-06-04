function addMain(pages, posts, media) {
    document.querySelector("main").innerHTML += `
    <section id="main-container">
        <div class="wrapper visit">
            <div>${postFilter(posts, visit)[5].content.rendered}</div>
            <div>${postFilter(posts, visit)[4].content.rendered}</div>
            <div>${postFilter(posts, visit)[3].content.rendered}</div>
            <div>${postFilter(posts, visit)[2].content.rendered}</div>
            <div>${postFilter(posts, visit)[1].content.rendered}</div>
            <div>${postFilter(posts, visit)[0].content.rendered}</div>
        </div>
    </section>`;
}
