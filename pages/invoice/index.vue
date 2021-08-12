<template>
  <div class="wrapper">
    <div class="bg-content-new">
      <div class="row-flex-content">
        <div class="left-row">
          <div class="content-flex">
            <label>New Invoice</label>
            <form>
              <span style="color:#6459B9; font-weight: bold;">Bill From</span>

              <div class="d-flex flex-column mt-3">
                <span>Street Address</span>
                <input
                  class="input-form-control"
                  type="text"
                  v-on:change="onChangeInput(`bill_from_street`, $event)"
                />
              </div>
              <div class="row mt-3">
                <div class="col-md-4 d-flex flex-column">
                  <span>City</span>
                  <input
                    class="input-form-control"
                    type="text"
                    v-on:change="onChangeInput(`bill_from_city`, $event)"
                  />
                </div>
                <div class="col-md-4 d-flex flex-column">
                  <span>Post Code</span>
                  <input
                    class="input-form-control"
                    type="text"
                    v-on:change="onChangeInput(`bill_from_post_code`, $event)"
                  />
                </div>
                <div class="col-md-4 d-flex flex-column">
                  <span>Country</span>
                  <input
                    class="input-form-control"
                    type="text"
                    v-on:change="onChangeInput(`bill_from_country`, $event)"
                  />
                </div>
              </div>
              <div class="mt-5"></div>
              <span style="color:#6459B9; font-weight: bold;">Bill To</span>
              <div class="d-flex flex-column mt-3">
                <span>Client Name</span>
                <input
                  class="input-form-control"
                  type="text"
                  v-on:change="onChangeInput(`bill_to_client_name`, $event)"
                />
              </div>
              <div class="d-flex flex-column mt-3">
                <span>Client Email</span>
                <input
                  class="input-form-control"
                  type="text"
                  v-on:change="onChangeInput(`bill_to_client_email`, $event)"
                />
              </div>
              <div class="d-flex flex-column mt-3">
                <span>Street Address</span>
                <input
                  class="input-form-control"
                  type="text"
                  v-on:change="onChangeInput(`bill_to_street_address`, $event)"
                />
              </div>
              <div class="row mt-3">
                <div class="col-md-4 d-flex flex-column">
                  <span>City</span>
                  <input
                    class="input-form-control"
                    type="text"
                    v-on:change="onChangeInput(`bill_to_city`, $event)"
                  />
                </div>
                <div class="col-md-4 d-flex flex-column">
                  <span>Post Code</span>
                  <input
                    class="input-form-control"
                    type="text"
                    v-on:change="onChangeInput(`bill_to_post_code`, $event)"
                  />
                </div>
                <div class="col-md-4 d-flex flex-column">
                  <span>Country</span>
                  <input
                    class="input-form-control"
                    type="text"
                    v-on:change="onChangeInput(`bill_to_country`, $event)"
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6 d-flex flex-column">
                  <span>Invoice Date</span>
                  <input
                    class="input-form-control"
                    type="text"
                    v-on:change="onChangeInput(`bill_to_invoice_date`, $event)"
                  />
                </div>
                <div class="col-md-6 d-flex flex-column">
                  <span>Payment Terms</span>
                  <input
                    class="input-form-control"
                    type="text"
                    v-on:change="onChangeInput(`bill_to_payment_terms`, $event)"
                  />
                </div>
              </div>
              <div class="d-flex flex-column mt-3">
                <span>Project Description</span>
                <input
                  class="input-form-control"
                  type="text"
                  v-on:change="onChangeInput(`bill_to_project_desc`, $event)"
                />
              </div>
              <div class="mt-5"></div>
              <span style="color:#6459B9; font-weight: bold;">Item List</span>
              <div class="row mt-3">
                <div class="col-md-4 d-flex flex-column">
                  <span>Item Name</span>
                  <input
                    class="input-form-control"
                    type="text"
                    v-on:change="onChangeInput(`bill_to_city`, $event)"
                  />
                </div>
                <div class="col-md-2 d-flex flex-column">
                  <span>Qty.</span>
                  <input
                    class="input-form-control"
                    type="text"
                    v-on:change="onChangeInput(`bill_to_post_code`, $event)"
                  />
                </div>
                <div class="col-md-3 d-flex flex-column">
                  <span>Price</span>
                  <input class="input-form-control" type="text" readonly />
                </div>
                <div class="col-md-3 d-flex flex-column">
                  <span>Total</span>
                  <input class="input-form-control" type="text" readonly />
                </div>
              </div>
              <div class="btn-add-list" @click="addNewList">
                <span>Add New Item</span>
              </div>
            </form>
          </div>
          <div class="btn-save-add">
            <div class="flex-btn-wrap">
              <div class="btn-cancel">
                <NuxtLink to="/">Cancel</NuxtLink>
              </div>
              <div class="btn-add-new"><span>Add</span></div>
            </div>
          </div>
        </div>
        <div class="right-row">
          <div class="rg-primary">
            <div class="status">
              <div class="edits"><span>Edit</span></div>
              <div class="deletes"><span>Delete</span></div>
              <div class="marked"><span>Mark as Paid</span></div>
            </div>
            <div class="totals">
              <div class="top">
                <span>Union, England</span>
                <span>13511</span>
                <span>UK</span>
              </div>
              <div class="center">
                <div class="texted">
                  <span>Send to :</span>
                  <span>alex@gmail.com</span>
                </div>
              </div>
              <div class="bottom">
                <div class="head-tb">
                  <div class="text-head">Qty.</div>
                  <div class="text-head">Price</div>
                  <div class="text-head">Total</div>
                </div>
                <div class="body-tb">
                  <div class="text-head">3</div>
                  <div class="text-head">5000</div>
                  <div class="text-head">15000</div>
                </div>
              </div>
              <div class="total_all">
                <div class="textall"><span>$5000</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "../../assets/new_invoice.css";
