<script lang="ts">
    import Select from "../components/Select.svelte"
    import { timeOptions1to60, kilometreOptions1to60, decametreOptions0to99, timeOptions0to59 } from "../scripts/options"
    import { getSpeed, getMinutesAndSeconds } from "../scripts/conversion"

    export let onSelect: (newSpeed: number) => void

    let minutes: number = 6
    let seconds: number = 0
    let kilometres: number = 10
    let decametres: number = 0

    function handlePaceChange(): void {
        const pace: number = minutes + (seconds / 60);
        [kilometres, decametres] = getSpeed(pace)
        onSelect(60 / pace)
    }

    function handleSpeedChange(): void {
        const speed = kilometres + (decametres / 100);
        [minutes, seconds] = getMinutesAndSeconds(60 / speed)
        onSelect(speed)
    }

    function onMinuteSelect (newMinutes: number): void {
        minutes = newMinutes
        if (minutes === 60) seconds = 0
        handlePaceChange()
    }

    function onSecondSelect (newSeconds: number): void {
        if (minutes !== 60) {
            seconds = newSeconds
            handlePaceChange()
        }
    }

    function onKilometreSelect (newKilometres: number): void {
        kilometres = newKilometres
        if (kilometres === 60) decametres = 0
        handleSpeedChange()
    }

    function onDecametreSelect (newDecametres: number): void {
        if (kilometres !== 60) {
            decametres = newDecametres
            handleSpeedChange()
        }
    }

</script>

<Select selectedValue={minutes} options={timeOptions1to60} onSelect={onMinuteSelect} />
<Select selectedValue={seconds} options={timeOptions0to59} onSelect={onSecondSelect} />

<Select selectedValue={kilometres} options={kilometreOptions1to60} onSelect={onKilometreSelect} />
<Select selectedValue={decametres} options={decametreOptions0to99} onSelect={onDecametreSelect} />