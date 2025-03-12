"use client";

import React from 'react'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import {
    RoomProvider,
    ClientSideSuspense,
  } from "@liveblocks/react/suspense";

const CollaborativeRoom = ( ) => {
  return (
    <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <div className="collaborative-room">
          <Header>
      <div className="flex w-fit items-center justify-center gap-2">
      <p className="document-title">This is a fake title</p>
      <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
      </div>
      </Header>
        <Editor/>
          </div>
        </ClientSideSuspense>
      </RoomProvider>
  )
}

export default CollaborativeRoom