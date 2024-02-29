<script lang="ts">
    import SpeedInput from "../inputs/SpeedInput.svelte"
    import TimeInput from "../inputs/TimeInput.svelte"
    import DistanceOutput from "../outputs/DistanceOutput.svelte"

    const keyPrefix: string = "distance"

    let speed: number
    let time: number

    $: distance = time / (60 / speed)

    function onSpeedSelect (newSpeed: number): void {
        speed = newSpeed
  
    }

    function onTimeSelect (newTime: number): void {
        time = newTime
    }

</script>

<SpeedInput 
    onSelect={onSpeedSelect} 
    {keyPrefix}
    defaultMinutes={6}
    defaultSeconds={0}
    defaultKilometres={10}
    defaultDecametres={0}
/>

<TimeInput 
    onSelect={onTimeSelect} 
    {keyPrefix}

    defaultHours={0}
    defaultMinutes={30}
    defaultSeconds={0}
/>

<div class="dividing-line"></div>

<DistanceOutput {distance} />