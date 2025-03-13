
import CollaborativeRoom from '@/components/CollaborativeRoom'
import { getDocument } from '@/lib/actions/room.actions';
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

const Document = async ({params:{id}}:SearchParamProps) => {
const clerkUser = await currentUser();
if(!clerkUser) redirect('/sign-in');

const room = await getDocument({
  userId: clerkUser.emailAddresses[0].emailAddress,
  roomId: id
});
if(!room) redirect('/');

// TODO: assess the permissions of the user to access document

  return (
    <main className='w-full flex flex-col'>
   <CollaborativeRoom
   roomId={id}
   roomMetadata={room.metadata} 
   />
    </main>
  )
}

export default Document