</style>

<script>
export default {
  data() {
    return {
      count: 0,
      newItemName: "",
      newQty: 0,
      newPrice: 0,
      item_list: [],
      invoices: {
        id: null,
        id_invoice: null,
        project_description: null,
        status: null,
        bill_from: {
          street_address: null,
          city: null,
          post_code: null,
          country: null
        },
        bill_to: {
          client_name: null,
          client_email: null,
          street_address: null,
          city: null,
          post_code: null,
          country: null,
          invoice_date: null,
          payment_term: null
        },
        item_list: [],
        total_price: null
      }
    };
  },
  methods: {
    onChangeInput(key, e) {
      if (key === "bill_from_street") {
        this.invoices.bill_from.street_address = e.target.value;
      } else if (key === "bill_from_city") {
        this.invoices.bill_from.city = e.target.value;
      } else if (key === "bill_from_post_code") {
        this.invoices.bill_from.post_code = e.target.value;
      } else if (key === "bill_from_country") {
        this.invoices.bill_from.country = e.target.value;
      } else if (key === "bill_to_client_name") {
        this.invoices.bill_to.client_name = e.target.value;
      } else if (key === "bill_to_client_email") {
        this.invoices.bill_to.client_email = e.target.value;
      } else if (key === "bill_to_street_address") {
        this.invoices.bill_to.street_address = e.target.value;
      } else if (key === "bill_to_city") {
        this.invoices.bill_to.city = e.target.value;
      } else if (key === "bill_to_post_code") {
        this.invoices.bill_to.post_code = e.target.value;
      } else if (key === "bill_to_country") {
        this.invoices.bill_to.country = e.target.value;
      } else if (key === "bill_to_invoice_date") {
        this.invoices.bill_to.invoice_date = e.target.value;
      } else if (key === "bill_to_payment_terms") {
        this.invoices.bill_to.payment_term = e.target.value;
      } else if (key === "bill_to_project_desc") {
        this.invoices.project_description = e.target.value;
      }
    },
    addNewList: function() {
      console.log(this.count++);
      //   this.item_list.push({
      //     id: this.count++,
      //     item_name: this.newItemName,
      //     qty: this.newQty,
      //     price: this.newPrice
      //   });
      //   this.newItemName = "";
      //   this.newQty = 0;
      //   this.newPrice = 0;
    }
  }
};
</script>
