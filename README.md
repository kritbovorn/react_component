# Component for React Native : TypeScript  

## Fake Image  

```ts  

<View style={[{ height: "70%", aspectRatio: 1 }]}>
  <ImageBackground
    style={{ height: "100%", aspectRatio: 1, borderRadius: sc.cardListHeight, overflow: 'hidden' }}
    source={{ uri: 'https://reactjs.org/logo-og.png' }}
    resizeMode={"cover"}
  />
</View>

```  

---  


## Install SVN package  
```js
brew install svn
```  


## Download : Folder /src/ 
- Command line  
```js
svn export https://github.com/kritbovorn/react_component/trunk/src
```    

---  

## Install Package  

```
npm install @types/react-redux @reduxjs/toolkit  
```  

---  

## Use Google Fonts  

- [Download Google Fonts](https://fonts.google.com/)  
- import at : project-directory/assets/fonts  
- Creat file : 
``` 
react-native.config.js 
```  
- Paste this  

```ts  

module.exports = {
  project: {
    ios: {},
    android: {}
  },
  assets: ['./assets/fonts/']
}

```  

- Run command : 
```
npx react-native-asset
````  
- Restart App...  

## Usage  

```ts  
<Text style={[{ color: '#fff', fontSize: 22, fontFamily: 'Trirong-MediumItalic', fontWeight: "normal" }]}>Hello World</Text>
```  

`fontFamily: 'Trirong-MediumItalic', fontWeight: "normal"`  

Should have : `fontWeight: "normal"` for some fonts cannot display


---  

## React Native Firebase  

- Podfile  

```ts 

target '--- Project Name ---' do
  config = use_native_modules!

  # Flags change depending on the env values.
  flags = get_default_flags()

  pod 'Firebase', :modular_headers => true    //  $$$ Add  this 
  pod 'FirebaseCore', :modular_headers => true    //  $$$ Add  this 
  pod 'GoogleUtilities', :modular_headers => true   //  $$$ Add  this 
  

  use_react_native!(

  )

```  

---  


## install Linear Gradient  

```  
npm install react-native-linear-gradient --save
```  

then `npx pod-install ios`  
then `Restart App`  

---  



## Usage : SVG  

- Command line  
```js
npm i react-native-svg
```  
```js
npm i react-native-svg-transformer
```  

- Configure the react native packager  

#### For React Native v0.59 or newer

Merge the contents from your project's `metro.config.js` file with this config (create the file if it does not exist already).

`metro.config.js`:

```js
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();
```  

### Using TypeScript

If you are using TypeScript, you need to add this to your `declarations.d.ts` file (create one if you don't have one already):

```ts
declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```

### Configuring SVGR (how SVG images get transformed)

[SVGR](https://github.com/gregberge/svgr) has a configuration file, which makes it possible for you to customize how SVG images get transformed to React/React Native.

Read more about the configuration options: [Configuring SVGR](https://react-svgr.com/docs/configuration-files/) and [SVGR options](https://react-svgr.com/docs/options/).

For example, if you want to change SVG image's fill color from `red` to `currentColor` (keep in mind that this will be used for all SVG images in your app).

`.svgrrc` (create the file in your project's root folder if it does not exist)

```json
{
  "replaceAttrValues": {
    "red": "currentColor"
  }
}
```

#### Changing SVG fill color in JS Code

Edit your `.svgrrc` file and include a line for `replaceAttrValues` that matching a hex code to `{props.fill}`

```json
{
  "replaceAttrValues": {
    "#000": "{props.fill}"
  }
}
```

- Restart : ` Metro `  

---  

## React Navigation  

- Installation  

```ts  
npm install @react-navigation/native react-native-screens react-native-safe-area-context
```  

---  


- Configure  

`react-native-screen` package requires one additional configuration step to properly work on `Android`  
In : `android/app/src/main/java/<your package name>/MainActivity.java`  

Add the following code to the body of `MainActivity` class :  

```ts
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
```  

Make sure to add the following import statement at the top of this file below your package statement :  

```ts  
import android.os.Bundle;
```  

---   

- Example : SafeArea()  

```ts  

import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"; // 1.
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <SafeAreaProvider>  // 2.
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


const HomeScreen = () => {

  // 1
  const insets = useSafeAreaInsets();

  return (  
    // 2 : Use padding.top , padding.bottom
     <View style={{flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }} >
       <Text style= {[]}>Home Screen</Text>
       <Button title="Show Alert" onPress={() => {Alert.alert("Button was Clickedddd")}} />
    </View>
  );
}

export default HomeScreen;

```  

---  


- Example : Wrapping your app in NavigationContainer  

```ts  
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}  

