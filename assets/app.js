$(function (){
    $('.card').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });

    $('.tv-web').matchHeight();
});