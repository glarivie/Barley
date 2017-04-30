import { StyleSheet } from 'react-native'

import colors from '../../styles/shared/variables.styles'

const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Icon: {
    marginRight: 5,
    marginLeft: 5,
    color: colors.pistache,
  },
  Text: {
    marginBottom: 3,
    color: colors.pistache,
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
