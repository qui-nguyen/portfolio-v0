const ratio = 0.3;
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio,
};

const handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible');
      observer.unobserver(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);
observer.observe(
  document.querySelectorAll('.reveal').forEach(reveal => {
    observer.observe(reveal);
  })
);
