function addHeader() {
    document.querySelector("header").innerHTML = `
    <div>
        <div id="header-container">
            <a  id="logo" href="./index.html">
                ${logoIcon}
                <h4>
                    <span class="test">community</span>
                    <span>science</span>
                    <span>museum</span>
                </h4>
            </a>
            <nav>
                <ul>
                    <li></li>
                    <li><a href="./index.html">home</a></li>
                    <li><a href="./exhibitions.html">exhibitions</a></li>
                    <li><a href="./events.html">events</a></li>
                    <li><a href="./visit.html">visit</a></li>
                    <li><a href="./support.html">get involved</a></li>
                </ul>
                ${navIcon}
            </nav>
        </div>
    </div>`;

    const overlay = document.querySelector(".overlay");
    const headerContainer = document.querySelector("#header-container");
    const navIconEvent = document.querySelector("#navIcon");

    navIconEvent.addEventListener("click", () => {
        if (body.style.overflow === "hidden") {
            body.style.overflow = "visible";
        } else {
            body.style.overflow = "hidden";
        }
        overlay.classList.toggle("open");
        headerContainer.classList.toggle("open");
    });
}
