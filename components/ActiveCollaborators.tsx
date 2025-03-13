import {  useOthers } from '@liveblocks/react/suspense'
import Image from 'next/image';
import React from 'react'

const ActiveCollaborators = () => {
    const Others = useOthers();
  const collaborators = Others.map((other)=>other.info)
    return (
    <ul className='collaborators-list'>
        {collaborators.map(({id,avatar,color,name}) => (
            <li key={Date.now()}>
                <Image
                src={avatar}
                alt='avatar'
                width={100}
                height={100}
                className='inline-block size-8 rounded-full ring-2 ring-dark-100 '
                style={{border:`3px solid ${color}`}}
                />
                {/* {name} */}
            </li>
        ))}
    </ul>
  )
}

export default ActiveCollaborators