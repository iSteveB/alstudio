import { State, Action } from '@/types/reducer';

export const isOpenReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'PREGNANCY':
            return { ...state, toggleCategoryA: !state.toggleCategoryA };
        case 'CHILD':
            return { ...state, toggleCategoryB: !state.toggleCategoryB };
        case 'PORTRAIT':
            return { ...state, toggleCategoryC: !state.toggleCategoryC };
        case 'EVENT':
            return { ...state, toggleCategoryD: !state.toggleCategoryD };
        default:
            return state;
    }
};
