import { ActionTree, GetterTree, MutationTree } from 'vuex';

export const state = () => ({
  vehicles: [],
  vehicle: {},
});

export type RootState = ReturnType<typeof state>;

export const actions: ActionTree<RootState, RootState> = {
  async loadVehicles({ commit }) {
    const vehicles = await this.$axios.$get('vehicles');
    commit('GET_VEHICLES', vehicles.data);
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async loadServiceDetail({ commit }, bks) {
    const vehicle = await this.$axios.$get(`vehicles/${bks}`);
    commit('GET_VEHICLE_DETAIL', vehicle.data);
  },
};

export const mutations: MutationTree<RootState> = {
  GET_VEHICLES(state, data) {
    state.vehicles = data;
  },
  GET_VEHICLE_DETAIL(state, data) {
    state.vehicle = data;
  },
};

export const getters: GetterTree<RootState, RootState> = {
  getVehicles: (state) => state.vehicles,
  getVehicleDetail: (state) => state.vehicle,
};
