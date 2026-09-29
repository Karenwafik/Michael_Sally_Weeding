function openInvitation() {

    const music = document.getElementById("bgMusic");

    music.currentTime = 16;

    music.play().catch(err => console.log(err));

    // إخفاء الصفحة الأولى
    document.getElementById("welcomePage").style.display = "none";

    // إظهار الصفحة الثانية
    document.getElementById("invitationPage").style.display = "block";

    // الرجوع لأعلى الصفحة
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
const button = document.querySelector(".open-btn");
const music = document.getElementById("bgMusic");

button.addEventListener("click", function () {

    music.addEventListener('loadedmetadata', function () {
        music.currentTime = 16;
        music.play();
    });

    if (music.readyState >= 1) {
        music.currentTime = 16;
        music.play();
    }

    // setTimeout(() => {
    //     window.location.href = "details.html";
    // }, 1000);



});



// function openInvitation() {
//     window.location.href = "details.html";
//     const music = document.getElementById("bgMusic");

//     // تشغيل الموسيقى من الثانية 15
//     music.currentTime = 16;

//     music.play()
//         .then(() => {
//             // حفظ حالة التشغيل
//             sessionStorage.setItem("playMusic", "true");

//             // الانتقال بعد ثانية
//             setTimeout(() => {
//                 window.location.href = "details.html";
//             }, 1000);
//         })
//         .catch((error) => {
//             console.log("Audio could not play:", error);

//             // الانتقال حتى لو المتصفح منع تشغيل الصوت
//             window.location.href = "details.html";
//         });
// }

document.addEventListener('DOMContentLoaded', function () {

    // ── SLIDER ──
    let current = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    function updateSlider() {
        slides.forEach((s, i) => {
            s.classList.remove('active', 'prev-slide', 'next-slide');
            const diff = i - current;

            if (diff === 0) {
                s.classList.add('active');
            } else if (
                diff === -1 ||
                (current === 0 && i === slides.length - 1)
            ) {
                s.classList.add('prev-slide');
            } else if (
                diff === 1 ||
                (current === slides.length - 1 && i === 0)
            ) {
                s.classList.add('next-slide');
            }
        });

        dots.forEach((d, i) => {
            d.classList.toggle('active', i === current);
        });
    }

    function changeSlide(dir) {
        current = (current + dir + slides.length) % slides.length;
        updateSlider();
    }

    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            current = i;
            updateSlider();
        });
    });

    setInterval(() => changeSlide(1), 3000);
    updateSlider();

    // ── COUNTDOWN ──
    function updateCountdown() {

        const weddingDate = new Date('October 08, 2026 07:00:00').getTime();
        const now = new Date().getTime();

        const distance = weddingDate - now;

        if (distance <= 0) {
            document.querySelector('.countdown-box').innerHTML =
                '<h2>🎊 We are married! ❤️</h2>';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );
        const seconds = Math.floor(
            (distance % (1000 * 60)) / 1000
        );

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

});

function sendRSVP(to) {
    const name = document.getElementById('rsvpName').value.trim();
    const message = document.getElementById('rsvpMessage').value.trim();

    if (!name) { alert('Please enter your name 😊'); return; }
    if (!message) { alert('Please write your wishes 😊'); return; }

    const phones = {
        Michael: '201116619972',  
        Sally: '201110623391'  // 👈 replace with phone number
    };

    const fullMessage = `Hello! I'm *${name}* 💌\n\n${message}\n\n❤️ Michael & Sally - 08/10/2026`;
    const url = `https://wa.me/${phones[to]}?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, '_blank');
}

function addToCalendar() {
    const title = encodeURIComponent("Michael & Sally Wedding ❤️");
    const details = encodeURIComponent("We joyfully invite you to celebrate our wedding day!");
    const location = encodeURIComponent("Church of Virgin Mary");
    const startDate = "20261008T170000"; // 5:00 PM
    const endDate = "20261008T230000";   // 11:00 PM

    const googleUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(googleUrl, '_blank');
}