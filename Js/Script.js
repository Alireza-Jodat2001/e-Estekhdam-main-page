const header = document.querySelector("header") , loader = document.querySelector(".form > input ~ div") , search_shadow = document.querySelector(".search_shadow")
function log_in_shadow() {
    if (!search_shadow.classList.contains("d-block")) {
        search_shadow.classList.add("d-block")
    }
    else {
        search_shadow.classList.remove("d-block")
    }
}
onclick = (elemetn) => {
    const target = elemetn.target
    if (document.querySelector(".form").contains(target) || document.querySelector(".search_preset").contains(target)) {
        header.classList.add("search_active")
    }
    else if (!document.querySelector(".search_preset").contains(target) || !document.querySelector(".form").contains(target) || !document.querySelector(".log_in_container").contains(target)) {
        header.classList.remove("search_active")
        search_shadow.classList.remove("d-block")
    }
}
function set_shadow() {
    const header_height = header.offsetHeight
    const body_height = document.querySelector("body").offsetHeight
    search_shadow.style.height = `${body_height - header_height}px`
}
onresize = () => set_shadow()
onload = () => set_shadow()
oninput = () => {
    loader.classList.add("loader")
    setTimeout(() => {
        loader.classList.remove("loader")
    }, 800)
}