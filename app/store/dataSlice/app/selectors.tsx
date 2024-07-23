import {RootState} from 'app/store';

// const statePart = ({app}: RootState) => app;

export const selectActiveScreen = (state: RootState) => state.app.activeScreen;
