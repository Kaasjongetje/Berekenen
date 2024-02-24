<script lang="ts">
    import Select from "../components/Select.svelte"
    import { options0to59 } from "../scripts/options"

    let hours: number = 0
    let minutes: number = 0
    let seconds: number = 0

    function onHourSelect (newHours: number) {
        hours = newHours
    }

</script>

<Select selectedValue={hours} options={options0to59} onSelect={onHourSelect} />