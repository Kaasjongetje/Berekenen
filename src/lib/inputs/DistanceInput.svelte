<script lang="ts">
    export let onInput: (totalKilometres: number) => void

    function handleInput (e: any) {
        onInput(
            parseFloat(e.target.value)
        )
    }

</script>

<input
    on:input={handleInput}
    type="number"
>