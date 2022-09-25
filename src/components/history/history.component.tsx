import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store/store'
import { AnimatePresence } from 'framer-motion'

import {
	selectCounter,
	resetHistory,
} from '../../features/counter/counterSlice'

import { Button } from 'cloz-ui'
import HistoryItem from '../history-item/history-item.component'

import { HistoryContainer } from './history.styles'

export default function History() {
	const dispatch = useAppDispatch()

	const { history } = useSelector(selectCounter)

	const handleDeleteHistory = () => dispatch(resetHistory())

	return (
		<HistoryContainer>
			<ul className="history-list">
				<AnimatePresence>
					{history.map((count, index) => (
						<HistoryItem key={index} count={count} index={index} />
					))}
				</AnimatePresence>
			</ul>
			<Button
				hierarchy="secondary"
				text="DELETE HISTORY"
				onClick={handleDeleteHistory}
			/>
		</HistoryContainer>
	)
}
