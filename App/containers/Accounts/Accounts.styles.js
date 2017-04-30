import { StyleSheet } from 'react-native'

import colors from '../../styles/shared/variables.styles'

const styles = StyleSheet.create({
  Home: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: colors.white,
  },
  AccountsList: {
    marginBottom: 15,
    borderTopWidth: 0.5,
    borderBottomWidth: 0,
  },
  ListItem: {
    backgroundColor: colors.white,
  },
  AddButton: {
    backgroundColor: colors.pistache,
  },
  infos: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
  },
  instructions: {
    color: colors.beige,
    textAlign: 'center',
  },
})

export default styles
