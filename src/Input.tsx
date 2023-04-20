import React from 'react'
import { InputProps } from './Input.types'

export const Input = (props: InputProps) => {
  const { placeholder = 'Search', ...rest } = props
  return (
    <input
      type='text'
      placeholder={placeholder}
      className='
        bg-white
        text-black
        w-full
        px-4
        py-3
        border-2
        border-[#ebebeb]
        rounded-lg
        placeholder:text-[#999999]
        rounded-b-none
        only:rounded-b-lg
        focus:outline-none
      '
      {...rest}
    />
  )
}

export default Input
