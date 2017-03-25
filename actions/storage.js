import { AsyncStorage } from 'react-native'

/******************
Account Model: {
  _id: Unique,
  accountName: String,
  bankName: String,
  amount: Float,
}
******************/

const uniqueID = () =>
'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
  const r = Math.random() * 16 | 0
  const v = c === 'x' ? r : (r&0x3 | 0x8)
  return v.toString(16)
})

const getAccounts = async () =>
  JSON.parse(await AsyncStorage.getItem('accounts'))

const setAccount = async account => {
  const accounts = await getAccounts() || []
  const _id = uniqueID()

  return await AsyncStorage.setItem(
    'accounts',
    JSON.stringify(accounts.concat({ ...account, _id })),
  )
}

const clearAllAccounts = async () =>
  await AsyncStorage.removeItem('accounts')

export {
  getAccounts,
  setAccount,
  uniqueID,
  clearAllAccounts,
}
