import theme from "../../constants/theme";

export default {
  addButtonView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15
  },

  addButton: {
    width: "100%"
  },

  addIcon: {
    color: "white",
    fontSize: 14,
    fontWeight: "900",
    marginLeft: 15
  },

  addText: {
    fontWeight: "900",
    paddingLeft: 10
  },

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
  }
};
