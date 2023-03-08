lightThemeBtn.addEventListener('click', () => {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
});

darkThemeBtn.addEventListener('click', () => {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
});

//para el registro y pop windows
const lightThemeBtn = document.getElementById('light-theme-btn');
const darkThemeBtn = document.getElementById('dark-theme-btn');
const body = document.body;

lightThemeBtn.addEventListener('click', () => {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
});

darkThemeBtn.addEventListener('click', () => {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
});

const registroNuevoUsuario = document.getElementById('registro_nuevo_usuario');
const modal = document.getElementById('register-modal');
const closeBtn = document.getElementsByClassName('close')[0];

registroNuevoUsuario.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


//aparezca el formulario