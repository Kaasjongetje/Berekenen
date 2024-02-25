<script lang="ts">
    import DistanceInput from "../inputs/DistanceInput.svelte"
    import TimeInput from "../inputs/TimeInput.svelte"
    import SpeedOutput from "../outputs/SpeedOutput.svelte"

    let totalKilometres: number | undefined
    let totalMinutes: number

    function onDistanceInput (newTotalKilometres: number | undefined): void {
        totalKilometres = newTotalKilometres
        console.log(newTotalKilometres)
    }

    function onTimeSelect (newTotalMinutes: number): void {
        totalMinutes = newTotalMinutes
    }

</script>

<DistanceInput onInput={onDistanceInput} />

<TimeInput onSelect={onTimeSelect} />

<SpeedOutput />