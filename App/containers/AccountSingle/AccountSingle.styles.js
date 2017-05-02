import { StyleSheet } from 'react-native'

import colors from '../../styles/shared/variables.styles'

const styles = StyleSheet.create({
  AccountSingle: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: colors.white,
  },
  total: {
    alignItems: 'center',
    marginBottom: 10,
  },
  totalText: {
    color: colors.darkblue,
  },
  AddButton: {
    backgroundColor: colors.pistache,
    marginBottom: 15,
  },
  OperationsList: {
    marginTop: 0,
    marginBottom: 15,
    borderTopWidth: 0.5,
    borderBottomWidth: 0,
  },
})

export default styles
