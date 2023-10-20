<script>
	import { fail } from "assert";
    let deliveryType = 'delivery';
    let account = 'east legon';

    const setDeliveryType = (type) => {
      deliveryType = type;
    };

    const setAccount = (type) => {
      account = type;
    };
</script>

<div class="shipping-info">
    <h1 class="page-card-title">Shipping Information</h1>

    <div class="shipping-info-card">
        <div class="shipping-info-card__selection-div">
            <h6>Select Delivery:</h6>
            <div class="shipping-info-card__selection-button-div">
                <button
                  class={`shipping-info-card__selection-button ${deliveryType === 'delivery' ? 'active' : ''}`}
                  on:click={() => setDeliveryType('delivery')}
                >
                  Deliver to me
                </button>
                <button
                  class={`shipping-info-card__selection-button ${deliveryType === 'pick up' ? 'active' : ''}`}
                  on:click={()=> setDeliveryType('pick up')}
                >
                  Set pick up
                </button>
            </div>
        </div>
        <div class="shipping-info-card__selection-div">
            <h6>Select from account:</h6>
            <div class="shipping-info-card__selection-button-div">
                <button
                  class={`shipping-info-card__selection-button active ${account === 'east legon' ? 'active' : ''}`}
                  on:click={()=> setAccount('east legon')}
                >
                  East-Legon factory
                </button>
                <button
                  class={`shipping-info-card__selection-button ${account === 'kumasi 1' ? 'active' : ''}`}
                  on:click={()=> setAccount('kumasi 1')}
                >
                  Kumasi Warehouse 1
                </button>
                <button
                  class={`shipping-info-card__selection-button ${account === 'kumasi 2' ? 'active' : ''}`}
                  on:click={()=> setAccount('kumasi 2')}
                >
                  Kumasi Warehouse 2
                </button>
            </div>
        </div>
        <form class="shipping-info-card__form">
            <div class="shipping-info-card__form-colum-div">
                <div class="shipping-info-card__form-input-div">
                    <h5>Address line 1</h5>
                    <input />
                </div>
                <div class="shipping-info-card__form-input-div">
                    <h5>Address line 2</h5>
                    <input />
                </div>
                <div class="shipping-info-card__form-input-div">
                    <h5>City</h5>
                    <input />
                </div>
                <div class="shipping-info-card__form-input-div">
                    <h5>State</h5>
                    <input />
                </div>
            </div>
            <div class="shipping-info-card__form-colum-div">
                <div class="shipping-info-card__form-input-div">
                    <h5>Contact Number</h5>
                    <input />
                </div>
                <div class="shipping-info-card__form-input-div">
                    <h5>GPS Location</h5>
                    <input />
                </div>
                <div class="shipping-info-card__form-textarea-div">
                    <h5>Delivery instructions</h5>
                    <textarea></textarea>
                </div>
            </div>
        </form>

        <div class="shipping-info-card__shipping-cost-div">
            <div class="shipping-info-card__shipping-cost-div__cost-info">
                <div>
                    <h4 class="shipping-info-card__shipping-cost-div__cost-info-title">Shipping Costs</h4>
                </div>
                <p class="shipping-info-card__shipping-cost-div__cost-info-text">
                    Shipping costs are calculated based on the delivery address you have provided. Typically shipping takes 2-3 days.
                    Lorem ipsum dolor sit amet, consecture kalaium, rakesh lashow uilom aba joshkantim valeho calim poi tuvaiskalemto hamsat yie korami.
                </p>
            </div>
            <div class="shipping-info-card__shipping-cost-div__cost-value-div">
                <h6>Transport to Accra</h6>
                <h4>GHC 2,000</h4>
                <p>excl. taxes</p>
            </div>
        </div>
    </div>
</div>

<style>
    .page-card-title {
        font-size: 1.4em;
        font-weight: 700;
        margin-bottom: 15px;
    }

    .shipping-info {
        margin-top: 100px;
    }

    .shipping-info-card {
        height: auto;
        width: 100%;
        margin-bottom: 20px;
    }

    .shipping-info-card__selection-div {
        height: auto;
        width: 100%;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .shipping-info-card__selection-div h6 {
        font-weight: 500;
    }
    
    .shipping-info-card__selection-button-div {
        display: flex;
        justify-content: flex-start;
        gap: 10px;
    }

    .shipping-info-card__selection-button {
        padding: 5px 12px;
        border-radius: 50px;
        min-width: 40px;
        background-color: rgb(194, 194, 194);
        font-weight: 600;
    }

    .shipping-info-card__selection-button.active {
        background-color: rgb(19, 135, 19);
        color: white;
    }

    .shipping-info-card__form {
        display: flex;
        gap: 30px;
        width: 100%;
        margin: 40px 0 30px;
    }

    .shipping-info-card__form-input-div, .shipping-info-card__form-textarea-div {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .shipping-info-card__form-textarea-div {
        height: 100%;
    }

    .shipping-info-card__form-textarea-div textarea {
        flex: 1;
    }

    .shipping-info-card__form-input-div h5, .shipping-info-card__form-textarea-div h5{
        font-weight: 500;
    }

    .shipping-info-card__form input, .shipping-info-card__form textarea{
        display: block;
        width: 100%;
    }

    .shipping-info-card__form-colum-div {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .shipping-info-card__shipping-cost-div {
        display: flex;
        justify-content: space-between;
        gap: 100px;
        width: 100%;
        height: auto;
        border-radius: 5px;
        background-color: rgb(234, 245, 255);
        padding: 15px;
    }

    .shipping-info-card__shipping-cost-div__cost-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
    }

    .shipping-info-card__shipping-cost-div__cost-info-title {
        font-weight: 700;
        font-size: 1.1em;
    }

    .shipping-info-card__shipping-cost-div__cost-info-text {
        font-size: 0.9em;
        font-weight: 500;
        line-height: 1.3;
        color: grey;
    }

    .shipping-info-card__shipping-cost-div__cost-value-div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .shipping-info-card__shipping-cost-div__cost-value-div h6{
        font-size: 0.9em;
        margin-bottom: 10px;
        font-weight: 700;
    }

    .shipping-info-card__shipping-cost-div__cost-value-div h4{
        font-size: 1.2em;
        font-weight: 700;
        color:rgb(19, 135, 19);
    }

    .shipping-info-card__shipping-cost-div__cost-value-div p{
        font-weight: 500;
        color: grey;
    }
</style>