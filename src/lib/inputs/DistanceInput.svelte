<script lang="ts">
    export let onInput: (totalKilometres: number) => void

    function handleInput (e: any) {
        onInput(
            parseFloat(e.target.value)
        )
    }

</script>

<div class="value-wrapper">
    <input
        class="distance-value"
        on:input={handleInput}
        type="number"
    >
</div>