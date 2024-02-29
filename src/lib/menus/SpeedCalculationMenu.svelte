<script lang="ts">
    import DistanceInput from "../inputs/DistanceInput.svelte"
    import TimeInput from "../inputs/TimeInput.svelte"
    import SpeedOutput from "../outputs/SpeedOutput.svelte"

    const keyPrefix: string = "speed"

    let distance: number
    let time: number

    $: speed = getSpeed(distance, time)

    function getSpeed (distance: number, time: number): number | null {
        if (isNaN(distance)) {
            return null
        } else {
            return 60 / (time / distance)
        }
    }

    function onDistanceInput (newDistance: number): void {
        distance = newDistance
    }

    function onTimeSelect (newTime: number): void {
        time = newTime
    }

</script>

<DistanceInput 
    onInput={onDistanceInput} 
    {keyPrefix}
    defaultDistance={6}    
/>

<TimeInput 
    onSelect={onTimeSelect} 
    {keyPrefix}

    defaultHours={1}
    defaultMinutes={0}
    defaultSeconds={0}
/>

<div class="dividing-line"></div>

<SpeedOutput {speed} />