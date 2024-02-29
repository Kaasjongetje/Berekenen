<script lang="ts">
    import DistanceInput from "../inputs/DistanceInput.svelte"
    import SpeedInput from "../inputs/SpeedInput.svelte"
    import TimeOutput from "../outputs/TimeOutput.svelte"

    const keyPrefix: string = "time"

    let speed: number
    let distance: number

    $: time = calculateTime(speed, distance)
    
    function calculateTime (speed: number, distance: number): number | null {
        if (isNaN(distance)) return null
        else return (60 / speed) * distance
    }

    function onSpeedSelect (newSpeed: number): void {
        speed = newSpeed
    }

    function onDistanceInput (newDistance: number): void {
        distance = newDistance
    }

</script>

<SpeedInput 
    onSelect={onSpeedSelect}
    {keyPrefix}

    defaultMinutes={8}
    defaultSeconds={1}
    defaultKilometres={7}
    defaultDecametres={50}
/>

<DistanceInput 
    onInput={onDistanceInput}
    {keyPrefix}
    defaultDistance={10}
/>

<div class="dividing-line"></div>

<TimeOutput {time} />