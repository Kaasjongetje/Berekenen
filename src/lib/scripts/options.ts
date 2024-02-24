import type { Option } from "../components/Select.svelte"

export const options0to59: Option[] = createOptions(0, 59)

function createOptions (start: number, end: number): Option[] {
    const options: Option[] = []

    for (let i: number = start; i <= end; i++) {
        options.push({
            value: i,
            label: i < 10 ? `0${i}` : `${i}`
        })
    }

    return options
}