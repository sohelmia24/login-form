const hideShowBtn = document.getElementById('hideShowBtn');
const password = document.getElementById('password');


hideShowBtn.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
        hideShowBtn.classList.replace('bx-hide', 'bx-show');
    } else {
        password.type = 'password';
        hideShowBtn.classList.replace('bx-show', 'bx-hide');
    }
});