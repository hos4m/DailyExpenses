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
};
