const container = document.getElementById('events-container');

fetch('data/eventsData.json')
    .then(res => res.json())
    .then(events => {
        events.forEach(event => {
            const card = document.createElement('article');
            card.classList.add('card');

            card.innerHTML = `
                <img src="${event.image}" alt="${event.name}">
                <h3>${event.name}</h3>
                <p><strong>Date:</strong> ${event.date} at ${event.time}</p>
                <p><strong>Venue:</strong> ${event.venue}</p>
                <p><strong>Genre:</strong> ${event.genre}</p>
                <p><strong>Price:</strong> ${event.ticketPrice}</p>
            `;

            // ✅ Click navigates to detail page with slug as query string
            const slug = event.name.toLowerCase().replace(/\s+/g, '-');
            card.addEventListener('click', () => {
                window.location.href = `eventDetail.html?event=${slug}`;
            });

            container.appendChild(card);
        });
    })
    .catch(err => console.error('Error loading events:', err));