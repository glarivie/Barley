import { createRouter } from '@expo/ex-navigation'

import Accounts from './containers/Accounts'
import AddOrEditAccount from './containers/AddOrEditAccount'
import AddOrEditOperation from './containers/AddOrEditOperation'
import AccountSingle from './containers/AccountSingle'

const router = createRouter(() => ({
  Accounts: () => Accounts,
  AddOrEditAccount: () => AddOrEditAccount,
  AddOrEditOperation: () => AddOrEditOperation,
  AccountSingle: () => AccountSingle,
}))

export default router
