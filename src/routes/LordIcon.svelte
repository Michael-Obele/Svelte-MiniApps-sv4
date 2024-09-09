<script lang="ts">
	export let src: string;
	export let trigger: string = 'loop-on-hover'; // Default trigger
	export let colors: string = 'primary:red,secondary:green'; // Default colors
	export let dir: 'left' | 'right' = 'right';
	var float: string;
	if (dir == 'left') {
		float = 'float-left';
	} else {
		float = 'float-right';
	}
</script>

<lord-icon
	target="div"
	src="https://cdn.lordicon.com/{src}.json"
	{colors}
	{trigger}
	class="float-{dir == 'left' ? 'left' : 'right'} m-3 h-16 w-16 pt-5 md:h-24 md:w-24"
></lord-icon>
