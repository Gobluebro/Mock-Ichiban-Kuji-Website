<script>
    import LetterGrid from './LetterGrid.svelte';

    let largeLetters = [{value: 'a'}, {value: 'b'}, {value: 'c'}, {value: 'd'}, ];
    let smallLetters = [{value: 'e'}, {value: 'f'}, {value: 'g'}, {value: 'h'},];
</script>

<h1>Mock Ichiban Kuji Website</h1>

<LetterGrid {largeLetters} {smallLetters} />