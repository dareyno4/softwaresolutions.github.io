const middle = document.querySelectorAll('.middle');
const intro = document.querySelectorAll('.intro');
const features = document.querySelectorAll('.features');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

middle.forEach(section => {
    observer.observe(section);
}); 
intro.forEach(section => {
    observer.observe(section);
}); 
features.forEach(section => {
    observer.observe(section);
});