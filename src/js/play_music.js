let music = document.querySelector('.music')
let button = document.querySelector('.secret')

let main = document.querySelector('.container')
let open_link = document.querySelector('.wew')

let question = document.querySelector('.question-container')
let yes = document.querySelector('.btn ')
let no_btn = document.querySelector('.no')


function no_to_yes(){
    no_btn.className = "btn ";
    no_btn.textContent = "Yes"
}


function yes_to_yes(){
    no_btn.className = "btn no";
    no_btn.textContent = "No"
}
function show_easter(){
    question.style.visibility = "visible"
    
}

function pag_ibig_overload(){
    music.play();
    button.className += " easter"

    main.style.backgroundImage = "url('src/img/hearts.gif')"
    main.style.repeat = "no-repeat"
    main.style.objectFit = "cover"
}
function music_done(){
    button.className -= " easter"
    main.style.background = "#101010"
    question.style.visibility = "hidden"
    open_link.click();
}
question.addEventListener('mouseover',no_to_yes)
question.addEventListener('mouseout',yes_to_yes)
music.addEventListener('ended',music_done)

button.addEventListener('click',show_easter)
button.addEventListener('dblclick',()=>{
    question.style.visibility = "hidden"
})

yes.addEventListener('click',pag_ibig_overload)
no_btn.addEventListener('click',pag_ibig_overload)