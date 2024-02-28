<script lang="ts">
    import { getNumberFromLocalStorage } from "../scripts/utils";
    import { onMount } from "svelte"

    export let onInput: (totalKilometres: number) => void
    export let keyPrefix: string
    export let defaultDistance: number

    const distanceKey: string = `${keyPrefix}-distance`

    let distanceInput: number | null = getNumberFromLocalStorage(distanceKey) || defaultDistance

    onMount(() => {
        onInput(distanceInput === null ? NaN : distanceInput)
    })

    function handleInput() {
        onInput(distanceInput === null ? NaN : distanceInput)
        localStorage.setItem(distanceKey, distanceInput ? distanceInput.toString() : "")
    }

</script>

<div class="field-wrapper">
    <span class="title">Afstand</span>
    <div class="value-wrapper">
        <input bind:value={distanceInput}
            class="distance-value"
            on:input={handleInput}
            type="number"
        >
    </div>
</div>