import React from 'react'
import ActorCard from './ActorCard';

const ActorsSidebar = ({ actors }) => {

  return (
    <div>
      <aside className='grid  grid-cols-2 xs:grid-cols-3 sm:grid-cols-3  lg:grid-cols-2 gap-4'>
      {actors.slice(0,6).map(actor => (
        <ActorCard actor={actor} key={actor.id} />
      ))}
      </aside>
    </div>
  )
}

export default ActorsSidebar