import { createSlice, createSelector } from '@reduxjs/toolkit'

import { AppDispatch, GetAppState, RootState } from '../../store/store'

export type Count = number

export type ConuterState = {
	count: Count
	history: Count[]
}

const initialState: ConuterState = {
	count: 0,
	history: [],
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setCount: (state, action) => {
			state.count = action.payload
		},
		resetCount: (state) => {
			state.count = initialState.count
		},
		setHistory: (state, action) => {
			state.history = action.payload
		},
		resetHistory: (state) => {
			state.history = initialState.history
		},
	},
	extraReducers: (builder) => {},
})

export const selectCount = (state: RootState) => state.counter.count
export const selectHistory = (state: RootState) => state.counter.history

// State memoisation
export const selectCounter = createSelector(
	selectCount,
	selectHistory,
	(count, history) => ({ count, history }),
)

export const { setCount, resetCount, setHistory, resetHistory } =
	counterSlice.actions

export const calcCount =
	(amount: number) =>
	(dispatch: AppDispatch, getState: GetAppState): void => {
		const count = selectCount(getState())
		dispatch(setCount(count + amount))
	}

export const saveToHistory =
	(count: Count) =>
	(dispatch: AppDispatch, getState: GetAppState): void => {
		const history = selectHistory(getState())
		const newHistory = [...history, count]
		dispatch(setHistory(newHistory))
	}

export const restoreFromHistory =
	(index: number) =>
	(dispatch: AppDispatch, getState: GetAppState): void => {
		const history = selectHistory(getState())
		const countToRestore = history[index]
		dispatch(setCount(countToRestore))
	}

export const removeFromHistory =
	(index: number) =>
	(dispatch: AppDispatch, getState: GetAppState): void => {
		const history = selectHistory(getState())
		const newHistory = history.filter((_, storedIndex) => storedIndex !== index)
		dispatch(setHistory(newHistory))
	}

export default counterSlice.reducer
