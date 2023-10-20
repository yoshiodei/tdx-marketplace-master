<script>
	export let disabled = false
	export let contextualColor = 'primary'
	export let size = 'normal'
	export let outline = false
	export let classes = ''
</script>

<button
	on:click|preventDefault
	class="my-4 focus:outline-none focus:ring m-auto py-2 px-6 font-bold rounded transition-colors duration-200 disabled:opacity-75 disabled:pointer-events-none
	{contextualColor === 'primary'
		? 'bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-500 '
		: ''} {contextualColor === 'secondary'
		? 'bg-gray-500 text-white hover:bg-gray-700 focus:ring-gray-500 '
		: ''} {contextualColor === 'danger'
		? 'bg-red-700 text-white hover:bg-red-800 focus:ring-red-500 '
		: ''} {contextualColor === 'light'
		? 'font-semibold text-gray-600 hover:bg-gray-300 hover:text-gray-900focus:ring-gray-500 '
		: ''} {size === 'small' ? 'px-3 ' : ''} {outline === true
		? 'border-2 border-gray-300 hover:border-gray-700'
		: ''}
{classes}"
	{disabled}
	{...$$restProps}
>
	<slot />
</button>
