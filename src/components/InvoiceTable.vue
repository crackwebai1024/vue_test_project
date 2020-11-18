<template>
  <v-card class="mt-5">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="allInvoices"
      :single-select="true"
      item-key="invoiceID"
      show-select
      class="elevation-1"
    >
      <template v-slot:top>
        <v-switch v-model="singleSelect" label="Single select" class="pa-3">
        </v-switch>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-row>
          <div class="circle">
            <v-icon small>far fa-file-alt</v-icon>
          </div>
          <div class="circle">
            <v-icon small>fas fa-exchange-alt</v-icon>
          </div>
          <div class="circle">
            <router-link to="/invoice">
              <v-icon small>far fa-eye</v-icon>
            </router-link>
          </div>
        </v-row>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "InvoiceTable",
  computed: mapGetters(["allInvoices"]),
  data() {
    return {
      selected: [],
      headers: [
        {
          text: "Booking Ref",
          align: "start",
          sortable: false,
          value: "invoiceID",
        },
        { text: "Type", value: "type" },
        { text: "Customer", value: "customerName" },
        { text: "Venue/Supplier", value: "vorsup" },
        { text: "NET", value: "net" },
        { text: "Gross", value: "gross" },
        { text: "Marked Up", value: "markup" },
        { text: "Arrival", value: "arrivalDate" },
        { text: "Bill Due", value: "billingDate" },
        { text: "Actions", value: "actions" },
      ],
    };
  },
  methods: {
    getColor(calories) {
      if (calories > 400) return "red";
      else if (calories > 200) return "orange";
      else return "orange";
    },
  },
  created() {},
};
</script>
<style>
.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin-right: 5px;
  border-radius: 50%;
  border: solid 2px grey;
}
</style>
