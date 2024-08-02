// src/index.js

const emojiMap = {
    ":smile:": "😊",
    ":heart:": "❤️",
    ":thumbsup:": "👍",
    ":laughing:": "😂",
    ":crying:": "😭",
    ":sunglasses:": "😎",
    // Add more emoji mappings as needed
};

// Convert text representation of emojis into actual emojis
function convertToEmoji(text) {
    return text.replace(/:\w+:/g, match => emojiMap[match] || match);
}

module.exports = {
    convertToEmoji
};
