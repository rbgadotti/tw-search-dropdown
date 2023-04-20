import React from 'react'
import { IOverloadResultItem } from './ResultItem.types'

export const ResultItem: IOverloadResultItem = (props) => {
  if ('to' in props) {
    return (
      <li className='hover:bg-[#f8f8f8] rounded-lg cursor-pointer flex'>
        <a href={props['to']} className='px-4 py-3 flex-1'>
          {props['label']}
        </a>
      </li>
    )
  } else if ('render' in props) {
    return <li className='hover:bg-[#f8f8f8] rounded-lg cursor-pointer flex'>{props['render']()}</li>
  }

  return (
    <li className='hover:bg-[#f8f8f8] rounded-lg cursor-pointer flex'>
      <button className='px-4 py-3 flex-1' onClick={() => props['onClick'] && props['onClick'](props['value'])}>
        {props['label']}
      </button>
    </li>
  )
}

export default ResultItem
