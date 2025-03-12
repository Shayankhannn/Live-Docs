import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const Document = () => {
  return (
    <div>
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
  )
}

export default Document