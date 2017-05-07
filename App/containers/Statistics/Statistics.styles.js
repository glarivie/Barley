import { StyleSheet } from 'react-native'
import _ from 'lodash'

import colors from '../../styles/shared/variables.styles'
import statsColors from '../../styles/shared/statsColors.styles'

const styles = StyleSheet.create({
  Statistics: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: colors.white,
  },
  alignItems: {
    alignItems: 'center',
  },
  legend: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  Abonnements: {
    backgroundColor: statsColors['Abonnements'],
    marginRight: 5,
    width: 10,
    height: 10,
  },
  Alimentation: {
    backgroundColor: statsColors['Alimentation'],
    marginRight: 5,
    width: 10,
    height: 10,
  },
  Crédits: {
    backgroundColor: statsColors['Crédits'],
    marginRight: 5,
    width: 10,
    height: 10,
  },
  Loyer: {
    backgroundColor: statsColors['Loyer'],
    marginRight: 5,
    width: 10,
    height: 10,
  },
  Salaires: {
    backgroundColor: statsColors['Salaires'],
    marginRight: 5,
    width: 10,
    height: 10,
  },
  Transports: {
    backgroundColor: statsColors['Transports'],
    marginRight: 5,
    width: 10,
    height: 10,
  },
  Vacances: {
    backgroundColor: statsColors['Vacances'],
    marginRight: 5,
    width: 10,
    height: 10,
  },
  Autres: {
    backgroundColor: statsColors['Autres'],
    marginRight: 5,
    width: 10,
    height: 10,
  },
})

export default styles
