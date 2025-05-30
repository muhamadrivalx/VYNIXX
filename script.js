// Simulasi data film
const movies = {
    fantasy: [
        { title: "Fantasy Film 1", image: "https://via.placeholder.com/200x300?text=Fantasy+1" },
        { title: "Fantasy Film 2", image: "

https://via.placeholder.com/200x300?text=Fantasy+2" },
        { title: "Fantasy Film 3", image: "https://via.placeholder.com/200x300?text=Fantasy+3" },
    ],
    ai: [
        { title: "AI Film 1", image: "https://via.placeholder.com/200x300?text=AI+1" },
        { title: "AI Film 2", image: "https://via.placeholder.com/200x300?text=AI+2" },
        { title: "AI Film 3", image: "https://via.placeholder.com/200x300?text=AI+3" },
    ],
    tech: [
        { title: "Tech Film 1", image: "https://via.placeholder.com/200x300?text=Tech+1" },
        { title: "Tech Film 2", image: "https://via.placeholder.com/200x300?text=Tech+2" },
        { title: "Tech Film 3", image: "https://via.placeholder.com/200x300?text=Tech+3" },
    ]
};

// Simulasi data favorit
let favorites = [];

// Simulasi notifikasi
const notifications = [
    { message: "New AI film added!", logo: "vynix-logo.png" },
    { message: "Update available for Vynix!", logo: "vynix-logo.png" }
];

// Fungsi untuk menampilkan halaman
function showPage(pageId) {
    const pages = ['profile', 'search', 'favorites', 'notifications'];
    pages.forEach(id => {
        document.getElementById(id).classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    if (pageId === 'favorites') loadFavorites();
    if (pageId === 'notifications') loadNotifications();
}

// Fungsi untuk menutup disclaimer
function closeDisclaimer() {
    document.getElementById('disclaimer').style.display = 'none';
}

// Fungsi untuk memuat film ke slider
function loadMovies() {
    for (let category in movies) {
        const slider = document.getElementById(`${category}-slider`);
        movies[category].forEach(movie => {
            const card = document.createElement('div');
            card.classList.add('movie-card');
            card.style.backgroundImage = `url(${movie.image})`;
            card.addEventListener('click', () => {
                const video = document.getElementById('trailer-video');
                video.play();
            });
            slider.appendChild(card);
        });
    }
}

// Fungsi pencarian
document.getElementById('search-input').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const results = document.getElementById('search-results');
    results.innerHTML = '';

    for (let category in movies) {
        movies[category].forEach(movie => {
            if (movie.title.toLowerCase().includes(query)) {
                const card = document.createElement('div');
                card.classList.add('movie-card');
                card.style.backgroundImage = `url(${movie.image})`;
                results.appendChild(card);
            }
        });
    }
});

// Fungsi untuk memuat favorit
function loadFavorites() {
    const list = document.getElementById('favorites-list');
    list.innerHTML = '';
    favorites.forEach(movie => {
        const item = document.createElement('div');
        item.classList.add('movie-card');
        item.style.backgroundImage = `url(${movie.image})`;
        list.appendChild(item);
    });
}

// Fungsi untuk memuat notifikasi
function loadNotifications() {
    const list = document.getElementById('notifications-list');
    list.innerHTML = '';
    notifications.forEach(notif => {
        const item = document.createElement('div');
        item.classList.add('notification-item');
        item.innerHTML = `<img src="${notif.logo}" alt="Vynix Logo"> ${notif.message}`;
        list.appendChild(item);
    });
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    loadMovies();
});
