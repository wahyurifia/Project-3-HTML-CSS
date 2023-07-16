const login = document.querySelector('#login');
const close = document.querySelector('#close');
const wrapper = document.querySelector('.wrapper');
const body = document.body;
const center = document.querySelector('.center')


login.addEventListener('click', function(){
    wrapper.classList.add("active")
    body.classList.add('active')
    center.classList.add('active')
});

close.addEventListener('click', function(){
    wrapper.classList.remove("active")
    body.classList.remove('active')
    center.classList.remove('active')
});

