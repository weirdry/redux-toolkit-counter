import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialState = {
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

export const selectCount = (state) => state.counter.count
export const selectHistory = (state) => state.counter.history

// State memoisation
export const selectCounter = createSelector(
	selectCount,
	selectHistory,
	(count, history) => ({ count, history }),
)

export const { setCount, resetCount, setHistory, resetHistory } =
	counterSlice.actions

export const calcCount = (amount) => (dispatch, getState) => {
	const count = selectCount(getState())
	dispatch(setCount(count + amount))
}

export const saveToHistory = (count) => (dispatch, getState) => {
	const history = selectHistory(getState())
	const newHistory = [...history, count]
	dispatch(setHistory(newHistory))
}

export const restoreFromHistory = (index) => (dispatch, getState) => {
	const history = selectHistory(getState())
	const countToRestore = history[index]
	dispatch(setCount(countToRestore))
}

export const removeFromHistory = (index) => (dispatch, getState) => {
	const history = selectHistory(getState())
	const newHistory = history.filter((_, storedIndex) => storedIndex !== index)
	dispatch(setHistory(newHistory))
}

export default counterSlice.reducer
