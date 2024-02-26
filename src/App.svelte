<script lang="ts" context="module">
    export enum CalculationType {
        SPEED = "Snelheid",
        DISTANCE = "Afstand",
        TIME = "Tijd" 
    }
</script>

<script lang="ts">
    import "./style.scss"
    import CalculationTypeSelector from "./lib/components/CalculationTypeSelector.svelte"

    import SpeedCalculationMenu from "./lib/menus/SpeedCalculationMenu.svelte"
    import DistanceCalculationMenu from "./lib/menus/DistanceCalculationMenu.svelte"
    import TimeCalculationMenu from "./lib/menus/TimeCalculationMenu.svelte"

    let selectedCalculationType: CalculationType = CalculationType.DISTANCE

    function onSelect (calculationType: CalculationType): void {
        if (selectedCalculationType !== calculationType) {
            selectedCalculationType = calculationType
        }
    }

</script>

<CalculationTypeSelector 
{selectedCalculationType}
{onSelect} 
/>

<div class="calculation-menu-container">
    {#if selectedCalculationType === "Snelheid"}
    <SpeedCalculationMenu />
    {:else if selectedCalculationType === "Afstand"}
        <DistanceCalculationMenu />
    {:else if selectedCalculationType === "Tijd"}
        <TimeCalculationMenu />
    {/if}
</div>
