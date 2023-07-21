const login = document.querySelector('#login');
const close = document.querySelector('#close');
const wrapper = document.querySelector('.wrapper');
const body = document.body;
const center = document.querySelector('.center')
const modal = document.getElementById('modal');


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


modal.addEventListener('click', function(){
    wrapper.classList.remove("active")
    body.classList.remove('active')
    center.classList.remove('active')
    document.getElementById('modal').style.transform = 'translateY(-260%)'

});

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let username = document.getElementById("username");
    let password = document.getElementById("password");
  
    if (username.value == "" || password.value == "") {
    } else {
      // perform operation with form input
      console.log(
        `Username = ${username.value}
Password = ${password.value}`
      );
  
      username.value = "";
      password.value = "";

      document.getElementById('wrapper').classList.remove("active")
      document.getElementById('modal').style.transform = 'translateY(0%)'       
    
    }
  });

