<script lang="ts">
    import SpeedInput from "../inputs/SpeedInput.svelte"
    import TimeInput from "../inputs/TimeInput.svelte"
    import DistanceOutput from "../outputs/DistanceOutput.svelte"

    let speed: number = 10
    let time: number = 60

    $: distance = time / (60 / speed)

    function onSpeedSelect (newSpeed: number): void {
        speed = newSpeed
    }

    function onTimeSelect (newTime: number): void {
        time = newTime
    }

</script>

<SpeedInput onSelect={onSpeedSelect} />

<TimeInput onSelect={onTimeSelect} />

<DistanceOutput {distance} />