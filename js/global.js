//Stop Transition
const body = document.querySelector("body");
window.onload = () => {
    body.classList.remove("transition");
};

let resizeTimer;
window.addEventListener("resize", () => {
    body.classList.add("transition");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        body.classList.remove("transition");
    }, 300);
});

// HEAD
let extractPageName = window.location.pathname
    .split("/")
    .pop()
    .replace(/\/?.html/g, "");

function validatePage() {
    const title = document.querySelector("title");
    const description = document.querySelector(".description");
    if (extractPageName === "index" || extractPageName === "") {
        extractPageName = "index";
        title.innerHTML = `Home - Community Science Museum`;
        description.content = "Community Science Museum is a non-profit organization";
    }
    if (extractPageName === "exhibitions") {
        title.innerHTML = `Exhibitions - Community Science Museum`;
        description.content = "Come on down to our museum, and explore more about science";
    }
    if (extractPageName === "events") {
        title.innerHTML = `Special Events and Exhibitions - Community Science Museum`;
        description.content = "Learn about the interactive exhibits at CSM. Science comes to life with tours, experiences, and events for all ages.";
    }
    if (extractPageName === "visit") {
        title.innerHTML = `Visit - Community Science Museum`;
        description.content = "Plan your visit with information on Museum hours, ticket prices, and directions.";
    }
    if (extractPageName === "support") {
        title.innerHTML = `Get Involved - Community Science Museum`;
        description.content = "Community Science Museum is a non-profit organization";
    }
}
validatePage();

body.innerHTML = `
    <div class="overlay"></div>
    <header></header>
    <main></main>
    <footer></footer>`;

// API Data
const urlApi = "https://yunitto.online/noroff/FEU1_portfolio/Semester-Project-1/wp/wp-json/wp/v2/";

async function fetchApi(url) {
    try {
        const pages = await (await fetch(url + `pages?per_page=100`)).json();
        const posts = await (await fetch(url + `posts?per_page=100`)).json();
        const media = await (await fetch(url + `media?per_page=100`)).json();

        // Header / Logo / Nav
        addHeader();

        // Page Banner
        document.querySelector("main").innerHTML = `
        <section id="banner-container">
            <div>
                <div class="banner-image" style="background-image: url(${mediaFilter(media, pagesFilter(pages, extractPageName)).source_url})">
                    <div></div>
                    <div>
                        <h1>${pagesFilter(pages, extractPageName).title.rendered}</h1>
                        <div class="wrapper cta"></div>
                    </div>
                </div>

            </div>
        </section>`;

        if (extractPageName !== "visit") {
            document.querySelector(".cta").innerHTML = `
            <a href="./visit.html"><h3>Plan your visit</h3></a>`;
        }

        // Main
        addMain(pages, posts, media);

        // Footer
        addFooter(pages, posts, media);
    } catch (error) {
        console.log(error);
    }
}

// Categories
const index = 6;
const events = 2;
const exhibition = 3;
const visit = 4;
const getInvolved = 5;

// Filters
function pagesFilter(pages, match) {
    return pages.filter((value) => value.slug === match)[0];
}

function postFilter(posts, match) {
    return posts.filter((value) => value.categories[0] === match);
}

function mediaFilter(media, match) {
    return media.filter((value) => value.id === match.featured_media)[0];
}

fetchApi(urlApi);
