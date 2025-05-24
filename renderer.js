const colorData = [
  { color: "Red", hex: "#FF0000", weather: "Snowy", mood: "Happy", event: "Birthday" },
  { color: "Blue", hex: "#0000FF", weather: "Rainy", mood: "Sad", event: "Vacation" },
  { color: "Yellow", hex: "#FFFF00", weather: "Sunny", mood: "Excited", event: "Vacation" },
  { color: "Orange", hex: "#FFA500", weather: "Cloudy", mood: "Sad", event: "Birthday" },
  { color: "Pink", hex: "#FFC0CB", weather: "Sunny", mood: "Happy", event: "Vacation" },
  { color: "Brown", hex: "#964B00", weather: "Rainy", mood: "Sad", event: "Wedding" },
  { color: "White", hex: "#FFFFFF", weather: "Snowy", mood: "Peaceful", event: "Wedding" },
  { color: "Gold", hex: "#FFD700", weather: "Sunny", mood: "Happy", event: "Wedding" },
  { color: "Silver", hex: "#C0C0C0", weather: "Cloudy", mood: "Excited", event: "Concert" },
  { color: "Turquoise", hex: "#40E0D0", weather: "Sunny", mood: "Adventurous", event: "Vacation" },
  { color: "Magenta", hex: "#FF00FF", weather: "Rainy", mood: "Excited", event: "Concert" },
  { color: "Lime", hex: "#00FF00", weather: "Cloudy", mood: "Energetic", event: "Birthday" },
  { color: "Cyan", hex: "#00FFFF", weather: "Sunny", mood: "Adventurous", event: "Vacation" },
  { color: "Pastel Blue", hex: "#AEC6CF", weather: "Sunny", mood: "Peaceful", event: "Vacation" },
  { color: "Mint Green", hex: "#98FF98", weather: "Snowy", mood: "Peaceful", event: "Concert" },
  { color: "Champagne", hex: "#F7E7CE", weather: "Cloudy", mood: "Peaceful", event: "Birthday" },
  { color: "Sunset Orange", hex: "#FD5E53", weather: "Cloudy", mood: "Happy", event: "Birthday" },
  { color: "Sky Blue", hex: "#87CEEB", weather: "Snowy", mood: "Peaceful", event: "Vacation" },
  { color: "Ivory", hex: "#FFFFF0", weather: "Sunny", mood: "Sad", event: "Wedding" },
  { color: "Mustard Yellow", hex: "#FFDB58", weather: "Cloudy", mood: "Excited", event: "Concert" },
  { color: "Aqua", hex: "#00FFFF", weather: "Sunny", mood: "Happy", event: "Birthday" },
  { color: "Powder Pink", hex: "#FFB6C1", weather: "Snowy", mood: "Excited", event: "Birthday" },
  { color: "Amber", hex: "#FFBF00", weather: "Sunny", mood: "Excited", event: "Concert" },
  { color: "Crimson", hex: "#DC143C", weather: "Rainy", mood: "Excited", event: "Wedding" },
  { color: "Periwinkle", hex: "#CCCCFF", weather: "Cloudy", mood: "Peaceful", event: "Vacation" },
  { color: "Beige", hex: "#F5F5DC", weather: "Cloudy", mood: "Peaceful", event: "Wedding" },
  { color: "Steel Blue", hex: "#4682B4", weather: "Rainy", mood: "Happy", event: "Concert" },
  { color: "Blush Pink", hex: "#DE5D83", weather: "Sunny", mood: "Peaceful", event: "Birthday" },
  { color: "Dusty Rose", hex: "#DCAE96", weather: "Cloudy", mood: "Happy", event: "Vacation" },
  { color: "Midnight Blue", hex: "#191970", weather: "Cloudy", mood: "Adventurous", event: "Concert" },
  { color: "Terracotta", hex: "#E2725B", weather: "Sunny", mood: "Excited", event: "Wedding" },
  { color: "Emerald", hex: "#50C878", weather: "Rainy", mood: "Adventurous", event: "Birthday" },
  { color: "Cinnamon", hex: "#D2691E", weather: "Snowy", mood: "Sad", event: "Birthday" },
  { color: "Obsidian", hex: "#0B0B0B", weather: "Rainy", mood: "Sad", event: "Concert" },
  { color: "Moss Green", hex: "#8A9A5B", weather: "Snowy", mood: "Excited", event: "Wedding" },
  { color: "Brick Red", hex: "#CB4154", weather: "Rainy", mood: "Excited", event: "Vacation" },
  { color: "Buttercup Yellow", hex: "#F6E05E", weather: "Sunny", mood: "Peaceful", event: "Birthday" },
  { color: "Lilac Blue", hex: "#C8A2C8", weather: "Snowy", mood: "Excited", event: "Vacation" },
  { color: "Mauve", hex: "#E0B0FF", weather: "Rainy", mood: "Happy", event: "Vacation" },
  { color: "Pine Green", hex: "#01796F", weather: "Cloudy", mood: "Sad", event: "Birthday" },
  { color: "Amber Gold", hex: "#FFBF00", weather: "Sunny", mood: "Happy", event: "Concert" },
  { color: "Burgundy", hex: "#800020", weather: "Cloudy", mood: "Sad", event: "Wedding" },
  { color: "Denim Blue", hex: "#1560BD", weather: "Rainy", mood: "Adventurous", event: "Vacation" },
  { color: "Pistachio", hex: "#93C572", weather: "Sunny", mood: "Peaceful", event: "Concert" },
  { color: "Raspberry", hex: "#E30B5C", weather: "Rainy", mood: "Peaceful", event: "Concert" },
  { color: "Flamingo Pink", hex: "#FC8EAC", weather: "Snowy", mood: "Excited", event: "Concert" },
  { color: "Ice Blue", hex: "#99FFFF", weather: "Cloudy", mood: "Peaceful", event: "Concert" },
  { color: "Saffron", hex: "#F4C430", weather: "Sunny", mood: "Adventurous", event: "Wedding" },
  { color: "Rust", hex: "#B7410E", weather: "Rainy", mood: "Happy", event: "Vacation" },
  { color: "Peacock Green", hex: "#00A693", weather: "Cloudy", mood: "Sad", event: "Concert" },
  { color: "Wisteria", hex: "#C9A0DC", weather: "Sunny", mood: "Excited", event: "Birthday" },
  { color: "Cerise", hex: "#DE3163", weather: "Sunny", mood: "Sad", event: "Vacation" },
  { color: "Frost", hex: "#E5F9F6", weather: "Cloudy", mood: "Happy", event: "Wedding" },
  { color: "Charcoal", hex: "#36454F", weather: "Rainy", mood: "Energetic", event: "Concert" },
  { color: "Pebble Gray", hex: "#B0C4DE", weather: "Cloudy", mood: "Adventurous", event: "Vacation" },
  { color: "Honeydew", hex: "#F0FFF0", weather: "Rainy", mood: "Adventurous", event: "Wedding" },
  { color: "Lilac", hex: "#C8A2C8", weather: "Snowy", mood: "Excited", event: "Birthday" },
  { color: "Apricot", hex: "#FBCEB1", weather: "Sunny", mood: "Peaceful", event: "Vacation" },
  { color: "Wintergreen", hex: "#20B2AA", weather: "Snowy", mood: "Adventurous", event: "Concert" },
  { color: "Turmeric", hex: "#E27D60", weather: "Rainy", mood: "Sad", event: "Birthday" },
  { color: "Rosewood", hex: "#65000B", weather: "Sunny", mood: "Peaceful", event: "Wedding" },
  { color: "Teal", hex: "#008080", weather: "Cloudy", mood: "Adventurous", event: "Birthday" },
  { color: "Coral", hex: "#FF7F50", weather: "Cloudy", mood: "Adventurous", event: "None" },
  { color: "Slate Gray", hex: "#708090", weather: "Cloudy", mood: "Adventurous", event: "Wedding" },
  { color: "Tangerine", hex: "#F28500", weather: "Cloudy", mood: "Excited", event: "Birthday" },
  { color: "Olive", hex: "#808000", weather: "Cloudy", mood: "Excited", event: "None" },
  { color: "Fuchsia", hex: "#FF00FF", weather: "Cloudy", mood: "Excited", event: "Vacation" },
  { color: "Cobalt Blue", hex: "#0047AB", weather: "Cloudy", mood: "Excited", event: "Wedding" },
  { color: "Lavender", hex: "#E6E6FA", weather: "Cloudy", mood: "Happy", event: "Concert" },
  { color: "Dusty Gray", hex: "#A8989E", weather: "Cloudy", mood: "Happy", event: "None" },
  { color: "Seafoam", hex: "#93E9BE", weather: "Cloudy", mood: "Peaceful", event: "None" },
  { color: "Ash Gray", hex: "#B2BEB5", weather: "Cloudy", mood: "Sad", event: "None" },
  { color: "Fern Green", hex: "#4F7942", weather: "Cloudy", mood: "Sad", event: "Vacation" },
  { color: "Indigo", hex: "#4B0082", weather: "Rainy", mood: "Adventurous", event: "Concert" },
  { color: "Brick Orange", hex: "#C14A09", weather: "Rainy", mood: "Adventurous", event: "None" },
  { color: "Mulberry", hex: "#C54B8C", weather: "Rainy", mood: "Excited", event: "Birthday" },
  { color: "Ash Blue", hex: "#AFC1D6", weather: "Rainy", mood: "Excited", event: "None" },
  { color: "Taupe", hex: "#483C32", weather: "Rainy", mood: "Happy", event: "Birthday" },
  { color: "Cream", hex: "#FFFDD0", weather: "Rainy", mood: "Happy", event: "None" },
  { color: "Almond", hex: "#EFDECD", weather: "Rainy", mood: "Happy", event: "Wedding" },
  { color: "Pearl", hex: "#EAE0C8", weather: "Rainy", mood: "Peaceful", event: "Birthday" },
  { color: "Slate Blue", hex: "#6A5ACD", weather: "Rainy", mood: "Peaceful", event: "None" },
  { color: "Seafoam", hex: "#93E9BE", weather: "Rainy", mood: "Peaceful", event: "Vacation" },
  { color: "Powder Blue", hex: "#B0E0E6", weather: "Rainy", mood: "Peaceful", event: "Wedding" },
  { color: "Ink Black", hex: "#0F0F0F", weather: "Rainy", mood: "Sad", event: "None" },
  { color: "Cactus Green", hex: "#227F55", weather: "Snowy", mood: "Adventurous", event: "Birthday" },
  { color: "Mocha", hex: "#837060", weather: "Snowy", mood: "Adventurous", event: "None" },
  { color: "Marigold", hex: "#EAA221", weather: "Snowy", mood: "Adventurous", event: "Vacation" },
  { color: "Royal Blue", hex: "#4169E1", weather: "Snowy", mood: "Adventurous", event: "Wedding" },
  { color: "Cherry Blossom Pink", hex: "#FFB7C5", weather: "Snowy", mood: "Excited", event: "None" },
  { color: "Pearl White", hex: "#F8F6F0", weather: "Snowy", mood: "Happy", event: "Concert" },
  { color: "Frost Blue", hex: "#D5F6FF", weather: "Snowy", mood: "Happy", event: "None" },
  { color: "Snowdrop", hex: "#F4FAFB", weather: "Snowy", mood: "Happy", event: "Vacation" },
  { color: "Seafoam", hex: "#93E9BE", weather: "Snowy", mood: "Happy", event: "Wedding" },
  { color: "Onyx", hex: "#353839", weather: "Snowy", mood: "Peaceful", event: "Birthday" },
  { color: "Storm Gray", hex: "#71797E", weather: "Snowy", mood: "Peaceful", event: "None" },
  { color: "Shadow Gray", hex: "#778899", weather: "Snowy", mood: "Sad", event: "Concert" },
  { color: "Haze", hex: "#DCDCDC", weather: "Snowy", mood: "Sad", event: "None" },
  { color: "Taupe", hex: "#483C32", weather: "Snowy", mood: "Sad", event: "Vacation" },
  { color: "Graphite", hex: "#251607", weather: "Snowy", mood: "Sad", event: "Wedding" },
  { color: "Mint", hex: "#AAF0D1", weather: "Sunny", mood: "Adventurous", event: "Birthday" },
  { color: "Carmine", hex: "#960018", weather: "Sunny", mood: "Adventurous", event: "Concert" },
  { color: "Oat", hex: "#CDC2A0", weather: "Sunny", mood: "Adventurous", event: "None" },
  { color: "Neon Green", hex: "#39FF14", weather: "Sunny", mood: "Excited", event: "None" },
  { color: "Powder Blue", hex: "#B0E0E6", weather: "Sunny", mood: "Happy", event: "None" },
  { color: "Forest Green", hex: "#228B22", weather: "Sunny", mood: "Peaceful", event: "None" },
  { color: "Rose Beige", hex: "#E8C4B8", weather: "Sunny", mood: "Sad", event: "Birthday" },
  { color: "Ink Blue", hex: "#203C73", weather: "Sunny", mood: "Sad", event: "Concert" },
  { color: "Dove Gray", hex: "#696969", weather: "Sunny", mood: "Sad", event: "None" }
  ];

