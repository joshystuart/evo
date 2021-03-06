## Getting started

### For Windows

Download Python 2.x

From an Admin Power Shell

```
 yarn global add windows-build-tools
```

```
yarn install
```

Look at only adding the ones we need rather than the whole react preset requirement

```
├─ babel-plugin-dynamic-import-node@1.1.0
├─ babel-plugin-syntax-class-properties@6.13.0
├─ babel-plugin-syntax-dynamic-import@6.18.0
├─ babel-plugin-syntax-object-rest-spread@6.13.0
├─ babel-plugin-transform-class-properties@6.24.1
├─ babel-plugin-transform-object-rest-spread@6.26.0
├─ babel-plugin-transform-react-constant-elements@6.23.0
├─ babel-plugin-transform-react-jsx-self@6.22.0
├─ babel-plugin-transform-react-jsx-source@6.22.0
├─ babel-plugin-transform-react-jsx@6.24.1
├─ babel-plugin-transform-runtime@6.23.0
├─ babel-preset-react-app@3.1.2
└─ babel-preset-react@6.24.1
```

TODO; we need to compile node-ir with:

```
    "install": "prebuild-install || node-gyp rebuild --build-from-source --runtime=electron --target_arch=x64 --target=2.0.7 --target_platform=win32  --dist-url=https://atom.io/download/electron",
```

Maybe we need to fork it? Or there is a way to set env vars
https://github.com/electron/electron/blob/master/docs/tutorial/using-native-node-modules.md
https://github.com/mapbox/node-pre-gyp
