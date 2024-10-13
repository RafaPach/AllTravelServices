export default function ScrollArrow() {
  const smoothScrollTo = (targetPosition, duration) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    // Ease function (easeInOutCubic)
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    };

    requestAnimationFrame(animation);
  };

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const targetPosition = aboutSection.offsetTop; // Get the target position
      smoothScrollTo(targetPosition, 2000); // Set duration to 2000ms (2 seconds)
    }
  };

  return (
    <div className="scrollArrow">
      <span onClick={handleScroll} style={{ cursor: 'pointer' }}></span>
      <span onClick={handleScroll} style={{ cursor: 'pointer' }}></span>
      <span onClick={handleScroll} style={{ cursor: 'pointer' }}></span>
    </div>
  );
}
