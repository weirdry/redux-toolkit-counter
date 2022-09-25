import { MouseEvent } from 'react'
import { useAppDispatch } from '../../store/store'

import {
	Count,
	restoreFromHistory,
	removeFromHistory,
} from '../../features/counter/counterSlice'

import { HistoryItemContainer } from './history-item.styles'

type HistoryItemProps = {
	count: Count
	index: number
}

export default function HistoryItem(props: HistoryItemProps) {
	const { count, index } = props

	const dispatch = useAppDispatch()

	const handleRestore = (e: MouseEvent<HTMLButtonElement>) =>
		dispatch(restoreFromHistory(index))
	const handleRemove = (e: MouseEvent<HTMLButtonElement>) =>
		dispatch(removeFromHistory(index))

	return (
		<HistoryItemContainer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{count}
			<button
				className="list-item-button restore-button"
				onClick={handleRestore}
			>
				RESTORE
			</button>
			<button className="list-item-button remove-button" onClick={handleRemove}>
				&#10005;
			</button>
		</HistoryItemContainer>
	)
}
