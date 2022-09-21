import { useSelector, useDispatch } from 'react-redux'

import {
	// selectHistory,
	selectCounter,
	resetHistory,
	restoreFromHistory,
	removeFromHistory,
} from '../../features/counter/counterSlice.js'

import { Button } from 'cloz-ui'

import { HistoryContainer } from './history.styles.js'

export default function History() {
	const dispatch = useDispatch()

	// const history = useSelector(selectHistory)
	const { history } = useSelector(selectCounter)

	const handleDeleteHistory = () => dispatch(resetHistory())
	const handleRestore = (index) => dispatch(restoreFromHistory(index))
	const handleRemove = (index) => dispatch(removeFromHistory(index))

	return (
		<HistoryContainer>
			<ul className="history-list" type="">
				{history.map((count, index) => (
					<li key={index}>
						{count}
						<button
							className="list-item-button restore-button"
							onClick={() => handleRestore(index)}
						>
							RESTORE
						</button>
						<button
							className="list-item-button remove-button"
							onClick={() => handleRemove(index)}
						>
							&#10005;
						</button>
					</li>
				))}
			</ul>
			<Button
				hierarchy="secondary"
				text="DELETE HISTORY"
				onClick={handleDeleteHistory}
			/>
		</HistoryContainer>
	)
}
