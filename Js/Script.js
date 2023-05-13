const header = document.querySelector("header") , search_shadow = document.querySelector(".search_shadow")
function set_shadow() {
    const header_height = header.offsetHeight
    search_shadow.style.height = `${document.querySelector("body").offsetHeight - header_height}px`
    search_shadow.style.top = `${header_height}px`
}
function search_disable() {
    header.classList.remove("search_active")
    shadow_disable()
}
function shadow_disable() {
    search_shadow.classList.add("d-none")
}
function log_in_onclick() {
    const log_in_if = (!document.querySelector(".dropdown-menu").classList.contains("show")) ? search_shadow.classList.remove("d-none") : shadow_disable()
}
onclick = (event) => {
    const target = event.target
    const search_if = (document.querySelector("form").contains(target)) ? header.classList.add("search_active") : search_disable()
}
onresize = () => set_shadow(); set_gap_slideshow()
onload = () => set_shadow(); set_gap_slideshow()
oninput = () => {
    const loader = document.querySelector(".form > input ~ div")
    loader.classList.add("loader")
    setTimeout(() => {
        loader.classList.remove("loader")
    }, 800)
}
function li_mouseover() {
    const liElements = document.querySelectorAll('#my-nav > ul > li')
    for (let i = 0; i < liElements.length; i++) {
        search_disable()
        document.querySelector("#log_in ~ .dropdown-menu").classList.remove("show")
        document.querySelector("form > input").setAttribute("disabled" , "")
        document.querySelector("form > input").disabled = ""
    }
}
const slide_show = document.querySelector(".slide_show") , address = [] , img_a = []
for (let i = 0; i < 27; i++) {
    address[i] = `../Img/Carousel/${i}.png`
    address.sort(() => Math.random() - 0.5)
    if (i == 26) {
        for (let j = 0; j < 20; j++) {     
            const slideshow_items = `<a href="" class="img_link bg-white d-flex justify-content-center align-items-center border_radius_lg"><img src="${address[j]}" class="img_slide"></a>`
            img_a[j] = slideshow_items
            slide_show.insertAdjacentHTML("beforeend" , slideshow_items)
        }
    }
}
var scroll = 0 , width = 0 , gap = 70
for (let i = 0; i < 7; i++)
    slide_show.insertAdjacentHTML("beforeend" , img_a[i])
var interval = setInterval(slideshow_func , 6000)
const link_element = document.querySelectorAll(".slide_show > a")
function slideshow_func() {
    scroll++
    if (scroll == 21) {
        clearInterval(interval)
        scroll = 1
        for (let i = 0; i < 27; i++) {
            link_element[i].classList.add("a_active")
            document.querySelectorAll(".a_active")[i].style.setProperty("--var-transform" , -width)
        }
        setTimeout(() => {
            for (let i = 0; i < 27; i++)
                link_element[i].classList.remove("a_active")
        }, 0)
        width = 0
        interval = setInterval(slideshow_func , 6000)
    }
    width += document.querySelector(".slide_show > a").offsetWidth + set_gap_slideshow()
    for (let i = 0; i < 27; i++) {
        link_element[i].style.transform = `translate(${width}px , 0px)`
        link_element[i].style.transition = `0.3s`
    }
}
function set_gap_slideshow() {
    if (window.innerWidth >= 1200)
        return gap = 70
    else if (window.innerWidth > 991 && window.innerWidth < 1200)
        return gap = 44
    else if (window.innerWidth > 768 && window.innerWidth < 992)
        return gap = 28
    else if (window.innerWidth < 769)
        return gap = document.querySelector(".slide_show").offsetWidth * 0.08
    else if (window.innerWidth < 519)
        return gap = document.querySelector(".slide_show").offsetWidth * 0.01
}
















