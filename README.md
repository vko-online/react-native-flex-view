## View

Accept inline style props with view props


Using styles const is annoying, specially for simple task
```
<View style={styles.container}>
  <Text>pets</Text>
</View>
const styles = StyleSheet.create({
  container: {
    paddingLeft: 10
  }
})
```

What if we could pass styles and props as direct property
```
<View paddingLeft={10} onLayout={handleLayout}>
  <Text>pets</Text>
</View>
```

### installation
```
npm install react-native-flex-view
```

### usage
Add style and view props to view
```
import View from 'view-on-steroids'

// accepts ViewStyleProps and ViewProps as props
<View backgroundColor='red'>
  children
</View>

// Align horizontally
<View horizontal padding={10}>any children</View>

// Align vertically
<View vertical>any children</View>

```

### examples
```
import View from 'react-native-flex-view'

// simple pane
const demo1 = (
  <View padding={10} backgroundColor='red' onTouchStart={() => false>
    <Text>My text</Text>
  </View>
)

// horizontal
const demo2 = (
  <View horizontal alignItems='center' onTouchStart={() => false>
    <Text>h</Text>
    <Text>o</Text>
    <Text>r</Text>
    <Text>i</Text>
    <Text>z</Text>
    <Text>o</Text>
    <Text>n</Text>
    <Text>t</Text>
    <Text>a</Text>
    <Text>l</Text>
  </View>
)

// vertical
const demo3 = (
  <View vertical paddingLeft={10}>
    <Text>v</Text>
    <Text>e</Text>
    <Text>r</Text>
    <Text>t</Text>
    <Text>i</Text>
    <Text>c</Text>
    <Text>a</Text>
    <Text>l</Text>
  </View>
)

```