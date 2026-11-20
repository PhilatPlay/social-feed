const feed = document.getElementById("feed");

const posts = [
    {
        username: "Alex",
        message: "Finally made it to the beach!",
        likes: 24
    },
    {
        username: "Jordan",
        message: "Coffee and coding!",
        likes: 18
    },
    {
        username: "Taylor",
        message: "Learning JavaScript today.",
        likes: 32
    }
];

for (let i = 0; i < posts.length; i++) {
    feed.innerHTML += `
        <div class="card">
            <h2>${posts[i].username}</h2>
            <p>${posts[i].message}</p>
            <small>❤️ ${posts[i].likes} likes</small>
        </div>
    `;
}