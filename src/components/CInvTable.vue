<template>
  <v-card class="mt-5">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="createdInvs"
      :single-select="singleSelect"
      item-key="invoice"
      show-select
      class="elevation-1"
      @input="$emit('onselectinvoice', selected)"
    >
      <template v-slot:top>
        <v-switch v-model="singleSelect" label="Single select" class="pa-3">
        </v-switch>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-row>
          <div class="circle">
            <v-icon small>fa fa-user</v-icon>
          </div>
          <div class="circle">
            <v-icon small>fa fa-envelope</v-icon>
          </div>
          <div class="circle">
            <v-icon small>fa fa-check</v-icon>
          </div>
          <div class="circle">
            <v-icon small>far fa-eye</v-icon>
          </div>
        </v-row>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CInvTable",
  computed: mapGetters(["createdInvs"]),
  data() {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: "Booking Ref",
          align: "start",
          sortable: false,
          value: "invoice",
        },
        { text: "Consolidated", value: "consolidated" },
        { text: "Customer", value: "customerName" },
        { text: "Venue/Supplier", value: "vorsup" },
        { text: "Value(ex/Inc VAT)", value: "net" },
        { text: "Date", value: "gross" },
        { text: "Actions", value: "actions" },
      ],
    };
  },
  methods: {
    callselected() {
      console.log(
        "-----------*******************************----------",
        this.selected
      );
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
