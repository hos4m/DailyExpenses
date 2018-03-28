import theme from '../../config/theme';

export default {
  noItems: {
    textAlign: 'center',
    marginTop: 150,
    fontSize: 48,
    opacity: 0.2,
    fontWeight: '700',
    letterSpacing: 2
  },

  entryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    paddingHorizontal: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.borderColor
  },

  text: {
    fontSize: 18
  },

  iconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  }
};
