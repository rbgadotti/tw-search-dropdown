import React from 'react'
import { ContainerProps } from './Container.types'

export const Container = (props: ContainerProps) => {
  const { children } = props
  return <div className='shadow-lg w-full rounded-lg'>{children}</div>
}

export default Container
