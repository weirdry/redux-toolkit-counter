import styled from 'styled-components'

export const CounterContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	.counter-low {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;

		* {
			margin: 0;
		}

		.counter-display {
			font-size: 4rem;
			padding: 1rem;
		}
	}
`
