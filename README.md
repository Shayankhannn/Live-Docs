live colaborative saas application

using react 18 
  "shadcn": "^2.4.0-canary.12",
tailwind 3
jsm editor

npm i jsm-editor
npx jsm-editor add editor

for authentication we use clerk

npm install @clerk/nextjs

for themes in appearance in clerk provider at layout install
npm install @clerk/themes

using live blocks 

choosed text editor, live blocks lexical ,next js

npm install @liveblocks/client @liveblocks/react @liveblocks/react-ui @liveblocks/react-lexical lexical @lexical/react

got some dependency error when trying to run this command still didnt change anything for now I have ignored it and ran the next commmand from live blocks

npx create-liveblocks-app@latest --init --framework react

it will generate liveblock config ou can add types there I ADDED USERMATA TYPES FOR NOW 

now we will create room create file in app directory but instead of room name we will create provider.tsx file and make it use client

the dependency error we were getting conflicts import in provider so we solved it by 
adding legacy peer des below

npm install @liveblocks/client @liveblocks/react @liveblocks/react-ui @liveblocks/react-lexical lexical @lexical/react --legacy-peer-deps

for now it solved the issue I guess