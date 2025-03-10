gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro",
    start: "top bottom",
    end: "50% 50%",
    scrub: true,
    markers: false,
  },
});

tl.to(
  "#hero_chocolate",
  {
    top: "125%",
    left: "15%",
  },
  "chocoBlocks"
);

tl.to(
  "#chocoSwirl",
  {
    top: "118%",
    left: "-13%",
    scale: 0.6, // 縮小
  },
  "chocoBlocks"
);

// 滾動時改變 z-index
gsap.set("#chocoSwirl", { zIndex: 1 }); // 預設 z-index 為 1
gsap.to("#chocoSwirl", {
  scrollTrigger: {
    trigger: ".intro",
    start: "top center",
    onEnter: () => gsap.set("#chocoSwirl", { zIndex: 10 }), // 進入時提升層級
    onLeaveBack: () => gsap.set("#chocoSwirl", { zIndex: 1 }), // 滑回時降低層級
  },
});
tl.to(
  "#chocoBlocks",
  {
    top: "175%",
    right: "10%",
  },
  "chocoBlocks"
);
tl.to(
  "#chocoSmall-btm",
  {
    top: "100%",
    left: "5%",
  },
  "chocoBlocks"
);
// 第三頁
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".products",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    markers: false,
  },
});
// PRODUCTS - strawberry
tl2.from(
  ".pocky_sberry",
  {
    rotate: "-90deg",
    x: "-90%",
    y: "110%",
  },
  "pd"
);
tl2.from(
  "#strawberry",
  {
    rotate: "-60deg",
    x: "50%",
    y: "50%",
  },
  "pd"
);
tl2.from(
  ".pocky_matcha",
  {
    rotate: "90deg",
    x: "90%",
    y: "110%",
  },
  "pd"
);
tl2.from(
  "#matcha",
  {
    rotate: "60deg",
    x: "50%",
    top: "50%",
  },
  "pd"
);
tl2.from(
  ".pocky_choco",
  {
    rotate: "180deg",
    // right: "50%",
    top: "50%",
  },
  "pd"
);
// // POCKY to page3 ProductsPages
tl2.to(
  "#hero_chocolate",
  {
    left: "42.5%",
    top: "221%",
    scale: "0.933",
  },
  "pd"
);
