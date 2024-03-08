<script lang="ts">
    import { onMount } from "svelte"
    import { fade } from "svelte/transition"

    let showToast: boolean = false

    onMount(setup)

    async function setup(): Promise<void> {
        if (!("serviceWorker" in navigator)) return

        const registration: ServiceWorkerRegistration | undefined = await navigator.serviceWorker.getRegistration()

        if (!registration?.active) return

        navigator.serviceWorker.addEventListener("controllerchange", () => {
            showToast = true
        })
    }

    function handleClick(): void {
        window.location.reload()
    }
</script>

{#if showToast}
    <div 
        class="new-version-toast"
        transition:fade
    >
        <p class="new-version-text">
            Er is een nieuwe versie beschikbaar
        </p>
        
        <button 
            class="refresh-btn"
            on:click={handleClick}
        >
            REFRESHEN
        </button>
    </div>
{/if}

