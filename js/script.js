gsap.registerPlugin(ScrollTrigger);

// Horizontal Scroll Section (main-wrapper slides left)
const container = document.querySelector(".main-wrapper");
gsap.to(container, {
  x: () => `-${container.scrollWidth - document.documentElement.clientWidth}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    end: () => `+=${container.scrollWidth}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    // markers: true,
  },
});

// Sidebar Slide-In
gsap.to(".sidebar", {
  x: 70,
  opacity: 1,
  scrollTrigger: {
    trigger: ".sidebar",
    start: "center +=2500 center",
    scrub: 2.5,
  },
});

// Expand Row-2 height on scroll
gsap.from(".row-2", {
  height: "0%",
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".section3",
    start: "40% center",
    toggleActions: "play pause reverse reverse",
  },
});

// Animate all .row li items with stagger
gsap.from(".row li", {
  y: 200,
  opacity: 0,
  ease: "power2.out",
  duration: 2,
  delay: 1,
  stagger: { amount: 1 },
  scrollTrigger: {
    trigger: ".section3",
    toggleActions: "play none none reverse",
  },
});

// Slide number (e.g. .num)
gsap.to(".num", {
  x: 600,
  duration: 2,
  scrollTrigger: {
    trigger: ".num",
    start: "right left",
  },
});

// Parallax effect for columns
gsap.to(".col-1", {
  y: -250,
  ease: "none",
  scrollTrigger: {
    trigger: ".image-gallery",
    start: "top center",
    end: "+=3300",
    scrub: 1,
  },
});

gsap.to(".col-2", {
  y: 250,
  ease: "none",
  scrollTrigger: {
    trigger: ".image-gallery",
    start: "top center",
    end: "+=3300",
    scrub: 1,
  },
});

gsap.to(".col-3", {
  y: -250,
  ease: "none",
  scrollTrigger: {
    trigger: ".image-gallery",
    start: "top center",
    end: "+=3300",
    scrub: 1,
  },
});

// Marquee-style row animations (different directions)
// ✅ Marquee-style scroll (clean and non-conflicting)
gsap.to(".row-1 ul", {
  xPercent: 50,
  repeat: -1,
  duration: 10,
  ease: "linear",
});

gsap.to(".row-2 ul", {
  xPercent: -50,
  repeat: -1,
  duration: 14,
  ease: "linear",
});

gsap.to(".row-3 ul", {
  xPercent: 50,
  repeat: -1,
  duration: 12,
  ease: "linear",
});
