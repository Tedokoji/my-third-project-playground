//logo music 
const logo = document.querySelector("#logo");
const paimon = document.querySelector("#pai");
let isplaying = false;
const audio = document.createElement("audio");
audio.src = "evantheme.mp3";
const mainbody = document.querySelector("#mainbody");
const video = document.createElement("video");
logo.addEventListener("click",e=>{
    video.id="videoshit";
    video.src = "dance.mp4";
    video.muted = true;
    video.autoplay = true;
    audio.play();
    mainbody.appendChild(video);
    alert("Click Paimon to pause Music!!!")
    document.body.style.cssText = "animation:theater; animation-duration:560s;animation-fill-mode:forwards;"

})
 paimon.onclick = function(){
   audio.pause();
   document.body.style.cssText = "animation:theater2; animation-duration:560s;animation-fill-mode:forwards;"
    const pai = document.createElement("audio");
    pai.src="pai.mp3";
    pai.play();   
   mainbody.removeChild(video);
 }
 //header bar config
 let checkflash = 0;
 const flash = document.querySelector("#bruhic");
 const maindiv=document.querySelector("#DONOTTOUCHTHISDIV");
 flash.onclick = function(){
     if (checkflash >= 2){
         setTimeout(function(){
            const moan = document.createElement("audio");
            moan.src="moan.mp3";
            moan.play();        
            maindiv.style.cssText="background: url('ahegao.png'); "
            setTimeout(e=>{
            maindiv.style.cssText="background: none; "
            },500)
         },0)      
     }else{
     document.body.style.backgroundColor = "#4e3c02";
     document.body.style.color = "white";
     const flashsound = document.createElement("audio");
     flashsound.src = "flash.mp3";
     flashsound.play();
     checkflash++;
    setTimeout(function(){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";            
    },20)
    }
 }
 //menu items control animation
const menu = document.querySelector("#Menuclick");
let countclickmenu = 1;
menu.addEventListener("click", function(){
if(countclickmenu == 1){
    const menucon = document.querySelector("#menu-contents");
    const arrow = document.querySelector("#menu-arrow");
    arrow.style.cssText = `animation: arr;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;`
    menucon.style.cssText = `visibility:visible;        animation: menushowing;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;`;
    countclickmenu = 2;
}
else if(countclickmenu == 2){
    const menucon = document.querySelector("#menu-contents");
    const arrow = document.querySelector("#menu-arrow");
    arrow.style.cssText = `animation: arr2;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;`
    menucon.style.cssText = `visibility:hidden`;
    countclickmenu = 1;
}
}
)
//detect scroll window.addEventListener("scroll",e=>{})
window.addEventListener("scroll",e=>{
    const menucon = document.querySelector("#menu-contents");
    const arrow = document.querySelector("#menu-arrow");
    arrow.style.cssText = `animation: arr2;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;`
    menucon.style.cssText = `visibility:hidden`;
    countclickmenu = 1;
})
//main body contents
const addbutton = document.querySelector("#add");
const input = document.querySelector("#searchtext");
addbutton.onclick = function(){
    const mainbody_items= document.createElement("div");
    mainbody_items.classList.add("mainbody-items");
    if (input.value.trim()==""){input.value="bingchilling.png";
    const xina = document.createElement("audio");
    xina.src = "John Xina.mp3";
    xina.play();  
    const xina1 = document.createElement("audio");
    xina1.src = "bing.mp3";
    xina1.play(); 
    }
    mainbody_items.style.cssText =`
        width: 200px;
        height: 300px;
        margin-top: 20px;
        margin-left: 45px;
        border-radius: 10px;
        cursor:pointer;
        
        background: url(${input.value});
        background-size:contain;
        border: 5px solid rgba(0, 0, 0, 0.39);
        background-repeat: repeat;
        float: right;
        `;
        mainbody_items.innerHTML=`<div class="overlay">
        <button id="buy" type="button" class="BUY">BUY</button>
        <button id="viewitem" type="button" class="BUY">ViewItem</button>
        </div>`;
        mainbody.appendChild(mainbody_items);
        const guide = document.querySelector("#guide");
    }
//APIs
GET(RENDER);
document.querySelector("#api").onclick = function(){
    let dataFORM = {
        url:input.value
    }
    POST(dataFORM);
    GET(RENDER);
}
function dlt(id){
    
    DELETE(id);
    GET(RENDER);
}
function GET(callbackRENDER) {
    fetch('http://localhost:3000/testapi')
        .then(function(res){
            return res.json();
        })
        .then(callbackRENDER);
}
function RENDER(items){
    let htmlsrenderer = items.map((item)=>{
        return `
<div class="mainbody-items" style="  width: 200px;
height: 300px;
margin-top: 20px;
margin-left: 45px;
border-radius: 10px;
cursor:pointer;

background: url(${item.url});
background-size:contain;
border: 5px solid rgba(0, 0, 0, 0.39);
background-repeat: repeat;
float: right;">
<div class="overlay">
<button id="buy" type="button" class="BUY">BUY</button>
<button id="viewitem" type="button" class="BUY">ViewItem</button>
<button id="api-delete" onclick="dlt(${item.id});">DELETE</button>
</div>

</div>
`
    })
    mainbody.innerHTML = htmlsrenderer.join('');
}
function POST(dataFORM){
    fetch('http://localhost:3000/testapi',{
        method:'POST',
        body:JSON.stringify(dataFORM),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res=>{
     res.json();
    })
}
function DELETE(id){
    fetch('http://localhost:3000/testapi'+'/'+id,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json());
}
