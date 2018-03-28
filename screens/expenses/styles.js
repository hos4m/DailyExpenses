import theme from '../../config/theme';

export default {
  noItems: {
    textAlign: 'center',
    marginTop: 150,
    fontSize: 48,
    opacity: 0.2,
    fontWeight: '700',
    letterSpacing: 2,
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

  entryCategory: {
    fontSize: 18
  },

  entryDate: {
    fontSize: 14,
    opacity: 0.6
  },

  entryExpense: {
    fontSize: 22
  },

  rowRightArea: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  modal: {
    marginTop: 22,
    padding: 22,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  modalForm: {
    width: '100%'
  },

  modalFormItem: {
    marginLeft: 0
  },

  modalFormInput: {
    paddingLeft: 15
  },

  modalDollarSign: {
    marginLeft: 15
  },

  modalButtons: {
    position: 'absolute',
    bottom: 22,
    left: 22,
    width: '100%'
  }
};
