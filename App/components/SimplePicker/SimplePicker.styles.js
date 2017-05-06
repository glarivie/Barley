import { StyleSheet, Dimensions } from 'react-native'

import colors from '../../styles/shared/variables.styles'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  basicContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Touchable: {
    width: width,
    flex: 1,
  },
  modalContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    backgroundColor: colors.white,
  },
  buttonView: {
    width: width,
    padding: 8,
    borderTopWidth: 0.5,
    borderTopColor: colors.lightblue,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bottomPicker: {
    width: width,
  },
})

export default styles
