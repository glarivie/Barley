import { StyleSheet } from 'react-native'

import colors from '../../styles/shared/variables.styles'

const styles = StyleSheet.create({
  Statistics: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: colors.white,
    // alignItems: 'center'
  },
  ButtonsGroup: {
    backgroundColor: colors.white,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  TypeButtons: {
    color: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
  },
  selectedText: {
    color: colors.white,
  },
  innerBorder: {
    width: 0,
    borderWidth: 0,
  },
})

export default styles
