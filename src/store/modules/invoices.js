import axios from "axios";
import { invoiceData } from "./invoicedata";

const state = {
  invoices: invoiceData,
};

const getters = {
  allInvoices: (state) => state.invoices,
};

const getFormattedDate = (date) => {
  let dates = date.split("/");
  let year = dates[2].length === 2 ? `20${dates[2]}` : dates[2];
  let month = dates[1];
  let day = dates[0];
  return [year, month, day];
};
const actions = {
  fetchInvoices({ commit }, searchData) {
    let startDate = new Date(searchData.startDate);
    let endDate = new Date(searchData.endDate);
    let filteredData = invoiceData.filter((item) => {
      let arrivalDate = new Date(getFormattedDate(item.arrivalDate));
      let billingDate = new Date(getFormattedDate(item.billingDate));
      if (
        arrivalDate > startDate &&
        billingDate < endDate &&
        searchData.customerName === item.customerName
      ) {
        console.log(
          item,
          "data in store ==>",
          startDate,
          endDate,
          arrivalDate,
          billingDate
        );
        return item;
      }
    });
    commit("setInvoices", filteredData);
  },
};

const mutations = {
  setInvoices: (state, invoices) => (state.invoices = invoices),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
