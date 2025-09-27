window.addEventListener("load", () => {
    setupNavbar()
    setupFooter()
    setupEventListeners()
})

function setupNavbar() {
    let header = document.querySelector("header")
    header.innerHTML = `<nav>
        <a href="./index.html">Home</a> |
        <a href="./resume.html">Resume</a> |
        <a href="./portfolio.html">Portfolio</a>
    </nav>`
}

function setupFooter() {
    let footer = document.querySelector("footer")
    footer.innerHTML = `<p>Additional Links:</p>
    <ul>
        <li><a href="https://rose-hulman.joinhandshake.com/profiles/5u2guf">Handshake</a></li>
        <li><a href="https://www.linkedin.com/in/kayla-baker-352656331">LinkedIn</a></li>
    </ul>`
}

function setupEventListeners() {
    let dropdowns = document.querySelectorAll(".dropdown")
    for (let dropdown of dropdowns) {
        dropdown.addEventListener("click", (e) => {
            let index = e.target.id.substring(e.target.id.length - 1)
            let description = document.getElementById("description" + index)
            description.classList.toggle("displayDropdown")
        })
    }
}