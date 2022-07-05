export interface ModifierOptions {
    trim?: boolean,
    capitalize?: boolean,
    withColon?: boolean,
}

interface Modifiers{
    result: string|undefined,
    clearValue: Function,
    setValue: Function,
    getValue: Function,
    trim: Function,
    stringCapitalize: Function,
    withColon: Function,
}

const Modifiers = (function (this: Modifiers, val?: string) {
    this.result = val || '';

    this.clearValue = () => {
        this.result = '';
    };

    this.setValue = (initVal:string): Modifiers => {
        this.result = initVal;
        return this;
    };

    this.getValue = (): string => {
        return <string>this.result;
    };

    this.trim = (use: boolean | undefined): Modifiers => {
        if (!use) return this;
        this.result = this.result!.trim();
        return this;
    };

    this.stringCapitalize = (use: boolean | undefined): Modifiers => {
        if (!use) return this;
        if (!this.result) return this;
        this.result = this.result.charAt(0).toUpperCase() + this.result.slice(1);
        return this;
    };

    this.withColon = (use: boolean | undefined): Modifiers => {
        if (!use) return this;
        this.result = this.result + ':';
        return this;
    };
} as unknown) as {new (val?:string): Modifiers}


const modifiers = new Modifiers();

export function implyModifiers(val: string, modifierOptions: ModifierOptions):string {
    return modifiers.setValue(val).trim(modifierOptions.trim)
        .stringCapitalize(modifierOptions.capitalize)
        .withColon(modifierOptions.withColon)
        .getValue();
}