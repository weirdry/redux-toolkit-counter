import { ReactNode } from 'react'

import { CardContainer } from './card.styles'

type CardProps = { children?: ReactNode | undefined }

export default function Card({ children }: CardProps) {
	return <CardContainer>{children}</CardContainer>
}
