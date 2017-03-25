import { StyleSheet } from 'react-native'

import { lightgrey, white, darkgrey } from '../../shared/variables.styles'

const styles = StyleSheet.create({
  AddNewAccount: {
    flex: 1,
    backgroundColor: lightgrey,
    paddingTop: 15,
  },
  container: {
    flex: 1,
    backgroundColor: white,
    width: '100%',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: darkgrey,
    padding: 10,
  },
  input: {
    height: 50,
    borderColor: darkgrey,
    borderWidth: 1,
    padding: 10,
  },
})

export default styles
