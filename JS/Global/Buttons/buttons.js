const buttons=document.querySelectorAll('.buttons');buttons.forEach(button=>{button.addEventListener('click',function(){buttons.forEach(btn=>btn.classList.remove('button-clicked'));this.classList.add('button-clicked')})})