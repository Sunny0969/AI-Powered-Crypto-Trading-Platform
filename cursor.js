function cursorMovingAnimation(event) {
  try {
    const cursorX = event.clientX;
    const cursorY = event.clientY;

    gsap.to(".mouse-move-big", {
      x: cursorX,
      y: cursorY,
      ease: "power2.out",
    });
    gsap.to(".mouse-move-sm", {
      x: cursorX,
      y: cursorY,
      ease: "power2.out",
    });
  } catch (err) {
    console.error("Error in cursor animation:", err);
  }
}

document.addEventListener("mousemove", cursorMovingAnimation);
