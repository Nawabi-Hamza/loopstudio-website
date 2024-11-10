

// Display Creation
const data = [
    {
        id:1,
        desktop:"images/desktop/image-deep-earth.jpg",
        mobile:"images/mobile/image-deep-earth.jpg",
        title:"Deep earth"
    },
    {
        id:2,
        desktop:"images/desktop/image-night-arcade.jpg",
        mobile:"images/mobile/image-night-arcade.jpg",
        title:"Night Arcade"
    },
    {
        id:3,
        desktop:"images/desktop/image-soccer-team.jpg",
        mobile:"images/mobile/image-soccer-team.jpg",
        title:"Soccer Team VR"
    },
    {
        id:4,
        desktop:"images/desktop/image-grid.jpg",
        mobile:"images/mobile/image-grid.jpg",
        title:"The Grid"
    },
    {
        id:5,
        desktop:"images/desktop/image-from-above.jpg",
        mobile:"images/mobile/image-from-above.jpg",
        title:"From up above vr"
    },
    {
        id:6,
        desktop:"images/desktop/image-pocket-borealis.jpg",
        mobile:"images/mobile/image-pocket-borealis.jpg",
        title:"pocket borealis"
    },
    {
        id:7,
        desktop:"images/desktop/image-curiosity.jpg",
        mobile:"images/mobile/image-curiosity.jpg",
        title:"The Curiosity"
    },
    {
        id:8,
        desktop:"images/desktop/image-fisheye.jpg",
        mobile:"images/mobile/image-fisheye.jpg",
        title:"Make it fish eye"
    }
]
function theme(item){
    return `
        <div class="group relative overflow-hidden md:w-1/4">
            <img src="${item.desktop}" alt="" class="item-desktop-img">
            <img src="${item.mobile}" alt="" class="item-mobile-img">
            <div class="item-gradient"></div>
            <h5>${item.title}</h5>
        </div>
    `
}
const displayContainer = document.querySelector(".container-1")
const displayContainer2 = document.querySelector(".container-2")
data.slice(0,4).map( item => displayContainer.insertAdjacentHTML("beforeend",theme(item)))
data.slice(4,8).map( item => displayContainer2.insertAdjacentHTML("beforeend",theme(item)))


// Toggle menu

const menuBtn = document.getElementById("menu-btn")
menuBtn.addEventListener("click",function(e){
    this.classList.toggle("open")
    document.getElementById("menu").classList.toggle("hidden")
})