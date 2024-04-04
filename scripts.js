const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg'
];

// 배경 이미지를 새로고침할 때마다 랜덤으로 변경
function updateBackground() {
    const idx = Math.floor(Math.random() * images.length);
    const url = images[idx];
    document.querySelector('.bg-image').style.backgroundImage = `url('${url}')`;
}

// 현재 시간과 날짜를 업데이트
function updateTimeAndDate() {
    const now = new Date();
    document.getElementById('time').innerHTML = now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    document.getElementById('date').innerHTML = now.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
}

// 웹페이지 로드 시 시간, 날짜 및 배경 이미지 업데이트
document.addEventListener('DOMContentLoaded', () => {
    updateTimeAndDate();
    updateBackground();
});

// 1초마다 시간을 업데이트
setInterval(updateTimeAndDate, 1000);
