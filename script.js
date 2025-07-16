document.querySelectorAll('.course').forEach(course => {
    course.addEventListener('click', () => {
        course.classList.toggle('approved');
    });
});
