function dateFormat(time) {
    const dt = new Date(time);

    const y = dt.getFullYear();
    const m = padZero(dt.getMonth() + 1);
    const d = padZero(dt.getDay() + 1);
    
    const h = padZero(dt.getHours());
    const mm = padZero(dt.getMinutes());
    const ss = padZero(dt.getSeconds());
    
    return `${y}-${m}-${d} ${h}:${mm}:${ss}`
}

function padZero(num) {
    return num <= 9 ? '0' + num : num;
}

module.exports = {
    dateFormat
}