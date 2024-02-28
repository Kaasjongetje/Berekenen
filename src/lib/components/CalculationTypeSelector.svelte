<script lang="ts">
    import { CalculationType } from "../../App.svelte";

    export let selectedCalculationType: CalculationType
    export let onSelect: (calculationType: CalculationType) => void

    const calculationTypes: CalculationType[] = Object.values(CalculationType)
</script>

<nav class="calculation-type-selector">
    <ul class="calculation-type-options">
        {#each calculationTypes as calculationType (calculationType)}
            <button
                class="calculation-type"
                class:selected={calculationType === selectedCalculationType}
                on:click={() => onSelect(calculationType)}
            >
                {calculationType}
            </button>
        {/each}
    </ul>
</nav>