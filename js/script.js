


gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".main-wrapper");
console.log('Container client width:', document.documentElement.clientWidth);
console.log('Container scroll width:', container.scrollWidth);

gsap.to(container, {
  x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    end: () => "+=" + container.scrollWidth,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: true,
  },
});
