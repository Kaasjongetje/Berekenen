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
    <div class="field-wrapper">
        <span class="title">Min/km</span>
        <div class="value-wrapper">
            {#if speed}
                <span class="output-value">{minutes}</span>
                <span>:</span>
                <span class="output-value">{seconds}</span>
            {/if}
        </div>
    </div>

    <div class="field-wrapper">
        <span class="title">Km/uur</span>
        <div class="value-wrapper">
            {#if speed}
                <span class="output-value">{kilometres}</span>
                <span>,</span>
                <span class="output-value">{decametres}</span>
            {/if}
        </div>
    </div>
</div>