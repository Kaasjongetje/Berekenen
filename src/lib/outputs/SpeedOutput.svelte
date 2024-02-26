<script lang="ts">
    import { getMinutesAndSeconds } from "../scripts/conversion"

    export let speed: number | null

    let [minutes, seconds]: [number, number] = [0, 0] 
    let [kilometres, decametres]: [string, string] = ["", ""]

    $: if (speed) {
        [minutes, seconds] = getMinutesAndSeconds(60 / speed);
        [kilometres, decametres] = speed.toFixed(2).split(".")
    }
</script>

<div class="speed-wrapper">
    <div class="value-wrapper">
        {#if speed}
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
        {/if}
    </div>

    <div class="value-wrapper">
        {#if speed}
            <span>{kilometres}</span>
            <span>,</span>
            <span>{decametres}</span>
        {/if}
    </div>
</div>