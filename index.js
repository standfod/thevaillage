

let menu = document.getElementById("menu")
let hide = document.getElementById("hide")
let parentcards = document.getElementById("parentcards")
let loginbtn = document.getElementById("loginbtn")
let header = document.querySelector(".head")
let card = document.querySelector(".card")
let card2 = document.querySelector(".card2")
let subscribe = document.getElementById("subscribe")
let newpage = document.getElementById("newpage")
let card3 = document.querySelector(".card3")
let infor = document.getElementById("infor")





hide.style.display = "none"
loginbtn.style.display = "block"
header.style.display = "block"
card.style.display = "block"
subscribe.style.display = "block"
newpage.style.display = "none"
card2.style.display = "block"
card3.style.display ="block"
infor.style.display = "block"


menu.addEventListener("click", function(){
    hide.classList.add("active")
    
    if(hide.style.display ==='none'){
        hide.style.display = "block"
    } 
    else{
        hide.style.display = "none"
    }
})


const cards  = [
    { 
      image:"image/1766483403492-yfc1sjnc.webp",
      name:"Mechanical Keyboard Minimalist Tee - Programmer & Tech Black T- shirt",
      massege:"For those who speak in code and dream in keystrokes. This sleek black tee features a crisp white silhouette of a full-size mechanical keyboard, celebrating the primary tool of the digital age. A clean, sophisticated look for the office, the studio, or your home battle station.",
      price:"R300"
    },  

    {
        image:"image/1766483193766-ymgxl8dq.webp",
        name:"Rick’s Playlist Graphic Tee - Spotify Mashup Black T-Shirt",
        massege:"Get schwifty with your stream. This black tee features a custom graphic of Rick Sanchez leaning casually against a giant Spotify logo. It’s the perfect blend of interdimensional travel and your daily soundtrack. Whether you're portal-hopping or just hitting shuffle, this shirt is an essential for any fan of the multiverse's smartest scientist.",
        price:"R 300"
    },

    {
        image:"image/1766483317288-8491k1x2.webp",
        name:"Wireless Earbuds Graphic Tee - Minimalist Tech Audio Black T-Shirt",
        massege:"For those who find their sanctuary in sound. This premium black tee features a crisp, white illustration of wireless earbuds, celebrating the essential tool of the modern digital nomad. Whether you're listening to a favorite podcast or a new album, this design is a subtle nod to the hardware that powers your da",
        price:"R 300"
    },

    {
        image:"image/1766482381233-riyftjqw.webp",
        name:"Classic Porsche 911 Silhouette Minimalist Car Tee",
        massege:"A tribute to an automotive legend. This minimalist tee captures the unmistakable silhouette of the classic air-cooled 911 Turbo, complete with the famous rear wing. Designed for the enthusiast who appreciates clean lines and timeless engineering. Its subtle, centered graphic makes it a sophisticated choice for track days or casual weekend drives.",
        price:"R300"
    }

]


parentcards.innerHTML  = cards.map(itaem =>
    `<div class="cards1" style="background-image:url(${itaem.image})">
         <div class="cards2">
         ${itaem.name}
        </div> 
    </div>
  `
).join("")


loginbtn.addEventListener("click", function(){
    

})


