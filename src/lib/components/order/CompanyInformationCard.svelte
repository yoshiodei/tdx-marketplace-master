<script>
    let readonly = true;
    const handleEditToggle = () => readonly = !readonly;
</script>

<div>
    <h1 class="page-card-title">Company Information</h1>

    <div class="company-info-card">
        <div class="company-info-card__header">
            <h4 class="company-info-card__header-title">Ghana Biscuits Ltd.</h4>
            <div>
                <button on:click={ handleEditToggle }>Edit</button>
            </div>
        </div>
        <div class="company-info-card__form-list">
            <div class="company-info-card__form-data">
                <p>Company</p>
                <input
                    {readonly}
                    value="No. 3 Nikoi Street East Legon"
                    class:readonly
                />
            </div>
            <div class="company-info-card__form-data">
                <p>Buyer</p>
                <input {readonly} value="Kofi Amposo" />
            </div>
            <div class="company-info-card__form-data">
                <p>Address</p>
                <input {readonly} value="Accra" />
            </div>
            <div class="company-info-card__form-data">
                <p>Email</p>
                <input {readonly} value="k.amponso@ghanabiscuits.gh" />
            </div>
            <div class="company-info-card__form-data">
                <p>City</p>
                <input {readonly} value="Greater Accra" />
            </div>
            <div class="company-info-card__form-data">
                <p>Phone number</p>
                <input {readonly} value="(+233) 308250039" />
            </div>
            <div class="company-info-card__form-data">
                <p>Coc number</p>
                <input {readonly} value="123.456.789" />
            </div>
        </div>
    </div>

    <div class="order-reference">
        <h6 class="order-reference__title">Order Reference</h6>
        <input
          class="order-reference__input"
          placeholder="e.g. order for next production batch"
        />
    </div>
</div>

<style>
    .page-card-title {
        font-size: 1.4em;
        font-weight: 700;
        margin-bottom: 15px;
    }

    .company-info-card {
        height: auto;
        width: 100%;
        border-radius: 5px;
        background-color: rgb(234, 245, 255);
        overflow: hidden;
        margin-bottom: 20px;
    }

    .company-info-card__header {
        height: auto;
        width: 100%;
        border-top: 5px;
        background-color: black;
        padding: 15px 15px;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .company-info-card__header-title {
        font-weight: 700;
    }

    .company-info-card__form-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 30px;
        padding: 0 15px;
    }

    .company-info-card__form-data {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 15px;
        border-bottom: 1px solid lightgrey;
        padding: 10px 0;
    }

    .company-info-card__form-data:last-child {
        border-bottom: none;
    }

    .company-info-card__form-data input {
        font-weight: 700;
        background-color: transparent;
        padding: 0;
        border-radius: 5px;
        padding: 5px 10px;
        border: 1px solid transparent;
    }

    .company-info-card__form-data input.readonly {
        border: 1px solid light lightgrey;
    }

    .company-info-card__form-data input:focus {
       outline-offset: 0;
       outline-color: transparent;
       --tw-ring-color: transparent;
    }

    .order-reference {
        width: 100%;
        height: auto;
    }

    .order-reference__title {
        margin-bottom: 5px;
        font-weight: 600;
    }

    .order-reference__input {
        width: 100%;
        height: 2.5em;
        border-radius: 3px;
        border: 1px solid darkgrey;
        padding: 0 10px;
    }
</style>