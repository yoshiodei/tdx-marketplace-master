<script>
	export let classes = ''
	let showActions = false
</script>

<tr
	class="border border-gray-200 hover:border-gray-300 hover:shadow-md {classes}"
	{...$$restProps}
	on:mouseenter={() => (showActions = true)}
	on:mouseleave={() => (showActions = false)}
>
	<slot {showActions} />
</tr>
