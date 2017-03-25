import { StyleSheet } from 'react-native'

import { lightgrey, white, darkgrey } from '../../shared/variables.styles'

const styles = StyleSheet.create({
  Home: {
    flex: 1,
    backgroundColor: lightgrey,
    paddingTop: 15,
  },
  accounts: {
    flex: 1,
    backgroundColor: white,
    width: '100%',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: darkgrey,
  },
  single: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.5,
    borderColor: lightgrey,
  },
  text: {
    fontSize: 16,
  },
})

export default styles
