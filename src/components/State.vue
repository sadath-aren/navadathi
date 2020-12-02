<template>
  <div class="p-3">
    <b-card-group deck v-if="stateInfo">
      <b-card
        bg-variant="danger"
        text-variant="white"
        header="Confirmed"
        class="text-center"
      >
        <b-card-text>
          <h2>{{ stateInfo.confirmed.toLocaleString() }}</h2>
        </b-card-text>
      </b-card>
      <b-card
        bg-variant="success"
        text-variant="white"
        header="Recovered"
        class="text-center"
      >
        <b-card-text>
          <h2>{{ stateInfo.recovered.toLocaleString() }}</h2></b-card-text
        >
      </b-card>
      <b-card
        bg-variant="secondary"
        text-variant="white"
        header="Deaths"
        class="text-center"
      >
        <b-card-text>
          <h2>{{ stateInfo.deaths.toLocaleString() }}</h2></b-card-text
        >
      </b-card>
    </b-card-group>
    <b-table
      class="mt-3"
      v-if="districtInfo"
      striped
      hover
      :items="districtInfo"
      :fields="districtTableFields"
    />
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "State",

  data() {
    return {
      stateInfo: null,
      districtInfo: null,
      districtTableFields: ["name", "confirmed", "recovered", "deaths"]
    };
  },

  mounted() {
    this.fetchAllData();
  },

  methods: {
    async fetchAllData() {
      const data = await api.getStateData();
      const stateInfo = data.find(state => state.id === this.$route.params.id);
      if (stateInfo) {
        this.stateInfo = stateInfo;
        this.districtInfo = stateInfo.districtData;
      }
    }
  }
};
</script>
