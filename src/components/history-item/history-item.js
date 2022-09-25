import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HistoryItemContainer = styled(motion.li)`
	margin: 0.5rem 0;
	padding: 0.25rem;
	padding-left: 1rem;
	font-weight: 600;

	background-color: lightgray;
	border-radius: 2rem;

	&:before {
		content: '# ' counter(list-item) '.';
		color: #fff;
		margin-inline-end: 0.5rem;
	}

	.list-item-button {
		all: unset;
		border-radius: 1rem;
		font-size: 0.75rem;

		cursor: pointer;
	}

	.restore-button {
		margin-left: 1rem;
		background-color: white;
		padding: 0.25rem 0.75rem;

		color: #a1a1a1;
		font-weight: 400;

		&:hover {
			color: #b1b1b1;
		}
		&:active {
			background-color: #999999;
			color: lightgray;
		}
	}

	.remove-button {
		margin-left: 0.5rem;
		background-color: #999999;
		padding: 0.25rem 0.5rem;

		color: white;
		font-weight: 600;

		&:hover {
			background-color: #a1a1a1;
		}
		&:active {
			background-color: #777777;
			color: lightgray;
		}
	}
`
