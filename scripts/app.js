const navToggle = document.querySelector(".nav__toggle-icon")
const homeTitle = document.getElementById("home-title")
const menu = document.querySelector('.menu')
const cover = document.querySelector('.cover')
const resumeListItems = document.querySelectorAll(".resume-list__item")
const portfolioListItems = document.querySelectorAll('.portfolio-list__item')
const menuItems = document.querySelectorAll(".menu__item")
const sections = document.querySelectorAll("main > section")
const changeThemeBtn = document.querySelector(".change-theme")
const footerTitle = document.querySelector(".footer__copy-right")
const date = document.querySelector(".date")
const swiperImage = document.querySelectorAll(".swiper-img")
const observer = new IntersectionObserver(observerHandler, { threshold: .5 })
const darkThemeIcon = `<svg viewBox="0 0 24 24"><path d="M12.3,4.9c0.4-0.2,0.6-0.7,0.5-1.1S12.2,3,11.7,3C6.8,3.1,3,7.1,3,12c0,5,4,9,9,9c3.8,0,7.1-2.4,8.4-5.9c0.2-0.4,0-0.9-0.4-1.2c-0.4-0.3-0.9-0.2-1.2,0.1c-1,0.9-2.3,1.4-3.7,1.4c-3.1,0-5.7-2.5-5.7-5.7C9.4,7.8,10.5,5.9,12.3,4.9zM15.1,17.4c0.5,0,1,0,1.4-0.1C15.3,18.4,13.7,19,12,19c-3.9,0-7-3.1-7-7c0-2.5,1.4-4.8,3.5-6c-0.7,1.1-1,2.4-1,3.8C7.4,14,10.9,17.4,15.1,17.4z"/></svg>`;
const lightThemeIcon = `<svg viewBox="0 0 24 24"><path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5S7 9.2 7 12zM12 9c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S10.3 9 12 9zM13 5V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1S13 5.6 13 5zM19.1 4.9c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4C19.5 6 19.5 5.3 19.1 4.9zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1S21.6 11 21 11zM17.7 16.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L17.7 16.2zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1S11 18.4 11 19zM4.9 19.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4C4.5 18 4.5 18.7 4.9 19.1zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3C2.4 11 2 11.4 2 12zM6.3 4.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4C6.5 8 6.8 8.1 7.1 8.1S7.6 8 7.8 7.8c.4-.4.4-1 0-1.4L6.3 4.9z"/></svg>`;
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

let typewriter = new Typewriter(homeTitle, {
    loop: true,
    delay: 75,
})
typewriter
    .typeString('تامین اجتماعی، نیاز امروز، پشتوانه فردا')
    .deleteAll()
    .pauseFor(1000)
    .start();

let days = [
    "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه", "شنبه"
]

let months = [
    { id: convertNumbetToPerasian("1"), month: "فروردین" },
    { id: convertNumbetToPerasian("2"), month: "اردیبهشت" },
    { id: convertNumbetToPerasian("3"), month: "خرداد" },
    { id: convertNumbetToPerasian("4"), month: "تیر" },
    { id: convertNumbetToPerasian("5"), month: "مرداد" },
    { id: convertNumbetToPerasian("6"), month: "شهریور" },
    { id: convertNumbetToPerasian("7"), month: "مهر" },
    { id: convertNumbetToPerasian("8"), month: "آبان" },
    { id: convertNumbetToPerasian("9"), month: "آذر" },
    { id: convertNumbetToPerasian("10"), month: "دی" },
    { id: convertNumbetToPerasian("11"), month: "بهمن" },
    { id: convertNumbetToPerasian("12"), month: "اسفند" },
]
let calendars = [
    { id: convertNumbetToPerasian("1"), src: "images/farvardin.jpg" },
    { id: convertNumbetToPerasian("2"), src: "images/ordibehesht.jpg" },
    { id: convertNumbetToPerasian("3"), src: "images/khordad.jpg" },
    { id: convertNumbetToPerasian("4"), src: "images/tir.jpg" },
    { id: convertNumbetToPerasian("5"), src: "images/mordad.jpg" },
    { id: convertNumbetToPerasian("6"), src: "images/shahrivar.jpg" },
    { id: convertNumbetToPerasian("7"), src: "images/mehr.jpg" },
    { id: convertNumbetToPerasian("8"), src: "images/aban.jpg" },
    { id: convertNumbetToPerasian("9"), src: "images/azar.jpg" },
    { id: convertNumbetToPerasian("10"), src: "images/dey.jpg" },
    { id: convertNumbetToPerasian("11"), src: "images/bahman.jpg" },
    { id: convertNumbetToPerasian("12"), src: "images/esfand.jpg" },
]

