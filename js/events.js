function addMain(pages, posts, media) {
    document.querySelector("main").innerHTML += `
    <section id="main-container">
        <div class="wrapper events">
            <div>${postFilter(posts, events)[2].content.rendered}</div>
            <div>${postFilter(posts, events)[1].content.rendered}</div>
            <div>${postFilter(posts, events)[0].content.rendered}</div>
        </div>
    </section>`;
}
