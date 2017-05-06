import { createRouter } from '@expo/ex-navigation'

import Accounts from './containers/Accounts'
import AddOrEditAccount from './containers/AddOrEditAccount'
import AddOrEditOperation from './containers/AddOrEditOperation'
import AccountSingle from './containers/AccountSingle'
import Stats from './containers/Stats'

const router = createRouter(() => ({
  Accounts: () => Accounts,
  AddOrEditAccount: () => AddOrEditAccount,
  AddOrEditOperation: () => AddOrEditOperation,
  AccountSingle: () => AccountSingle,
  Stats: () => Stats,
}))

export default router