function convertNumbetToPerasian(number) {
    const numFa = new Intl.NumberFormat('fa-IR', { style: "decimal" }).format(number).replace(/٬/g, "")
    return numFa

}

if (window.localStorage.getItem("theme") == "dark-theme") {
    document.documentElement.classList.add("dark-theme")
    changeThemeBtn.innerHTML = lightThemeIcon
    changeThemeBtn.title = "روشن"
}
function navigationTab(listItems, listItemActiveclass, contentItemShowClass) {
    listItems.forEach(portfolioListItem => {
        portfolioListItem.addEventListener('click', function () {
            removeActiveClass(listItemActiveclass)
            removeActiveClass(contentItemShowClass)
            this.classList.add(listItemActiveclass)
            let contentId = this.getAttribute('data-content-id')
            document.querySelector(contentId).classList.add(contentItemShowClass)
        })
    })
}

function removeActiveClass(className) {
    document.querySelector(`.${className}`).classList.remove(className)
}

function observerHandler(allsection) {
    allsection.map(section => {
        let sectionClassName = section.target.className
        let sectionMenuItem = document.querySelector(`.menu__item[data-section=${sectionClassName}]`)
        if (section.isIntersecting) {
            sectionMenuItem.classList.add("menu__item--active")
        } else {
            sectionMenuItem.classList.remove("menu__item--active")

        }
    })
}

function setDate(exec) {
    let newDate = new Date()
    let dateFormat = new Intl.DateTimeFormat("fa", {
        hour: "2-digit",
        minute: "2-digit",
    }).format();
    let splitData = new Intl.DateTimeFormat("fa", {
        year: "numeric",
        month: "numeric",
        day: "2-digit",

    }).format().split("/")

    let nowMonth = months.find(item => item.id == splitData[1])
    let nowCalendar = calendars.findIndex(item => item.id == splitData[1])
    if (exec == "load") {
        let firstCalendar = calendars.slice(nowCalendar)
        let secondCalendar = []
        if (nowCalendar > 0) {
            secondCalendar = calendars.slice(0, nowCalendar)
        }
        let newCalendar = [...firstCalendar, ...secondCalendar]
        for (let i = 0; i < newCalendar.length; i++) {
            swiperImage[i].src = newCalendar[i].src
        }
    }



    date.innerHTML = days[newDate.getDay()] + " " + splitData[2] + " " + nowMonth.month + " " + splitData[0] + " " + "،" + " " + dateFormat
}


navigationTab(resumeListItems, "resume-list__item--active", "resume-content--show")
navigationTab(portfolioListItems, "portfolio-list__item--active", "portfolio-content--show")


sections.forEach(section => {
    observer.observe(section)
})
navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("nav__toggle-icon--open")
    menu.classList.toggle("menu--open")
    cover.classList.toggle("cover--show")

})
changeThemeBtn.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark-theme")
    if (document.documentElement.classList.contains("dark-theme")) {
        this.innerHTML = lightThemeIcon
        window.localStorage.setItem("theme", "dark-theme")
        changeThemeBtn.title = "روشن"
    } else {
        this.innerHTML = darkThemeIcon
        window.localStorage.setItem("theme", "light-theme")
        changeThemeBtn.title = "تاریک"
    }
})

window.addEventListener("resize", function () {
    const checkDisplay = getComputedStyle(navToggle).getPropertyValue("display")

    if (checkDisplay == "none") {
        navToggle.classList.remove("nav__toggle-icon--open")
        menu.classList.remove("menu--open")
    }


})


window.addEventListener("load", () => {
    footerTitle.innerHTML = "طراحی شده توسط: صادق قربانی"
    setDate("load")

})
setInterval(() => {
    setDate("interval")

}, 60000)


menuItems.forEach(item => {
    item.addEventListener("click", function (e) {
        e.preventDefault()
        removeActiveClass("menu__item--active")
        item.classList.add("menu__item--active")
        let sectionClass = item.getAttribute("data-section")
        let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop
        window.scrollTo({
            top: sectionOffsetTop - 130,
            behavior: "smooth"
        })
    })
})

