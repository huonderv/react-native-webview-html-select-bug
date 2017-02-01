# React Native Project showing the WebView <select\> bug

##Code
__index.android.js:__
```javascript
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

export default class WebViewProject extends Component {
  render() {
    return (
      <WebView style={styles.container}
               source={{ uri: 'file:///android_asset/simpleselect.html'}}
               startInLoadingState={true} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('WebViewProject', () => WebViewProject);
```

__simpleselect.html:__
```html
<!DOCTYPE html>
<html>
<body>

<select>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
</select>

</body>
</html>
```

##Screenhots
### Smartphone
On an Android smartphone, the select works as expected:

<kbd><img src="/screenshots/react-native-webview-select-smartphone-1.png?raw=true" alt="Initial" width="200"></kbd>
<kbd><img src="/screenshots/react-native-webview-select-smartphone-2.png?raw=true" alt="Tap on select button" width="200"></kbd>
<kbd><img src="/screenshots/react-native-webview-select-smartphone-3.png?raw=true" alt="List of options opens" width="200"></kbd>

### Tablet
However, on an Android tablet, tapping on the select button does not open the options list:
<kbd><img src="/screenshots/react-native-webview-select-tablet-1.png?raw=true" alt="Initial" width="250"></kbd>
<kbd><img src="/screenshots/react-native-webview-select-tablet-2.png?raw=true" alt="Tap on select button" width="250"></kbd>
<kbd><img src="/screenshots/react-native-webview-select-tablet-3.png?raw=true" alt="Nothing happens" width="250"></kbd>
