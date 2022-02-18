const buttonElement = document.getElementById('button');
const videoElement = document.getElementById('video');

$('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    prevArrow: false
  });
$('.slider-dots').slick({
    infinite: true,
    dots: true,
    arrows: false,
    speed: 600,
    fade: true,
    cssEase: 'linear'
  });
$('.slider-combo').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: false
  });

buttonElement.onclick = playVideo;
function playVideo() {
    videoElement.play();
    buttonElement.classList.toggle('hidden');
}
videoElement.onclick = pauseVideo;
function pauseVideo() {
    videoElement.pause();
    buttonElement.classList.remove('hidden');
}
