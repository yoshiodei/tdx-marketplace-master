<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
  import AuthGaurd from '$lib/components/auth/auth-gaurd.svelte';
  import CompanyInformationCard from '$lib/components/order/CompanyInformationCard.svelte';
  import ShippingInformationCard from '$lib/components/order/ShippingInformationCard.svelte';
</script>

<AuthGaurd />

<div class="main">
	<CompanyInformationCard />
	<ShippingInformationCard />
</div>

<style>
	div.main {
		padding: 50px;
	}
</style>
