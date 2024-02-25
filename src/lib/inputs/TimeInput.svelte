<script lang="ts">
    import Select from "../components/Select.svelte"
    import { timeOptions0to59 } from "../scripts/options"

    export let onSelect: (totalMinutes: number) => void

    let hours: number = 0
    let minutes: number = 0
    let seconds: number = 0

    function callOnSelect(): void {
        onSelect(
            (hours * 60) + minutes + (seconds / 60)
        )
    }

    function onHourSelect (newHours: number) {
        hours = newHours
        callOnSelect()
    }

    function onMinuteSelect (newMinutes: number): void {
        minutes = newMinutes
        callOnSelect()
    }

    function onSecondSelect (newSeconds: number): void {
        seconds = newSeconds
        callOnSelect()
    }

</script>

<Select selectedValue={hours} options={timeOptions0to59} onSelect={onHourSelect} />
<Select selectedValue={minutes} options={timeOptions0to59} onSelect={onMinuteSelect} />
<Select selectedValue={seconds} options={timeOptions0to59} onSelect={onSecondSelect} />