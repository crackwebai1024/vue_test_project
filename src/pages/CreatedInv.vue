<template>
  <div>
    <v-app-bar app color="blue-grey" darken-3> </v-app-bar>
    <v-navigation-drawer
      color="blue-grey"
      darken-3
      class="display-1 hidden-xs-only"
      app
    ></v-navigation-drawer>
    <v-content>
      <v-container fluid class="pa-5">
        <v-card class="px-10 py-3 d-flex">
          <v-avatar color="blue-grey" size="50"></v-avatar>
          <h1 class="pl-5">View Invoices</h1>
        </v-card>
        <MailSender v-bind:selected="selected" />
        <c-inv-table v-on:onselectinvoice="setSelected" />
      </v-container>
    </v-content>
  </div>
</template>
<script>
import CInvTable from "../components/CInvTable";
import MailSender from "../components/MailSender";
export default {
  name: "CreatedInv",
  components: {
    MailSender,
    CInvTable,
  },
  data() {
    return {
      selected: [],
    };
  },
  methods: {
    setSelected(selections) {
      this.selected = selections;
      console.log("this is on parent component", this.selected);
    },
  },
};
</script>
