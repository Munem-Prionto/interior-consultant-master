/* readmore */
const btn_readmore = document.querySelector('#btn_readmore')
const dots = document.querySelector('#dots')
const more = document.querySelector('#more')

console.log(btn_readmore , dots , more);
btn_readmore.addEventListener('click' , e=> {
    e.preventDefault();
    if(dots.style.display === 'none') {
        dots.style.display = 'inline';
        btn_readmore.innerHTML = 'Read More <span>&#8594;</span>';
        more.style.display = 'none'
    } else {
        dots.style.display = 'none';
        btn_readmore.innerHTML = 'Read Less <span>&#8592;</span>';
        more.style.display = 'inline'
    }
})
/* mobile nav */
const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.closebtn')

hamburger.addEventListener('click' , e=> {
    e.preventDefault()
    openNav()
})

close.addEventListener('click' , e=> {
    e.preventDefault()
    closeNav()
})

function openNav() {
    document.querySelector("#mb_links").style.width = "100%";
}
function closeNav() {
    document.querySelector("#mb_links").style.width = "0%";
}
