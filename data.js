var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                id:'11',
                author: "No Waste Gang",
                date: Date.now(),
                content: "Aw man, that is unfortunately not recyclable. But don't fret! You can still repurpose that.",
                likes: "0"
            },
            {
                id:'12',
                author: "Man Oh Man",
                date: Date.now(),
                content: "I recycle those all the time, but that's only because I am allowed to in my area. Make sure you check information specific to your area or include your zip code in the post next time!",
                likes: "0"
            }
        ],
        img: "plastic-water-bottle.jpg"
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                id: '21',
                author: "Rick Astley",
                date: Date.now(),
                content: "Never gonna give recycling up! Rock on, bud, that is totally recyclable!",
                likes: "0"
            },
            {
                id:'22',
                author: "Agora5",
                date: Date.now(),
                content: "Rick's totally right! And it's reusable too - you can fill that bad boi up and keep on using it!",
                likes: "0"
            }
        ],
        img: "plastic-water-bottle.jpg"
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}