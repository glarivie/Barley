import { AsyncStorage } from 'react-native'
import { error } from 'console'

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
  const v = c === 'x' ? r : (r & 0x3 | 0x8)
  return v.toString(16)
})

const getAccounts = async () => {
  try {
    const accounts = await AsyncStorage.getItem('accounts')

    if (!accounts) { return [] }

    return JSON.parse(accounts)
  } catch (err) {
    if (err) { return [] }
  }
}

const setAccount = async account => {
  try {
    const accounts = await getAccounts() || []
    const _id = uniqueID()

    return await AsyncStorage.setItem(
      'accounts',
      JSON.stringify(accounts.concat({ ...account, _id })),
    )
  } catch (err) {
    error('Cannot set your account', err)
  }
}

const clearAllAccounts = async () => {
  try {
    return await AsyncStorage.removeItem('accounts')
  } catch (err) {
    error('Cannot clear all accounts', err)
  }
}

export {
  getAccounts,
  setAccount,
  uniqueID,
  clearAllAccounts,
}
