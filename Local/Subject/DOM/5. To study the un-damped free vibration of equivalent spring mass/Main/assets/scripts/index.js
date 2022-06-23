const x = document.getElementById('how_it_works1');
const y = document.getElementById('how_it_works2');
const z = document.getElementById('how_it_works3');

document.getElementById("hit").onclick= function(){
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
};

document.getElementById('next1').onclick= function(){
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
};
document.getElementById('next2').onclick= function(){
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
};
document.getElementById('getStarted').onclick= function(){
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
};

// typing animation script



var typed = new Typed(".typing",{
    strings: ["Welcome", "To","The","Virtual", "Labs", "Of", "SGGSIE&T"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});