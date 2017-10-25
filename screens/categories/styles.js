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

  text: {
    fontSize: 18,
    fontWeight: "700",
  },

  iconsWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    fontSize: 30,
    padding: 10,
    color: "gray",
  },

  deleteIcon: {
    color: "red",
  },
}