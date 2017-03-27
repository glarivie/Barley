import React, { Component } from 'react'
// import { Font } from 'expo'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { NativeRouter, Route } from 'react-router-native'
import { Components } from 'exponent'

import store from './configureStore'
// import { fonts } from './constants'

import Home from './containers/Home'
import AddNewAccount from './containers/AddNewAccount'

class App extends Component {
  state = { ready: false }

  componentWillMount () {
    this.loadFontsAssets()
  }

  loadFontsAssets = async () => {
    // await Promise.all(fonts.map(async font => await Font.loadAsync(font)))
    this.setState({ ready: true })
  }

  render () {
    const { ready } = this.state

    if (!ready)
      return <Components.AppLoading />

    return (
      <Provider store={store}>
        <NativeRouter>
            <View style={{ flex: 1 }}>
              <Route exact path="/" component={Home} />
              <Route path="/account/new" component={AddNewAccount} />
              {/* <Route path="/topics" component={Topics} /> */}
            </View>
        </NativeRouter>
      </Provider>
    )
  }
}

export default App
