import React, { Component, PropTypes } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  PickerIOS,
  TouchableWithoutFeedback,
} from 'react-native'

import colors from '../../styles/shared/variables.styles'

import styles from './SimplePicker.styles'

class SimplePicker extends Component {
  static propTypes = {
    buttonColor: PropTypes.string,
    options: PropTypes.array.isRequired,
    labels: PropTypes.array,
    confirmText : PropTypes.string,
    cancelText : PropTypes.string,
    itemStyle: PropTypes.object,
    onSubmit: PropTypes.func,
  }

  static defaultProps = {
    buttonColor: colors.pistache,
    itemStyle: {},
    cancelText: 'Cancel',
    confirmText: 'Confirm',
  }

  state = {
    buttonColor: this.props.buttonColor,
    modalVisible: false,
    selectedOption: this.props.options[0],
  }

  componentWillReceiveProps (nextProps) {
    const { options } = nextProps
    const { selectedOption } = this.state

    if (!options || !options.includes(selectedOption)) return

    this.selectOptions(options[0])
  }

  selectOptions = async selectedOption => {
    await this.setState({ selectedOption })

    if (this.state.selectOptions) {
      this.onPressSubmit()
    }
  }

  togglePicker = () =>
    this.setState({ modalVisible: !this.state.modalVisible })

  onPressSubmit = () => {
    if (this.props.onSubmit)
      this.props.onSubmit(this.state.selectedOption)

    this.togglePicker()
  }

  onValueChange = selectedOption => this.setState({ selectedOption })

  renderItem = (option, index) => {
    const PickerItemIOS = PickerIOS.Item
    const label = this.props.labels ? this.props.labels[index] : option

    return <PickerItemIOS key={option} value={option} label={label} />
  }

  render() {
    const { buttonColor, modalVisible, selectedOption } = this.state
    const { itemStyle, cancelText, confirmText, options } = this.props

    return (
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
      >
        <View style={styles.basicContainer}>
          <TouchableWithoutFeedback onPress={this.togglePicker}>
            <View style={styles.Touchable} />
          </TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
            <View style={styles.buttonView}>
              <TouchableOpacity onPress={this.togglePicker}>
                <Text style={{ color: buttonColor }}>
                  {cancelText}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.onPressSubmit}>
                <Text style={{ color: buttonColor }}>
                  {confirmText}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.mainBox}>
              <PickerIOS
                ref={p => this._picker = p}
                style={styles.bottomPicker}
                selectedValue={selectedOption}
                onValueChange={option => this.onValueChange(option)}
                itemStyle={itemStyle}
              >
                {options.map((option, index) => this.renderItem(option, index))}
              </PickerIOS>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

export default SimplePicker
