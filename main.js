let closeButtons = document.querySelectorAll('.close-box-user');

for(let i = 0; i < closeButtons.length; i++){
    closeButtons[i].addEventListener('click',()=>{
        closeButtons[i].parentNode.parentNode.style.display = "none";
    })
} 