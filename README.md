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

![Alt text](screenshots/react-native-webview-smartphone-1.png?raw=true "Initial")
![Alt text](screenshots/react-native-webview-smartphone-2.png?raw=true "Tap on <select>")
![Alt text](screenshots/react-native-webview-smartphone-3.png?raw=true "List of options opens")

### Tablet
However, on an Android tablet, tapping on the select button does not open the options list:

![Alt text](screenshots/react-native-webview-tablet-1.png?raw=true "Initial")
![Alt text](screenshots/react-native-webview-tablet-2.png?raw=true "Tap on <select>")
![Alt text](screenshots/react-native-webview-tablet-3.png?raw=true "Nothing happens")