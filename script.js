gsap.from(".a",{
    stagger: .3,
    x:-100,
    opacity:0,
    ease:Expo.easeInOut,
    duration:2
})
gsap.from(".b",{
    stagger: .3,
    x:100,
    opacity:0,
    ease:Expo.easeInOut,
    duration:3
})
gsap.from(".c",{
    stagger: .3,
    y:-100,
    opacity:0,
    ease:Expo.easeInOut,
    duration:3
})