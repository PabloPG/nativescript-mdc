import { TextField as NTextField } from 'tns-core-modules/ui/text-field/text-field';
import { Color } from 'tns-core-modules/color/color';
import {
    AutocapitalizationType,
    FormattedString,
    KeyboardType,
    Length,
    ReturnKeyType,
    TextAlignment,
    TextDecoration,
    TextTransform,
    UpdateTextTrigger,
    WhiteSpace
} from 'tns-core-modules/ui/editable-text-base/editable-text-base';

export type TextFieldProperties = Partial<Pick<TextField, keyof TextField>>;
export class TextField extends NTextField {

    readonly android: any; // com.google.android.material.textfield.TextInputLayout

    readonly ios: any; // MDCTextField

    helper: string;
    maxLength: number;
    errorColor: Color;
    floating: boolean;
    placeholderColor: Color;
    variant: string;
    error: string;

    focus();
    blur();
    requestFocus();
    clearFocus();
}
