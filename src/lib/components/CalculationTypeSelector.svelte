<script lang="ts">
    import { CalculationType } from "../../App.svelte";

    export let selectedCalculationType: CalculationType
    export let onSelect: (calculationType: CalculationType) => void

    const calculationTypes: CalculationType[] = Object.values(CalculationType)
</script>

<div class="calculation-type-container">
    {#each calculationTypes as calculationType (calculationType)}
        <span 
            class="calculation-type"
            class:selected={calculationType === selectedCalculationType}
            on:click={() => onSelect(calculationType)}
        >
            {calculationType}
        </span>
    {/each}
</div>