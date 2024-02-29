<script lang="ts">
    export let distance: number
</script>

<div class="field-wrapper">
    <span class="title">Afstand</span>
    <span class="unit">km</span>
    <div class="value-wrapper">
        <span class="distance-value">
            {distance.toFixed(2).replace(".", ",")}
        </span>
    </div>
</div>