import { createRouter } from '@expo/ex-navigation'

import Accounts from './containers/Accounts'
import AddOrCreateAccount from './containers/AddOrCreateAccount'
import AddNewOperation from './containers/AddNewOperation'
import AccountSingle from './containers/AccountSingle'

const router = createRouter(() => ({
  Accounts: () => Accounts,
  AddOrCreateAccount: () => AddOrCreateAccount,
  AddNewOperation: () => AddNewOperation,
  AccountSingle: () => AccountSingle,
}))

export default router
