// pace in minuten -> snelheid in kilometers
// pace is tussen 1 en 60
function getSpeed(pace) {
    var totalKilometres = 60 / pace;
    var roundedTotalKilometres = totalKilometres.toFixed(2);
    var _a = roundedTotalKilometres.split("."), kilometres = _a[0], decametres = _a[1];
    return [
        parseInt(kilometres),
        parseInt(decametres)
    ];
}
function getPace(speed) {
    var totalMinutes = 60 / speed;
    var minutes = Math.floor(totalMinutes);
    var seconds = Math.round((totalMinutes - minutes) * 60);
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    return [minutes, seconds];
}
console.log(getPace(5.99));
