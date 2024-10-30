# How to run the echo server

Open a terminal and run: 

```
node index.js
```

In another terminal run: 

```
curl -d "Hola!" http://localhost:8082
``` 

You should see the message sent via curl echoed back in the terminal.

# To package file for windows and linux

We can use the [pkg](https://www.npmjs.com/package/pkg) package to build the file locally. To install it globally run 

```
npm install pkg -g
```

then run 

```
pkg -t node14-win-x64,node14-linux index.js

# To sign an app for windows please use the following guide

[https://lessons.livecode.com/m/4071/l/1306746-how-do-i-sign-a-windows-app](https://lessons.livecode.com/m/4071/l/1306746-how-do-i-sign-a-windows-app). Note that the ´Signtool´ command at the end must be run also from the Powershell.
```

to create binaries for a fixed version of node14 in linux and in windows.

Otherwise you can download the binaries created as an artifact in the actions panel in github.
