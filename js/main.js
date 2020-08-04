const menuBar = document.querySelector('.menubar');
const menu = document.querySelector('.menu');
const sns = document.querySelector('.sns');

menuBar.addEventListener('click', () => {
    // 클래스에 active가 있으면 빼주고 없으면 추가
    menu.classList.toggle('active');
    sns.classList.toggle('active');
});

