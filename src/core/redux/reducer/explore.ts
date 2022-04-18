import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export interface State {
	selectedTab: 'featured' | 'charts';
}

const initialState = <State>{
	selectedTab: 'featured',
};

const ReduxSlice = createSlice({
	name: 'EXPLORE',
	initialState,
	reducers: {
		setSelectedTab: (state, action) => {
			state.selectedTab = action.payload;
		},
		reset: () => initialState,
	},
});

export const { setSelectedTab, reset } = ReduxSlice.actions;

export const useExplore = (): State => {
	const state = useSelector((RootState: { explore: State }) => RootState.explore);
	return state;
};

export default ReduxSlice.reducer;
