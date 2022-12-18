<script>
    import LargeLetter  from './LargeLetter.svelte';
    import SmallLetter  from './SmallLetter.svelte';

     /**
	 * @type {any}
	 */
      export let largeLetters;
      /**
	 * @type {any}
	 */
    export let smallLetters;
    console.log(largeLetters, smallLetters);
</script>

{#each largeLetters as largeLetter}
    <LargeLetter {largeLetter} />
{/each}

{#each smallLetters as smallLetter}
    <SmallLetter {smallLetter} />
{/each}