```  

---  

### Installing the native stack navigator library​  

```ts  
npm install @react-navigation/native-stack  
```  

- Example  

`- Create new file for Type`

> src/type/type.ts  

```ts  

import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Main: undefined,
    Home: undefined
};

export type MainProps = NativeStackScreenProps<RootStackParamList, "Main">;
export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;
```  

---  

```ts

// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

```  

> Only Mac : 

```ts
npx pod-install ios  
```  

---  

- Usage  



> src/screens/home_screen.tsx  

```ts  

import React from "react";
import { Text ,Touchable,TouchableHighlight,View} from 'react-native';
import { HomeProps } from "../type/type_root_stack_param_list";
import { gbs } from "../utils/import/import_options";

const HomeScreen = ({navigation, route}: HomeProps) => {
  return (  
     <View style={[gbs.center, {flex: 1}]} > 
         <Text style= {[gbs.head5Tri]}>Home Screen</Text>
         <TouchableHighlight onPress={() => {navigation.navigate("Main")}}>
             <Text style= {[]}>Send</Text>
         </TouchableHighlight>
    </View>
  );
}

export default HomeScreen;


```  
---  
---  
---  

## Drawer Navigator  

- Installation  

```ts  
npm install @react-navigation/drawer
```  

and 

```ts  
npm install react-native-gesture-handler react-native-reanimated  
```  

- Configure : 

Must Add : At Top line of `App.tsx` file  

⬇️⬇️⬇️⬇️⬇️

```ts  
import 'react-native-gesture-handler';
```  

---  

- Only : Mac  

```ts  
npx pod-install ios  
```  

## ⛏️ Issue  

`Make sure reanimated's babel plugin is installed in your babel.config.js (you should have 'react-native-reanimated/plugin' listed there - also see the above link for details)`  

In : `babel.config.js`  

```ts  

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',     // $$$  Add this
  ]
};


```  

---  


- [Example Drawer](https://reactnavigation.org/docs/drawer-navigator/#api-definition)  

```ts  

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

```  

> ## Function for : Open() , Close() , Toggle Drawer  
```ts
navigation.dispatch(DrawerActions.openDrawer());  
```  

```ts  
navigation.dispatch(DrawerActions.closeDrawer());  
```  

```ts  
navigation.dispatch(DrawerActions.toggleDrawer());  
```  



---  
---  
---   

## Async Storage() 
> Store Data local  

🔗 🔗 🔗 [Install and Usage](https://react-native-async-storage.github.io/async-storage/docs/install/)  

```ts  

npm install @react-native-async-storage/async-storage

```  

On iOS  

```ts  

npx pod-install ios

```  


- Example  

```ts  

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export default function App() {
  const [value, setValue] = useState('value');
  const { getItem, setItem } = useAsyncStorage('@storage_key');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
  };

  const writeItemToStorage = async newValue => {
    await setItem(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  return (
    <View style={{ margin: 40 }}>
      <Text>Current value: {value}</Text>
      <TouchableOpacity
        onPress={() =>
          writeItemToStorage(
            Math.random()
              .toString(36)
              .substr(2, 5)
          )
        }
      >
        <Text>Update value</Text>
      </TouchableOpacity>
    </View>
  );
}

```  

---  














