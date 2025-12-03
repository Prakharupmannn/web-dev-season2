function formatTime(num) {
    return num.toString().padStart(2, '0')
}
function showclock() {
    const now = new Date();
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());

    const time = '${hours}:${minutes}:${seconds}';

    console.clear();
    console.log('🕒 Terminal Clock');
    console.log('================');
    console.log('    ${time}');
}

setInterval(showclock, 1000);