gsap.registerPlugin(ScrollTrigger);

function parallax(el,distance,speed){
    const item = document.querySelector(el);
    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll",function(){    
    parallax("#one",window.scrollY,.500);
    parallax("#two",window.scrollY,.350);
    parallax("#three",window.scrollY,.300);
    parallax("#four",window.scrollY,.600);
    parallax("#five",window.scrollY,.700);
    parallax("#six",window.scrollY,.400);
    parallax("#seven",window.scrollY,.300);
})

window.addEventListener("load",function(){
    const preload = document.querySelector(".preload");
    const timeline = gsap.timeline();
    // preload.classList.add("preload-finish");    
    timeline.to(preload,{  
        opacity: 0,
        ease: "power1",
        delay: .8,
        pointerEvents: "none"        
    })
    .from(".hero-content",{
        y:40,
        ease: "power2.out",
        opacity:0,
        duration: .2,
        stagger: .2        
    })
    .from(".hero-back",{
        y: 50,
        ease: "bounce",
        scale: 1.1,
        opacity: 0,        
        duration: .1,
        stagger:.05
    })
    .from("#star",{
        opacity: 0,
        duration:.3,
        y:-50,
        ease: "power2.in"
    })
    .from(".nav-wrapper",{
        opacity:0,
        y:-40,
        ease: "power2.out"
    });

    gsap.from("#about-img",{
        scrollTrigger:{
            trigger:".emo-img"        
        },
        x: -200,
        opacity: 0,
        duration: .6,
        delay:.8
    })
    gsap.from(".abt-txt",{
        scrollTrigger:{
            trigger:".emo-img"        
        },
        y: 80,
        opacity: 0,
        duration: .6,
        delay:.8,
        stagger: .4
    })
    gsap.from(".emo-img",{
        scrollTrigger:{
            trigger:".emo-img"        
        },
        scale: .1,
        opacity: 0,
        duration: 1,
        delay:.6
    })    
})


let tl = gsap.timeline();

tl.to(".preload",{
    backgroundColor: "white",
    ease: "power2.in"
})
.to("#emo",{   
    duration: 0.8,  
    opacity: 1,
    scale: .7,
    ease: "back",
    repeat:-1,
    yoyo: true
});






