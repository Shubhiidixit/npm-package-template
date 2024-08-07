// src/index.js

const emojiMap = {
    ":smile:": "😊",
    ":heart:": "❤️",
    ":thumbsup:": "👍",
    ":laughing:": "😂",
    ":crying:": "😭",
    ":sunglasses:": "😎",
    ":sun_with_face:": "🌞",
    ":coffee:": "☕",
    ":memo:": "📝",
    ":birthday:": "🎂",
    ":tada:": "🎉",
    ":beach_with_umbrella:": "🏖️",
    ":briefcase:": "💼",
    ":clap:": "👏",
    ":fire:": "🔥",
    ":star:": "⭐",
    ":rocket:": "🚀",
    ":muscle:": "💪",
    ":wave:": "👋",
    ":wink:": "😉"
    // Add more emoji mappings as needed
};

// Convert text representation of emojis into actual emojis
function convertToEmoji(text) {
    return text.replace(/:\w+:/g, match => emojiMap[match] || match);
}

module.exports = {
    convertToEmoji
};
