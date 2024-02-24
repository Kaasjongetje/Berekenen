export type Time = {
    hours: number,
    minutes: number,
    seconds: number
}

export function minutesToTime (minutes: number): Time {


    return {
        hours: 0,
        seconds: 0,
        minutes: 0
    }
} 