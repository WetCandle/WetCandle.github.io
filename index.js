document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('body').addEventListener('click', function(){
        setTimeout(function(){
            document.querySelector('#heart-attack').style.visibility = "visible";
        }, 2024)

    })
});

// https://stackoverflow.com/questions/16873889/how-to-create-javascript-delay-function