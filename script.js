// The code in line 2 to 35 is showing that, how to make the ball follow the pinter.
let timer;
function squizing() {
    let xsca = 1;
    let ysca = 1;

    let xpre = 0;
    let ypre = 0;

    window.addEventListener("mousemove", function(det) {
        clearTimeout(timer)

        xsca = gsap.utils.clamp(.7, 1.3, det.clientX - xpre);
        ysca = gsap.utils.clamp(.7, 1.3, det.clientY - ypre);

        xpre = det.clientX;
        ypre = det.clientY;

        minicircle(xsca, ysca);

        timer = setTimeout(function () {
            document.querySelector(".tracker").style.transform = `translate(${det.clientX}px,${det.clientY}px) scale(1,1)`;
        },100)
    })
}
squizing();

let boody = document.querySelector(".main");

function minicircle(xsca, ysca) {
    boody.addEventListener("mousemove",function (det) {
        document.querySelector(".tracker").style.transform = `translate(${det.clientX}px, ${det.clientY}px) scale(${xsca}, ${ysca})`;
    })
}
minicircle();

//The code in line 38 to 61 is showing that, how to craete teh animation of the homepage.
function anima() {
    let time = gsap.timeline();
    time.from(".mainheader", {
        y:'-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to("#elem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: .2,
        delay: -1,
    })
    .from('.box3', {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
    })
}
anima();

//The code in line 64 to 96 is showing that, how to create the hover aniamtion effect in that perticuler part.
function imageshow(){
    document.querySelectorAll("#ele").forEach(function (ele) {
        ele.addEventListener("mousemove", function(){
            gsap.to(ele.querySelector("#img"), {
                opacity: 1,
                ease: Power1,
            })
            gsap.to(ele.querySelector("h1"),{
                opacity:0.2,
                ease: Power3,
            })
            gsap.to(ele.querySelector("h6"),{
                opacity:0.2,
                ease: Power3,
            })
        });
        ele.addEventListener("mouseleave",function(){
            gsap.to(ele.querySelector("#img"), {
                opacity: 0,
                ease: Power1,
            })
            gsap.to(ele.querySelector("h1"),{
                opacity:0.6,
                ease: Power3,
            })
            gsap.to(ele.querySelector("h6"),{
                opacity:0.6,
                ease: Power3,
            })
        })
    });
}
imageshow();
