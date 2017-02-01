# React Native WebView \<select\> Bug on Android Tablets

##Description
The HTML \<select\> tag does not work in React Native WebView on Android tablets, i.e. clicking on the select button does not open the options list.

##Tested Devices:
- Samsung Galaxy Tag S2 (SM-T810)
- Nexus 7

##How to Reproduce the Bug 
The bug can be reproduced using the demo React Native app in this repository:

```bash
git clone https://github.com/huonderv/react-native-webview-html-select-bug.git
cd react-native-webview-html-select-bug
npm install
react-native run-android
```

The demo app includes a basic WebView in index.android.js, which renders a simple HTML \<select\> (see code below).


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

| 1. Initial | 2. Tap on select button | 3. List of options opens |
|---|---|---|
| <kbd><img src="/screenshots/react-native-webview-select-smartphone-1.png?raw=true" alt="Initial" width="200"></kbd>| <kbd><img src="/screenshots/react-native-webview-select-smartphone-2.png?raw=true" alt="Tap on select button" width="200"></kbd> | <kbd><img src="/screenshots/react-native-webview-select-smartphone-3.png?raw=true" alt="List of options opens" width="200"></kbd> |


### Tablet
However, on an Android tablet, tapping on the select button does not open the options list:

| 1. Initial | 2. Tap on select button | 3. Nothing happens |
|---|---|---|
| <kbd><img src="/screenshots/react-native-webview-select-tablet-1.png?raw=true" alt="Initial" width="200"></kbd>| <kbd><img src="/screenshots/react-native-webview-select-tablet-2.png?raw=true" alt="Tap on select button" width="200"></kbd> | <kbd><img src="/screenshots/react-native-webview-select-tablet-3.png?raw=true" alt="Nothing happens" width="200"></kbd> |
