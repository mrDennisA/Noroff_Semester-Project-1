function addMain(pages, posts, media) {
    document.querySelector("main").innerHTML += `
    <section id="main-container">
        <div class="wrapper get-involved">
            <div class="support">${postFilter(posts, getInvolved)[2].content.rendered}</div>
            <div class="internships">${postFilter(posts, getInvolved)[0].content.rendered}</div>
            <div class="valunteer">${postFilter(posts, getInvolved)[1].content.rendered}</div>
        </div>
    </section>`;
}
