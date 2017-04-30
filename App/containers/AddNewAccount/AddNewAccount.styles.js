import { StyleSheet } from 'react-native'

import colors from '../../styles/shared/variables.styles'

const styles = StyleSheet.create({
  AddNewAccount: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 15,
  },
  DisabledButton: {
    backgroundColor: colors.beige,
    marginTop: 15,
  },
  AddButton: {
    backgroundColor: colors.pistache,
    marginTop: 15,
  },
  infos: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  instructions: {
    color: colors.beige,
    textAlign: 'center',
  },
})

export default styles
