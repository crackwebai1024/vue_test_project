<template>
  <v-row justify="center">
    <v-dialog
      v-model="opendialog"
      persistent
      max-width="450"
      class="confirmdig"
    >
      <v-icon class="clsicon" @click="$emit('closeModal')">fas fa-times</v-icon>
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
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
      <h1 class="comment">
        if you press yes, it takes you to VIEW INVOICES, showing the ones you
        'created'
      </h1>
    </v-dialog>
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
  position: absolute;
  top: calc(50vh - 150px);
  left: calc(50vw + 225px);
  display: flex;
  width: 18px;
  color: white;
  display: flex;
  justify-content: flex-end;
}
.comment {
  position: absolute;
  bottom: 0px;
  color: white;
}
@media only screen and (max-width: 500px) {
  .clsicon {
    left: calc(100vw - 40px);
  }
}
</style>
