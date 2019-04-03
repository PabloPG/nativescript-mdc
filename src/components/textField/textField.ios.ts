import { Color, placeholderColorProperty, Style } from 'tns-core-modules/ui/editable-text-base/editable-text-base';

import { themer } from '../core/material';
import { errorColorProperty, errorProperty, floatingProperty, helperProperty, maxLengthProperty, TextFieldBase } from './textField-common';

let colorScheme: MDCSemanticColorScheme;
function getColorScheme() {
    if (!colorScheme) {
        colorScheme = MDCSemanticColorScheme.new();
    }
    return colorScheme;
}

declare module 'tns-core-modules/ui/text-field/text-field' {
    interface TextField {
        _updateAttributedPlaceholder();
    }
}

export class TextField extends TextFieldBase {
    nativeViewProtected: MDCTextField;
    private _controller: MDCTextInputControllerBase;
    public readonly style: Style & { variant: 'outline' | 'underline' | 'filled' };

    variant = 'underline';
    public createNativeView() {
        const view = MDCTextField.new();
        const colorScheme = themer.getAppColorScheme();
        if (this.style.variant === 'filled') {
            this._controller = MDCTextInputControllerFilled.alloc().initWithTextInput(view);
        } else if (this.style.variant === 'outline') {
            this._controller = MDCTextInputControllerOutlined.alloc().initWithTextInput(view);
        } else {
            this._controller = MDCTextInputControllerUnderline.alloc().initWithTextInput(view);
        }
        if (colorScheme) {
            MDCTextFieldColorThemer.applySemanticColorSchemeToTextInput(colorScheme, view);
            MDCTextFieldColorThemer.applySemanticColorSchemeToTextInputController(colorScheme, this._controller);
        }
        return view;
    }

    public dismissSoftInput() {
        if (this.nativeViewProtected.isFirstResponder) {
            super.dismissSoftInput();
        }
    }
    get ios(): MDCTextField {
        return this.nativeViewProtected;
    }

    blur() {
        this.dismissSoftInput();
    }

    [placeholderColorProperty.setNative](value: Color) {
        const color = value instanceof Color ? value.ios : value;
        this._controller.floatingPlaceholderActiveColor = color;
        this._updateAttributedPlaceholder();
    }
    [errorColorProperty.setNative](value: Color) {
        const color = value instanceof Color ? value.ios : value;
        this._controller.errorColor = color;
    }
    [helperProperty.setNative](value: string) {
        this._controller.helperText = value;
    }
    [maxLengthProperty.setNative](value: number) {
        this._controller.characterCountMax = value;
    }
    [floatingProperty.setNative](value: boolean) {
        this._controller.floatingEnabled = value;
    }
    [errorProperty.setNative](value: string) {
        this._controller.setErrorTextErrorAccessibilityValue(value, value);
    }
}
