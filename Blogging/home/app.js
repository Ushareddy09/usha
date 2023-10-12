$(document).ready(function() {
    var iconContainer = $('.two');
    iconContainer.click(function() {
    $(this).toggleClass('dislike');
    });

    var iconContainer = $('.three');
    iconContainer.click(function() {
    $(this).toggleClass('like');
    });
});
  

