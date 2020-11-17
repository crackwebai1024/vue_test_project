<template>
  <v-row justify="center">
    <v-dialog v-model="otmdialog" persistent max-width="900">
      <v-card>
        <v-card-title class="headline"> </v-card-title>
        <v-card-text> </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn class="grey darken-6" text @click="$emit('closeOtoMModal')">
            No
          </v-btn>
          <v-btn class="grey darken-1" text @click="$emit('closeOtoMModal')">
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-icon
      class="clsicon"
      :class="opendialog ? 'd-block' : 'd-none'"
      @click="$emit('closeOtoMModal')"
      >fas fa-times
    </v-icon>
  </v-row>
</template>
<script>
export default {
  name: "OnetoM",
  props: ["otmdialog"],
};
</script>
<style scoped></style>
