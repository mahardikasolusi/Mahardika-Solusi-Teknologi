document.querySelector('header').innerHTML =
    `<nav id="navbar" class="flex items-center h-16 lg:h-20 text-white">
        <div class="flex items-center responsive">
            <div class="">
                <a href="#">
                    <img class="h-8 lg:h-10" src="./assets/image/logo.svg" alt="">
                </a>
            </div>
            <div class="ml-auto">
                <span class="cursor-pointer lg:hidden" onclick="openNav()">
                    <svg class="w-5 h-5 transition duration-300 ease-in-out fill-current hover:text-mst-blue" height="384pt" viewBox="0 -53 384 384" width="384pt" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>
                </span>
                <div class="items-center hidden space-x-6 lg:flex">
                    <a href="#home" class="transition duration-300 ease-in-out hover:text-mst-orange" onclick="closeNav()">Home</a>
                    <a href="#offer" class="transition duration-300 ease-in-out hover:text-mst-orange" onclick="closeNav()">Offer</a>
                    <a href="#about" class="transition duration-300 ease-in-out hover:text-mst-orange" onclick="closeNav()">About</a>
                    <a href="#clients" class="transition duration-300 ease-in-out hover:text-mst-orange" onclick="closeNav()">Clients</a>
                    <a href="#contact" class="transition duration-300 ease-in-out hover:text-mst-orange" onclick="closeNav()">Contact Us</a>
                </div>
                <div id="myNav" class="overlay">
                    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                    <div class="overlay-content">
                        <a href="#home" onclick="closeNav()">Home</a>
                        <a href="#offer" onclick="closeNav()">Offer</a>
                        <a href="#about" onclick="closeNav()">About</a>
                        <a href="#clients" onclick="closeNav()">Clients</a>
                        <a href="#contact" onclick="closeNav()">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>        
    </nav>`

window.onscroll = function() {scrollFunction()};

const navbar =  document.getElementById("navbar");
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.add('bg-white');
        navbar.classList.add('shadow-md');
        navbar.classList.remove('text-white');
    } else {
        navbar.classList.remove('bg-white')
        navbar.classList.remove('shadow-md');
        navbar.classList.add('text-white')
    }
}
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}