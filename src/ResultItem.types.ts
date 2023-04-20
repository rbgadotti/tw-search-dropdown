import { ReactNode } from 'react'

export interface ResultItemCommonProps {}

export type ResultItemAsLink = ResultItemCommonProps & {
  label: string
  to: string
}
export type ResultItemAsButton = ResultItemCommonProps & {
  label: string
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  value: any
}

export type ResultItemCustom = ResultItemCommonProps & {
  render: () => ReactNode
}

export type IOverloadResultItem = {
  (props: ResultItemAsLink): JSX.Element
  (props: ResultItemAsButton): JSX.Element
  (props: ResultItemCustom): JSX.Element
}
