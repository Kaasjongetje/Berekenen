<script lang="ts">
    import { getTime } from "../scripts/conversion"
    import { formatTime } from "../scripts/utils"

    export let time: number | null

    let [hours, minutes, seconds] = getTime(0)

    $: if (time) {
        [hours, minutes, seconds] = getTime(time)
    }

</script>

<div class="field-wrapper">
    <span class="title">Tijd</span>
    <span class="unit">uur:min:sec</span>
    <div class="value-wrapper">
        {#if time}
            <span class="output-value">{formatTime(hours)}</span>
            <span>:</span>
            <span class="output-value">{formatTime(minutes)}</span>
            <span>:</span>
            <span class="output-value">{formatTime(seconds)}</span>
        {/if}
    </div>
</div>