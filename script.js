document.addEventListener('DOMContentLoaded', function() {
    const rooms = document.querySelectorAll('.room');
    const nextButtons = document.querySelectorAll('.next-arrow');
    let currentIndex = 1; 

    function updateRooms() {
        rooms.forEach((room, index) => {
            room.classList.remove('active');
            room.querySelector('.room-title').style.display = 'none';
            room.querySelector('p').style.display = 'none';
            room.querySelector('h3').style.display = 'block';
        });

        const activeRoom = rooms[currentIndex];
        activeRoom.classList.add('active');
        activeRoom.querySelector('.room-title').style.display = 'flex';
        activeRoom.querySelector('p').style.display = 'block';
        activeRoom.querySelector('h3').style.display = 'none';
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % rooms.length;
            updateRooms();
        });
    });

    updateRooms();

    // experience section
    const slides = document.querySelectorAll('.experience-slider .slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let slideIndex = 0;

    function updateSlides() {
        const offset = slideIndex * -100; 
        slides.forEach(slide => {
            slide.style.transform = `translateX(${offset}%)`; 
        });
    }

    prevButton.addEventListener('click', function() {
        slideIndex = (slideIndex - 1) % slides.length; 
        updateSlides(); 
    });

    nextButton.addEventListener('click', function() {
        slideIndex = (slideIndex + 1) % slides.length; 
        updateSlides();
    });

    updateSlides(); 
});
