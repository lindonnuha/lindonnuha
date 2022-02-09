var a = document.getElementById('home'); 
a.href = "/#projects";
if (localStorage.getItem("theme") && localStorage.getItem("theme") === 'dark'){
    body = document.querySelector('#body');
    body.classList.add("dark-mode-body");
    document.querySelector('.fa-sun').style.display = "none";
}else {
    localStorage.setItem("theme", "light");
    document.querySelector('.fa-moon').style.display = "none";
}
function darkModeToggle(){
    if (localStorage.getItem("theme") === 'dark'){
        localStorage.setItem("theme", "light");
        body = document.querySelector('#body');
        body.classList.remove("dark-mode-body");
        document.querySelector('.fa-sun').style.display = "block";
        document.querySelector('.fa-moon').style.display = "none";
    }else {
        localStorage.setItem("theme", "dark");
        body = document.querySelector('#body');
        body.classList.add("dark-mode-body");
        document.querySelector('.fa-sun').style.display = "none";
        document.querySelector('.fa-moon').style.display = "block";
    }
}
function projectRedirect(url) {
    window.location.replace(url+".html")
}