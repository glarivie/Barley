import { createRouter } from '@expo/ex-navigation'

import Accounts from './containers/Accounts'
import AddNewAccount from './containers/AddNewAccount'
import AddNewOperation from './containers/AddNewOperation'
import AccountSingle from './containers/AccountSingle'

const router = createRouter(() => ({
  Accounts: () => Accounts,
  AddNewAccount: () => AddNewAccount,
  AddNewOperation: () => AddNewOperation,
  AccountSingle: () => AccountSingle,
}))

export default router
