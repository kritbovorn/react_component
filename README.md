# Component for React Native : TypeScript  

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
- Creat file : `react-native.config.js`  
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

- Run command : `npx react-native-asset`  
- Restart App...  

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

---  




