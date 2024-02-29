<script lang="ts">
    import type { Option } from "../components/Select.svelte"
    import Select from "../components/Select.svelte"
    import { createOptions, getNumberFromLocalStorage } from "../scripts/utils"
    import { getSpeed, getMinutesAndSeconds } from "../scripts/conversion"
    import { onMount } from "svelte"

    const minMinutes: number = 1
    const maxMinutes: number = 60
    
    const minSeconds: number = 0
    const maxSeconds: number = 59

    const minKilometres: number = 1
    const maxKilometres: number = 60

    const minDecametres: number = 0
    const maxDecametres: number = 99

    const minuteOptions: Option[] = createOptions(minMinutes, maxMinutes, true) 
    const secondOptions: Option[] = createOptions(minSeconds, maxSeconds, true)
    const kilometreOptions: Option[] = createOptions(minKilometres, maxKilometres, false)
    const decametreOptions: Option[] = createOptions(minDecametres, maxDecametres, true)

    export let keyPrefix: string
    export let onSelect: (newSpeed: number) => void

    export let defaultMinutes: number
    export let defaultSeconds: number
    export let defaultKilometres: number
    export let defaultDecametres: number

    const minutesKey: string = `${keyPrefix}-speed-minutes`
    const secondsKey: string = `${keyPrefix}-speed-seconds`
    const kilometresKey: string = `${keyPrefix}-speed-kilometres`
    const decametresKey: string = `${keyPrefix}-speed-decametres`

    // soms krijg je hier 0 || <default>
    let minutes: number = getNumberFromLocalStorage(minutesKey, minMinutes, maxMinutes, true) ?? defaultMinutes
    let seconds: number = getNumberFromLocalStorage(secondsKey, minSeconds, maxSeconds, true) ?? defaultSeconds
    let kilometres: number = getNumberFromLocalStorage(kilometresKey, minKilometres, maxKilometres, true) ?? defaultKilometres
    let decametres: number = getNumberFromLocalStorage(decametresKey, minDecametres, maxDecametres, true) ?? defaultDecametres

    onMount(() => {
        onSelect(kilometres + (decametres / 100))
    })

    function updateLocalStorage(): void {
        setTimeout(() => {
            localStorage.setItem(minutesKey, minutes.toString())
            localStorage.setItem(secondsKey, seconds.toString())
            localStorage.setItem(kilometresKey, kilometres.toString())
            localStorage.setItem(decametresKey, decametres.toString())
        })
    }

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
        updateLocalStorage()

        if (minutes === 60) seconds = 0

        handlePaceChange()
    }

    function onSecondSelect (newSeconds: number): void {
        if (minutes !== 60) {
            seconds = newSeconds
            updateLocalStorage()
            handlePaceChange()
        }
    }

    function onKilometreSelect (newKilometres: number): void {
        kilometres = newKilometres
        updateLocalStorage()

        if (kilometres === 60) decametres = 0
        
        handleSpeedChange()
    }

    function onDecametreSelect (newDecametres: number): void {
        if (kilometres !== 60) {
            decametres = newDecametres
            updateLocalStorage()
            handleSpeedChange()
        }
    }

</script>

<div class="speed-wrapper">
    <div  class="field-wrapper">
        <span class="title">Tempo</span>
        <span class="unit">Min/km</span>
        <div class="value-wrapper">
            <Select selectedValue={minutes} options={minuteOptions} onSelect={onMinuteSelect} />
            <span>:</span>
            <Select selectedValue={seconds} options={secondOptions} onSelect={onSecondSelect} />
        </div>
    </div>
    
    <div class="field-wrapper">
        <span class="title">Snelheid</span>
        <span class="unit">Km/uur</span>
        <div class="value-wrapper">
            <Select selectedValue={kilometres} options={kilometreOptions} onSelect={onKilometreSelect} />
            <span>,</span>
            <Select selectedValue={decametres} options={decametreOptions} onSelect={onDecametreSelect} />
        </div>
    </div>
</div>