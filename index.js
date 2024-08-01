
document.addEventListener('scroll', () => {
    const scrollProgressBar = document.querySelector('.scroll-progress-bar');
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = document.documentElement.scrollTop;
    const scrollPercentage = (scrollPosition / scrollTotal) * 100;
    scrollProgressBar.style.width = `${scrollPercentage}%`;
});