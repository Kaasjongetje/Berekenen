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
    import NewVersionToast from "./lib/components/NewVersionToast.svelte"

    const calculationTypeKey: string = "calculation-type"

    let selectedCalculationType: CalculationType = loadCalculationType() ?? CalculationType.SPEED

    function onSelect (calculationType: CalculationType): void {
        if (selectedCalculationType !== calculationType) {
            selectedCalculationType = calculationType
            localStorage.setItem(calculationTypeKey, calculationType)
        }
    }

    function loadCalculationType(): CalculationType | null {
        const value: string | null = localStorage.getItem(calculationTypeKey)

        if (value === null) return null

        const calculationTypeValues: string[] = Object.values(CalculationType)

        if (calculationTypeValues.includes(value)) {
            return value as CalculationType
        } else {
            return null
        }
    }

</script>

<CalculationTypeSelector 
{selectedCalculationType}
{onSelect} 
/>

<main class="calculation-menu-container">
    <div class="calculation-menu-wrapper">
        {#if selectedCalculationType === "Snelheid"}
        <SpeedCalculationMenu />
        {:else if selectedCalculationType === "Afstand"}
            <DistanceCalculationMenu />
        {:else if selectedCalculationType === "Tijd"}
            <TimeCalculationMenu />
        {/if}
    </div>
</main>

<NewVersionToast />
