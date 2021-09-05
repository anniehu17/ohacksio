var defaultThreads = [
    {
        id: 1,
        title: "Can I recycle this light bulb?",
        author: "Aaron",
        date: Date.now(),
        content: "This is the product description: 90-Watt Equivalent PAR38 Halogen Indoor/Outdoor Dimmable Flood Light Bulb. I'm not sure if I can recycle these in my area but I'm zip code 43221.",
        comments: [
            {
                id:'11',
                author: "Man Oh Man",
                date: Date.now(),
                content: "Aw man, that is unfortunately not recyclable because it's a halogen light bulb. They contain halogen light bulbs and are tough to recycle. In 43221, you can just put it in your trash cart for disposal.",
                likes: "0"
            },
            {
                id:'12',
                author: "No Waste Gang",
                date: Date.now(),
                content: "While Man Oh Man is right, you can also repurpose that light bulb into an air plant bulb. Just put an air plant and some water inside, and dangle it from your ceiling with a string. It looks really cool and you get a new home for a plant :).",
                likes: "0"
            }
        ],
        img: "lightbulb.jpg"
    },
    {
        id: 2,
        title: "Can I recycle this plastic water bottle?",
        author: "A-A-ron",
        date: Date.now(),
        content: "The label came off this water bottle, so I couldn't find a recycle symbol. Otherwise, I would normally consult the info page that talks about the different symbols. Does anyone know if this is still recyclable?",
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