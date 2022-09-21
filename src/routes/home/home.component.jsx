import { useSelector } from 'react-redux'

// import { selectHistory } from '../../features/counter/counterSlice'
import { selectCounter } from '../../features/counter/counterSlice'

import Logo from '../../components/logo/logo.component'
import Card from '../../components/card/card.component'
import Counter from '../../components/counter/counter.component'
import History from '../../components/history/history.component'

import { HomeContainer } from './home.styles'

export default function Home() {
	const { history } = useSelector(selectCounter)

	return (
		<HomeContainer>
			<Card>
				<Logo />
				<h1>
					<span className="title">REDUX-TOOLKIT COUNTER</span>
				</h1>
				<br />
				<Counter />
			</Card>

			<br />
			{history.length !== 0 && <History />}
		</HomeContainer>
	)
}
