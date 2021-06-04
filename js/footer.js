function addFooter(pages, posts, media) {
    const year = new Date().getFullYear();
    document.querySelector("footer").innerHTML = `
    <section id="footer-container">
        <div class="wrapper">
            <div class="location">
                <p>LOCATION</p>
                ${postFilter(posts, visit)[4].content.rendered}
            </div>
            <div class="houres">
                <p>OPENING TIMES</p>
                ${postFilter(posts, visit)[5].content.rendered}
            </div>
            <div class="copyright">
                <div>
                    <span>© Copyright</span>
                    <span class="year">${year}</span>
                    <a class="author" href="./visit.html">CSM</a>
                </div>
                <span>All Rights Reserved</span>
            </div>
        </div>
    </section>`;
}
