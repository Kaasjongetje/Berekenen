// Om te testen:
// tsc src/lib/scripts/conversion.ts --outFile tests/playground.js && node tests/playground.js

// pace is tussen 1 en 60
export function getSpeed (pace: number): [number, number] {
    const totalKilometres: number = 60 / pace

    const roundedTotalKilometres: string = totalKilometres.toFixed(2)
    const [kilometres, decametres]: string[] = roundedTotalKilometres.split(".")

    return [
        parseInt(kilometres),
        parseInt(decametres)
    ]
}

export function getMinutesAndSeconds (totalMinutes: number): [number, number] {
    let minutes: number = Math.floor(totalMinutes)
    let seconds: number = Math.round(
        (totalMinutes - minutes) * 60
    )

    if (seconds === 60) {
        minutes++
        seconds = 0
    }

    return [minutes, seconds]
}

export function getTime (totalMinutes: number): [number, number, number] {
    const hours: number = Math.floor(totalMinutes / 60)
    const [minutes, seconds] = getMinutesAndSeconds(totalMinutes - (hours * 60))
    return [hours, minutes, seconds]
}