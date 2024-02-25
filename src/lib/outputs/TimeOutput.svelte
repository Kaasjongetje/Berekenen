<script lang="ts">
    import { getTime } from "../scripts/conversion"
    import { formatTime } from "../scripts/utils"

    export let time: number | null

    let [hours, minutes, seconds] = getTime(0)

    $: if (time) {
        [hours, minutes, seconds] = getTime(time)
    }

</script>

{#if time}
    <span>{formatTime(hours)}</span>
    <span>:</span>
    <span>{formatTime(minutes)}</span>
    <span>:</span>
    <span>{formatTime(seconds)}</span>
{/if}