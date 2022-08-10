type Label = {
    ru: string,
    en: string,
}

export interface ExerciseType {
    id: string,
    label: Label,
    description?: Label,
    exerciseCount: number,
}
