import React from 'react'
import { ResultContainerProps } from './ResultContainerProps.types'

export const ResultContainer = (props: ResultContainerProps) => {
  const { children } = props
  return (
    <div
      className='
      results
      bg-white
      border-2
      border-[#ebebeb]
      border-t-0
      rounded-lg
      rounded-t-none
    '
    >
      {children}
    </div>
  )
}

export default ResultContainer
