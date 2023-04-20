import React from 'react'
import { ResultCategoryProps } from './ResultCategoryProps.types'

export const ResultCategory = (props: ResultCategoryProps) => {
  const { children, name } = props
  return (
    <div className='wrapper p-2 border-t-2 border-[#ebebeb] first:border-0'>
      <span className='block text-[#808080] text-xs mt-4 ml-4'>{name}</span>
      <ul className='mt-3 flex flex-col'>{children}</ul>
    </div>
  )
}

export default ResultCategory
