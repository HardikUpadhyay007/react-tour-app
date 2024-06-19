import eiffelTowerImage from "./assets/eiffeltower.jpg";
import chinaWallImage from "./assets/chinawall.jpg";
import christImage from "./assets/christ.jpg";
import pyramidsOfGizaImage from "./assets/pyramidofgiza.jpg";
import athensImage from "./assets/athens.jpg";
import grandImage from "./assets/grandcanyon.jpg";
import tajMahalImage from "./assets/tajmahal.jpg";
const data = [
    {
        id: 1,
        name: "Eiffel Tower",
        info: "The iconic iron lattice tower in Paris, France, built for the 1889 World's Fair. It stands 324 meters tall and was the tallest structure in the world until 1930.",
        price: `$2500`,
        image: eiffelTowerImage,
    },
    {
        id: 2,
        name: "Great Wall of China",
        info: "A series of fortifications built across the northern borders of China to protect the country from invasions. It stretches over 13,000 miles and is one of the most impressive architectural achievements in history.",
        price: `$3000`,
        image: chinaWallImage,
    },
    {
        id: 3,
        name: "Taj Mahal",
        info: "A white marble mausoleum in Agra, India, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It's considered one of the most beautiful examples of Mughal architecture.",
        price: `$2000`,
        image: tajMahalImage,
    },
    {
        id: 4,
        name: "Grand Canyon",
        info: "A steep-sided canyon carved by the Colorado River in Arizona, USA. It's one of the most iconic natural wonders in the United States, with a depth of over 1.6 kilometers and a length of 446 kilometers.",
        price: `$4000`,
        image: grandImage,
    },
    {
        id: 5,
        name: "Pyramids of Giza",
        info: "Ancient Egyptian pyramids on the outskirts of modern-day Cairo, built as tombs for pharaohs around 2580 BC. The largest pyramid, the Great Pyramid of Giza, is one of the Seven Wonders of the Ancient World.",
        price: `$3500`,
        image: pyramidsOfGizaImage,
    },
    {
        id: 6,
        name: "Christ the Redeemer",
        info: "A Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, designed by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa. It's one of the largest Art Deco statues in the world.",
        price: `$2800`,
        image: christImage,
    },
    {
        id: 7,
        name: "Acropolis of Athens",
        info: "A citadel located on a high rocky outcrop above the city of Athens, Greece, home to the Parthenon, a temple dedicated to the goddess Athena. It's a symbol of ancient Greek culture and architecture.",
        price: `$3200`,
        image: athensImage,
    },
];
export default data;
