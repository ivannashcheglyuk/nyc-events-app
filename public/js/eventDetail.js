const eventNameEl = document.getElementById('event-name');
const eventGenreEl = document.getElementById('event-genre');
const eventImageEl = document.getElementById('event-image');
const eventDateEl = document.getElementById('event-date');
const eventTimeEl = document.getElementById('event-time');
const eventDescriptionEl = document.getElementById('event-description');

// ✅ Get slug from query string
const params = new URLSearchParams(window.location.search);
const slug = params.get('event');

fetch('data/eventsData.json')
    .then(res => res.json())
    .then(events => {
        const event = events.find(e => e.name.toLowerCase().replace(/\s+/g, '-') === slug);

        if (!event) {
            eventDescriptionEl.textContent = 'Event not found.';
            eventNameEl.textContent = '';
            eventGenreEl.textContent = '';
            eventImageEl.style.display = 'none';
            eventDateEl.textContent = '';
            eventTimeEl.textContent = '';
            return;
        }

        // ✅ Fill detail page fields
        eventNameEl.textContent = event.name;
        eventGenreEl.textContent = event.genre;
        eventImageEl.src = event.image;
        eventImageEl.alt = event.name;
        eventDateEl.textContent = event.date;
        eventTimeEl.textContent = event.time;
        eventDescriptionEl.textContent = event.description || "No description available.";
    })
    .catch(err => {
        console.error('Error loading event detail:', err);
        eventDescriptionEl.textContent = 'Error loading event details.';
    });