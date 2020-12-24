function formatDuration(time) {
    if (time === 0) {
        const date = new Date();
        return date;
    }
    const year = Math.floor(time / (3600 * 24) / 365.25);
    const days = Math.floor((time / (3600 * 24)) % 365.25);
    const hours = Math.floor((time % (3600 * 24)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    const printYears = year ? `${year} years, ` : "";
    const printDays = days ? `${days} days, ` : "";
    const printHour = hours ? `${hours} hour, ` : "";
    const printMinute = minutes ? `${minutes} minute ` : "";
    const printSeconds = seconds ? `and ${seconds} seconds` : "";

    return `${printYears}${printDays}${printHour}${printMinute}${printSeconds}`;
}

const format = formatDuration(3603453);

console.log(format);

module.exports = formatDuration;
