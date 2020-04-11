import React from 'react'
import { View as RNView, ViewStyle, SafeAreaView, ViewProps, StyleProp } from 'react-native'

interface Props extends ViewStyle, ViewProps {
  children: React.ReactNode
  horizontal?: boolean
  vertical: boolean
  style?: StyleProp<ViewStyle>
}

function clean (obj) {
  for (let propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName]
    }
  }
  return obj
}

const horizontalStyles: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}
const verticalStyle: ViewStyle = {
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const View: React.FC<Props> = ({ style, children, horizontal, vertical, ...props }: Props) => {
  const {
    accessible,
    accessibilityLabel,
    accessibilityRole,
    accessibilityStates,
    accessibilityHint,
    collapsable,
    needsOffscreenAlphaCompositing,
    renderToHardwareTextureAndroid,
    accessibilityViewIsModal,
    accessibilityActions,
    onAccessibilityAction,
    shouldRasterizeIOS,
    onStartShouldSetResponder,
    onMoveShouldSetResponder,
    onResponderEnd,
    onResponderGrant,
    onResponderReject,
    onResponderMove,
    onResponderRelease,
    onResponderStart,
    onResponderTerminationRequest,
    onResponderTerminate,
    onStartShouldSetResponderCapture,
    onMoveShouldSetResponderCapture,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel,
    onTouchEndCapture,
    ...otherProps
  } = props
  const viewProps = {
    accessible,
    accessibilityLabel,
    accessibilityRole,
    accessibilityStates,
    accessibilityHint,
    collapsable,
    needsOffscreenAlphaCompositing,
    renderToHardwareTextureAndroid,
    accessibilityViewIsModal,
    accessibilityActions,
    onAccessibilityAction,
    shouldRasterizeIOS,
    onStartShouldSetResponder,
    onMoveShouldSetResponder,
    onResponderEnd,
    onResponderGrant,
    onResponderReject,
    onResponderMove,
    onResponderRelease,
    onResponderStart,
    onResponderTerminationRequest,
    onResponderTerminate,
    onStartShouldSetResponderCapture,
    onMoveShouldSetResponderCapture,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel,
    onTouchEndCapture
  }
  const passedStyle = clean(otherProps)
  const paneProps = clean(viewProps)
  let allStyles = [passedStyle, style]
  if (horizontal) {
    allStyles = [passedStyle, horizontalStyles, style]
  }
  if (vertical) {
    allStyles = [passedStyle, verticalStyle, style]
  }
  return (
    <RNView style={allStyles} {...paneProps}>
      {children}
    </RNView>
  )
}

export default View
