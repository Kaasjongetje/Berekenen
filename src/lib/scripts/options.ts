import type { Option } from "../components/Select.svelte"
import { formatTime } from "./utils"

export const timeOptions0to59: Option[] = createOptions(0, 59, true)

export const timeOptions1to60: Option[] = createOptions(1, 60, true)

export const kilometreOptions1to60: Option[] = createOptions(1, 60, false)

export const decametreOptions0to99: Option[] = createOptions(0, 99, false)

function createOptions (start: number, end: number, appendZeroBeforeOneCharacterNumbers: boolean): Option[] {
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