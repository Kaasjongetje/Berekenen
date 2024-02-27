import type { Option } from "../components/Select.svelte"

export function formatTime (time: number): string {
    return (
        time < 10 ? `0${time}` : `${time}`
    )
}

export function getNumberFromLocalStorage (key: string, min: number = Number.NEGATIVE_INFINITY, max: number = Number.POSITIVE_INFINITY, mustBeInteger: boolean = false): number | null {
    const value: string | null = localStorage.getItem(key)

    if (!value) return null

    const number: number | undefined = parseFloat(value)

    if (isNaN(number)) return null

    if (mustBeInteger) {
        if (!Number.isInteger(number)) return null
    }

    if (number < min || max < number) return null

    return number
}

export function createOptions (start: number, end: number, appendZeroBeforeOneCharacterNumbers: boolean): Option[] {
    const options: Option[] = []

    for (let i: number = start; i <= end; i++) {
        const label: string = appendZeroBeforeOneCharacterNumbers? formatTime(i) : `${i}`

        options.push({
            value: i,
            label
        })
    }

    return options
}