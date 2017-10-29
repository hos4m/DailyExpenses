import theme from "../../constants/theme";

export default {
  entryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    paddingHorizontal: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.borderColor
  },

  entryCategory: {
    fontSize: 18,
    fontWeight: "700"
  },

  entryDate: {
    fontSize: 14,
    opacity: 0.6
  },

  entryExpense: {
    fontSize: 22
  },

  modal: {
    marginTop: 22,
    padding: 22,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },

  modalForm: {
    width: "100%",
  },

  modalFormItem: {
    marginLeft: 0,
  },

  modalFormInput: {
    paddingLeft: 15,
  },

  modalDollarSign: {
    marginLeft: 15,
  },

  modalButtons: {
    position: "absolute",
    bottom: 22,
    left: 22,
    width: "100%"
  },
};