function searchColors(weather, mood, event) {
  return colorData.filter(entry =>
    entry.weather.toLowerCase() === weather.toLowerCase() &&
    entry.mood.toLowerCase() === mood.toLowerCase() &&
    (event.toLowerCase() === "none" || entry.event.toLowerCase() === event.toLowerCase())
  );
}

const clickSound = new Audio('assets/click.mp3');

document.getElementById("submitBtn").addEventListener("click", () => {
    clickSound.play();
    const weather = document.getElementById("weather").value;
    const mood = document.getElementById("mood").value;
    const event = document.getElementById("event").value;
    const results = searchColors(weather, mood, event);
    const firstColor = results.length > 0 ? results[0] : null;
    displayColor(firstColor);
});

document.getElementById('surpriseBtn').addEventListener('click', () => {
    clickSound.play();
    const randomColor = colorData[Math.floor(Math.random() * colorData.length)];
    displayColor(randomColor);
});

const copyIcon = document.getElementById("copyIcon");
if (copyIcon) {
    copyIcon.addEventListener("click", () => {
        const hexCodeSpan = document.getElementById("hexCode");
        const hexCode = hexCodeSpan ? hexCodeSpan.textContent : null;
        if (hexCode) {
            navigator.clipboard.writeText(hexCode).then(() => {
                alert("Hex code copied to clipboard!");
            });
        }
    });
}

function displayColor(colorEntry) {
    const resultDiv = document.getElementById("result");
    const circle = document.getElementById("colorCircle");

    if (colorEntry) {
        resultDiv.innerHTML = `
            <div>
                <strong>${colorEntry.color}</strong><br>
                <span style="font-size: 14px; color: #555;">
                    Hex Code: <span id="hexCode">${colorEntry.hex}</span>
                    <span id="copyIcon" style="cursor: pointer;" title="Copy to clipboard">📋</span>
                </span>
            </div>
        `;
        circle.style.backgroundColor = colorEntry.hex;

        const newCopyIcon = document.getElementById("copyIcon");
        newCopyIcon.addEventListener("click", () => {
            navigator.clipboard.writeText(colorEntry.hex).then(() => {
                alert("Hex code copied to clipboard!");
            });
        });
    } else {
        resultDiv.innerHTML = `<div>Hmm, maybe go with a classic French tip?</div>`;
        circle.style.backgroundColor = "transparent";
    }
}

