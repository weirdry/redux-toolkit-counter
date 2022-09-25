import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store/store'

import {
	calcCount,
	resetCount,
	saveToHistory,
	// selectCount,
	selectCounter,
} from '../../features/counter/counterSlice'

import { Button } from 'cloz-ui'

import { CounterContainer } from './counter.styles'

export default function Counter() {
	const dispatch = useAppDispatch()

	const { count } = useSelector(selectCounter)

	// const count = useSelector(selectCount)

	const handleIncrease = () => dispatch(calcCount(1))
	const handleDecrease = () => dispatch(calcCount(-1))
	const handleReset = () => dispatch(resetCount())
	const handleSave = () => dispatch(saveToHistory(count))

	return (
		<CounterContainer>
			<div className="counter-low">
				<Button text="-" onClick={handleDecrease} />
				<h2>
					<span className="counter-display">{count}</span>
				</h2>
				<Button text="+" onClick={handleIncrease} />
			</div>

			<br />

			<div className="counter-low">
				<Button shape="outlined" text="RESET" onClick={handleReset} />
				<Button shape="outlined" text="SAVE" onClick={handleSave} />
			</div>
		</CounterContainer>
	)
}
