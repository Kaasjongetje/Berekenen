<script lang="ts">
    import { onMount } from "svelte";
    import Select from "../components/Select.svelte"
    import type { Option } from "../components/Select.svelte"
    import { createOptions, getNumberFromLocalStorage } from "../scripts/utils"

    const minHours: number = 0
    const maxHours: number = 11

    const minMinutes: number = 0
    const maxMinutes: number = 59

    const minSeconds: number = 0
    const maxSeconds: number = 59

    const hourOptions: Option[] = createOptions(minHours, maxHours, true)
    const minuteOptions: Option[] = createOptions(minMinutes, maxMinutes, true)
    const secondOptions: Option[] = createOptions(minSeconds, maxSeconds, true)

    export let keyPrefix: string
    export let onSelect: (totalMinutes: number) => void

    export let defaultHours: number
    export let defaultMinutes: number
    export let defaultSeconds: number

    const hoursKey: string = `${keyPrefix}-time-hours`
    const minutesKey: string = `${keyPrefix}-time-minutes`
    const secondsKey: string = `${keyPrefix}-time-seconds`

    let hours: number = getNumberFromLocalStorage(hoursKey, minHours, maxHours, true) ?? defaultHours 
    let minutes: number = getNumberFromLocalStorage(minutesKey, minMinutes, maxMinutes, true) ?? defaultMinutes
    let seconds: number = getNumberFromLocalStorage(secondsKey, minSeconds, maxSeconds, true) ?? defaultSeconds

    onMount(callOnSelect)

    function callOnSelect(): void {
        onSelect(
            (hours * 60) + minutes + (seconds / 60)
        )
    }

    function onHourSelect (newHours: number) {
        hours = newHours
        localStorage.setItem(hoursKey, hours.toString())
        callOnSelect()
    }

    function onMinuteSelect (newMinutes: number): void {
        minutes = newMinutes
        localStorage.setItem(minutesKey, minutes.toString())
        callOnSelect()
    }

    function onSecondSelect (newSeconds: number): void {
        seconds = newSeconds
        localStorage.setItem(secondsKey, seconds.toString())
        callOnSelect()
    }

</script>

<div class="field-wrapper">
    <span class="title">Tijd</span>
    <span class="unit">uur:min:sec</span>
    <div class="value-wrapper">
        <Select selectedValue={hours} options={hourOptions} onSelect={onHourSelect} />
        <span>:</span>
        <Select selectedValue={minutes} options={minuteOptions} onSelect={onMinuteSelect} />
        <span>:</span>
        <Select selectedValue={seconds} options={secondOptions} onSelect={onSecondSelect} />
    </div>
</div>