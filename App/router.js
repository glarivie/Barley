import { createRouter } from '@expo/ex-navigation'

import Accounts from './containers/Accounts'
import AddOrEditAccount from './containers/AddOrEditAccount'
import AddOrEditOperation from './containers/AddOrEditOperation'
import AccountSingle from './containers/AccountSingle'
import Statistics from './containers/Statistics'
import Settings from './containers/Settings'

const router = createRouter(() => ({
  Accounts: () => Accounts,
  AddOrEditAccount: () => AddOrEditAccount,
  AddOrEditOperation: () => AddOrEditOperation,
  AccountSingle: () => AccountSingle,
  Statistics: () => Statistics,
  Settings: () => Settings,
}))

export default router
