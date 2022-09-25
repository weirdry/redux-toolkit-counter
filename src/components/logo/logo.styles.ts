import styled from 'styled-components'

export const LogoContainer = styled.div`
	margin: 0.5rem;
	animation: rotate_logo 10s linear infinite;

	@keyframes rotate_logo {
		100% {
			transform: rotate(360deg);
			transform-origin: center center;
		}
	}
`
