// --- Javascript File ---
let deferredPrompt;

// button
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const btn = document.getElementById('installBtn');
    btn.style.display = 'block';

    btn.onclick = () => {
    deferredPrompt.prompt();
  };
});

// Logistics for loading json file and data
fetch('data.json')
    .then(res => res.json())
    .then(data => {
        const content = document.getElementById('content');
        const menu = document.getElementById('menu');

        data.categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.textContent = cat.title;

            btn.onclick = () => {
                content.innerHTML = `<h2>${cat.title}</h2>`;

                // Logistics for types of cats and img
                if (cat.breeds) {
                    cat.breeds.forEach(breed => {
                        const div = document.createElement('div');
                        div.className = 'card';

                        div.innerHTML = `
                            <h3>${breed.name}</h3>
                            <img src="${breed.image}" alt="${breed.name}">
                            <p>${breed.description}</p>
                            ${breed.audio ? `<audio controls src="${breed.audio}"></audio>` : ""}
                        `;
                        content.appendChild(div);
                    });
                }

                // texts/info of each cat
                if (cat.items) {
                    const list = document.createElement('ul');

                    cat.items.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        list.appendChild(li);
                    });
                    content.appendChild(list);
                }
            };
      menu.appendChild(btn);
    });
});