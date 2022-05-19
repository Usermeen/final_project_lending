$(document).ready(function() {
    $('.burger').click(function(event){
        $('.burger,.header__navigation').toggleClass('active');
        $('body').toggleClass('lock')
    })
})