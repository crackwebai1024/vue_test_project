<template>
  <v-row justify="center">
    <v-dialog
      v-model="opendialog"
      persistent
      max-width="500"
      class="confirmdig"
    >
      <v-card>
        <v-card-title class="headline">
          Are you sure you wish to create Invoices for the selected bookings?
        </v-card-title>
        <v-card-text> </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn class="grey darken-6" text @click="$emit('closeModal')">
            No
          </v-btn>
          <v-btn class="grey darken-1" text @click="$emit('closeModal')">
            <router-link to="/createdinv">
              Yes
            </router-link>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <h2 class="comment" :class="opendialog ? 'd-block' : 'd-none'">
      if you press yes, it takes you to VIEW INVOICES, showing the ones you
      'created'
    </h2>
    <v-icon
      class="clsicon"
      :class="opendialog ? 'd-block' : 'd-none'"
      @click="$emit('closeModal')"
      >fas fa-times
    </v-icon>
  </v-row>
</template>
<script>
export default {
  name: "Confirm",
  props: ["opendialog"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.headline {
  word-break: unset;
  text-align: center;
  font-size: 2rem !important;
  line-height: 2.5rem;
}
.clsicon {
  position: fixed;
  top: calc(50vh - 150px);
  left: calc(50vw + 225px);
  display: flex;
  width: 18px;
  color: white;
  display: flex;
  justify-content: flex-end;
  z-index: 3000;
}
.comment {
  position: fixed;
  bottom: 20px;
  padding-left: 30px;
  right: 20px !important;
  color: white;
  z-index: 3000;
}
@media only screen and (max-width: 500px) {
  .clsicon {
    left: calc(100vw - 40px);
  }
}
</style>
