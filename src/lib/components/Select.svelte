<script lang="ts" context="module">
    export type Option = {
        value: any,
        label: string
    }
</script>

<script lang="ts">
    export let selectedValue: any
    export let options: Option[]
    export let onSelect: (newValue: any) => void

    let open: boolean = false
    let hoveredIndex: number | null = null

    $: selectedOption = options.find(option => option.value === selectedValue)

    function handleClick(): void {
        open = !open
    }

    function handleKeydown (e: KeyboardEvent): void {
        switch (e.code) {
            case "Space":
                if (!open) open = true
                break
            case "Escape":
                if (open) open = false
                break
            case "ArrowUp":
            case "ArrowDown":
                handleArrow(e.code === "ArrowUp")
                break
            case "Enter":
                handleEnter()
                break
                
        }
    }

    function handleMouseEnter (index: number): void {
        hoveredIndex = index
    }

    function handleArrow (arrowUpWasPressed: boolean): void {
        if (hoveredIndex === null) {
            hoveredIndex = 0
        } else {
            let newHoveredIndex: number = hoveredIndex + (arrowUpWasPressed? -1 : 1)

            if (0 <= newHoveredIndex && newHoveredIndex < options.length) {
                hoveredIndex = newHoveredIndex
            }
        }
    }

    function handleEnter(): void {
        if (open && hoveredIndex) {
            const hoveredValue: any = options[hoveredIndex].value

            if (hoveredValue !== selectedValue) {
                onSelect(hoveredValue)
            }
        }

        open = !open
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div 
    class="select"
    tabindex="0"
    class:open={open}

    on:click={handleClick}
    on:keydown={handleKeydown}
>
    <span class="select-value">
        {selectedOption?.label}
    </span>

    <div class="select-options">
        {#each options as option, index (option) }
            <span 
                class="select-option"
                class:hovered={index === hoveredIndex}
                class:selected={option.value === selectedValue}

                on:mouseenter={() => handleMouseEnter(index)}
                on:click={() => onSelect(option.value)}
            >
                {option.label}
            </span>
        {/each}
    </div>
</div>

