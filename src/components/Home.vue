<template>
  <div class="p-3">
    <b-card-group deck v-if="totalInfo">
      <b-card
        bg-variant="danger"
        text-variant="white"
        header="Confirmed"
        class="text-center"
      >
        <b-card-text>
          <h2>{{ totalInfo.confirmed.toLocaleString() }}</h2>
        </b-card-text>
      </b-card>
      <b-card
        bg-variant="success"
        text-variant="white"
        header="Recovered"
        class="text-center"
      >
        <b-card-text>
          <h2>{{ totalInfo.recovered.toLocaleString() }}</h2></b-card-text
        >
      </b-card>
      <b-card
        bg-variant="secondary"
        text-variant="white"
        header="Deaths"
        class="text-center"
      >
        <b-card-text>
          <h2>{{ totalInfo.deaths.toLocaleString() }}</h2></b-card-text
        >
      </b-card>
    </b-card-group>
    <b-table
      class="mt-3"
      v-if="stateInfo"
      striped
      hover
      :items="stateInfo"
      :fields="stateTableFields"
      @row-clicked="onStateClick"
    />
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "Home",

  data() {
    return {
      totalInfo: null,
      stateInfo: null,
      stateTableFields: ["state", "confirmed", "recovered", "deaths"]
    };
  },

  mounted() {
    this.fetchAllData();
  },

  methods: {
    async fetchAllData() {
      this.totalInfo = await api.getAllData();
      this.stateInfo = await api.getStateData();
    },
    onStateClick(data) {
      this.$router.push(`state/${data.id}`);
    }
  }
};
</script>
