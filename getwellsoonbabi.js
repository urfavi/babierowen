function giveItem(item) {
    let message = '';
    switch(item) {
        case 'chocolate':
            message = "🍫 Yummy! What a sweet tooth but u dun like too much sweets eh!";
            break;
        case 'flower':
            message = "🌸 A flower (me) to brighten your day!";
            break;
        case 'headphones':
            message = "🎧 Listen to Coffee by beabadoobee babiee";
            break;
        case 'medicine':
            message = "💊 Don't forget to take your meds huhu sge rakag say 'okay ra lagi ko' but you not!";
            break;
        case 'cat':
            message = "🐱 Lando and buchik wants to play with u baya! MEOWWW";
            break;
        case 'rest':
            message = "🛏️ Perfect choice babi! Mag rest kaa!";
            break;
        case 'ramen':
            message = "Warm noodles for your tummy 🍜 eat ka haa!";
            break;
        default:
            message = "Here's something special for you!";
    }
    document.getElementById('message').innerText = message;
}
