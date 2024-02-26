<script lang="ts">
    export let distance: number
</script>

<div class="value-wrapper">
    <span class="distance-value">
        {distance.toFixed(2).replace(".", ",")}
    </span>
</div>