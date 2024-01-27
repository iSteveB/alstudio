export type State = {
    toggleCategoryA: boolean;
    toggleCategoryB: boolean;
    toggleCategoryC: boolean;
    toggleCategoryD: boolean;
}

export interface Action {
    type: 'PREGNANCY' | 'CHILD' | 'PORTRAIT' | 'EVENT';
}

// exporte les types de l'action e