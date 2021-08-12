<template>
  <div class="wrapper">
    <div class="bg-content pd-inside">
      <div class="col-flex-content">
        <div class="top-btn">
          <div class="one-left">
            <h1>Invoices</h1>
            <label>There are total {{ this.invoices.length }} invoices</label>
          </div>
          <div class="two-center">
            <div class="btn-filter">
              <b-form-select
                v-model="selected"
                :options="options"
                class="select-filter"
              ></b-form-select>
            </div>
          </div>
          <div class="three-right">
            <div class="btn-add">
              <div><b-icon-arrow-up></b-icon-arrow-up></div>
              <NuxtLink to="/invoice">New Invoice</NuxtLink>
            </div>
          </div>
        </div>
        <div class="list">
          <div
            class="item-content"
            v-for="(invoice, index) in invoices"
            :key="'bill_invoice' + index"
          >
            <div class="div-list">
              <span
                ><b style="color:#6C50DB">#</b>{{ invoice.id_invoice }}</span
              >
            </div>
            <div class="div-list">
              <span>{{ invoice.bill_to.invoice_date }}</span>
            </div>
            <div class="div-list">
              <span>{{ invoice.bill_to.client_name }}</span>
            </div>
            <div class="div-list">
              <span>$ {{ invoice.total_price }}</span>
            </div>
            <div class="div-list">
              <div class="btn-status">
                <span>{{ invoice.status }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import "../assets/invoice.css";

body {
  font-family: "Roboto";
}
</style>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Filter by status" },
        { value: 1, text: "Paid" },
        { value: 2, text: "Pending" },
        { value: 3, text: "Draft" }
      ],
      invoices: [
        {
          id: 0,
          id_invoice: "RT3090",
          project_description: "Design",
          status: "Pending",
          bill_from: {
            street_address: "McDonalds Street",
            city: "England",
            post_code: "1289",
            country: "England"
          },
          bill_to: {
            client_name: "Jason Huang",
            client_email: "jason@mail.com",
            street_address: "Jalan Batuampar",
            city: "New York",
            post_code: "2300",
            country: "USA",
            invoice_date: "13-05-2020",
            payment_term: "30 Days"
          },
          item_list: [
            {
              id: 0,
              item_name: "Banner",
              qty: 2,
              price: 1500
            }
          ],
          total_price: null
        },
        {
          id: 1,
          id_invoice: "RG6689",
          project_description: "Design",
          status: "Pending",
          bill_from: {
            street_address: "McDonalds Street",
            city: "England",
            post_code: "1289",
            country: "England"
          },
          bill_to: {
            client_name: "Caitlyne Warder",
            client_email: "jason@mail.com",
            street_address: "Jalan Batuampar",
            city: "New York",
            post_code: "2300",
            country: "USA",
            invoice_date: "13-05-2020",
            payment_term: "30 Days"
          },
          item_list: [
            {
              id: 0,
              item_name: "Banner",
              qty: 2,
              price: 1500
            }
          ],
          total_price: null
        }
      ]
    };
  }
};
</script>
