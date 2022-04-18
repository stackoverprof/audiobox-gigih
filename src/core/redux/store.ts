import authReducer, { State as AuthStateType } from './reducer/auth';
import createPlaylistReducer, { State as CreatePlaylistStateType } from './reducer/createPlaylist';
import editPlaylistReducer, { State as EditPlaylistStateType } from './reducer/editPlaylist';
import exploreReducer, { State as ExploreStateType } from './reducer/explore';
import { configureStore, Reducer } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		auth: authReducer,
		createPlaylist: createPlaylistReducer,
		editPlaylist: editPlaylistReducer,
		explore: exploreReducer,
	},
});

export default store;

export interface RootStateType {
	auth: Reducer<AuthStateType>;
	createPlaylist: Reducer<CreatePlaylistStateType>;
	editPlaylist: Reducer<EditPlaylistStateType>;
	explore: Reducer<ExploreStateType>;
}
