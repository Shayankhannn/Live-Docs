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

this tailwind class spin the loader className='animate-spin'

now in layout right below body wrap everything with provider

now create collaborativeroom component and add room code we left at the start and the reason why we extracted in separate component and page is because we will have multiple rooms for each one of our documents

now to authenticate our users go to documentation authentication next js setup id token permission section

install 
npm install @liveblocks/node

again got version erros the I add legacy peer deps 

// advise 
use lexical editor instead of jsm
// advise end

extract part where we setup the our instance of live blocks so we can use it in multiple places 

const liveblocks = new Liveblocks({
  secret: "******",
});

create a new file liveblocks.ts in lib and paste it

in route we get users const clerkUser = await currentUser();