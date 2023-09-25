function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.scrollY;
    const startTime = performance.now();
  
    function scrollStep(timestamp) {
      const currentTime = timestamp - startTime;
      if (currentTime < duration) {
        const easeInOutCubic = easeInOutCubicTimingFunction(currentTime / duration);
        const newPosition = startPosition + (targetPosition - startPosition) * easeInOutCubic;
        window.scrollTo(0, newPosition);
        requestAnimationFrame(scrollStep);
      } else {
        window.scrollTo(0, targetPosition);
      }
    }
  
    function easeInOutCubicTimingFunction(t) {
      // Smooth easing function
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
  
    requestAnimationFrame(scrollStep);
  }
  
  function scrollToOnPageLoad() {
    // Specify the target scroll position (in pixels) and duration (in milliseconds)
    const targetPosition = 1000;
    const duration = 600; // 1000 milliseconds (1 second)
  
    // Scroll smoothly to the target position
    smoothScrollTo(targetPosition, duration);
  }
  
  // Attach the function to the "load" event of the window
  window.addEventListener("load", scrollToOnPageLoad);
  

