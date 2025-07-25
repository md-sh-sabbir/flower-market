let btns = document.querySelectorAll('.cart-btn')

btns.forEach(function(btn){
    btn.onclick = function(){
        alert('Flower Added to Cart')
    }
})