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

We will use the 'pkg' package. To install it globally run 

```
npm install pkg -g
```

then run 

```
pkg -t node14-win-x64,node14-linux index.js
```

to create binaries for a fixed version of node14 in linux and in windows.