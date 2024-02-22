export const observe = (whatToObserve) => {
  const observer = new IntersectionObserver(observerCallback, options);

  whatToObserve.forEach((element) => observer.observe(element));
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    const entryTarget = entry.target;
    if (entry.isIntersecting) {
      if (entryTarget.classList == "project") {
        entryTarget.classList.add("visible");
        observer.unobserve(entryTarget);
      }
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};
