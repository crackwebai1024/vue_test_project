<template>
  <v-card class="mt-5">
    <v-container class="mailwrapper">
      <v-row class="mx-0">
        <v-text-field
          outlined
          class="shrink"
          placeholder="invoiceID"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn color="blue-grey" class="right ml-5" @click="openOtoOModal">
          Email Selected
        </v-btn>
        <v-btn color="blue-grey" class="right ml-5" @click="openOtoMModal">
          Email All Invoices
        </v-btn>
      </v-row>
      <OnetoOne
        :otodialog="otodialog"
        :selected="selected"
        :issingleuser="issingleuser"
        v-on:closeOtoOModal="closeOtoOModal"
      />
      <OnetoM
        v-bind:otmdialog="otmdialog"
        v-on:closeOtoMModal="closeOtoMModal"
      />
    </v-container>
  </v-card>
</template>
<script>
import OnetoM from "./OnetoM.vue";
import OnetoOne from "./OnetoOne.vue";
export default {
  components: { OnetoOne, OnetoM },
  name: "MailSender",
  props: ["selected"],
  data() {
    return {
      otodialog: false,
      otmdialog: false,
      issingleuser: true,
    };
  },
  methods: {
    openOtoOModal() {
      if (this.selected.length > 0) {
        this.otodialog = true;
        this.issingleuser = true;
      }
    },
    openOtoMModal() {
      if (this.selected.length > 0) {
        this.otodialog = true;
        this.issingleuser = false;
      }
    },
    closeOtoMModal() {
      this.otmdialog = false;
    },
    closeOtoOModal() {
      this.otodialog = false;
    },
  },
};
</script>
<style lang="sass">
@import '../assets/sass/mail.scss'
</style>
