function addMain(pages, posts, media) {
    main.innerHTML += `
    <section id="main-container">
        <div class="exhibitions">
            <div>
                <div class="exhibitions-image" style="background-image: url(${mediaFilter(media, postFilter(posts, exhibition)[3]).source_url})">
                    <div class="exhibitions-gradient"></div>
                    <div class="wrapper cosmology">${postFilter(posts, exhibition)[3].content.rendered}</div>
                </div>
            </div>
            <div>
                <div class="exhibitions-image" style="background-image: url(${mediaFilter(media, postFilter(posts, exhibition)[1]).source_url})">
                    <div class="exhibitions-gradient"></div>
                    <div class="wrapper evolution">${postFilter(posts, exhibition)[1].content.rendered}</div>
                </div>
            </div>
            <div>
                <div class="exhibitions-image" style="background-image: url(${mediaFilter(media, postFilter(posts, exhibition)[4]).source_url})">
                    <div class="exhibitions-gradient"></div>
                    <div class="wrapper biology">${postFilter(posts, exhibition)[4].content.rendered}</div>
                </div>
            </div>
            <div>
                <div class="exhibitions-image" style="background-image: url(${mediaFilter(media, postFilter(posts, exhibition)[0]).source_url})">
                    <div class="exhibitions-gradient"></div>
                    <div class="wrapper robotics">${postFilter(posts, exhibition)[0].content.rendered}</div>
                </div>
            </div>
            <div>
                <div class="exhibitions-image" style="background-image: url(${mediaFilter(media, postFilter(posts, exhibition)[2]).source_url})">
                    <div class="exhibitions-gradient"></div>
                    <div class="wrapper ecology">${postFilter(posts, exhibition)[2].content.rendered}</div>
                </div>
            </div>
        </div>
    </section>`;
}
