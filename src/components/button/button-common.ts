import { Color, CSSType, Length, Property } from 'tns-core-modules/ui/core/view';
import { Button } from 'tns-core-modules/ui/button/button';
import { cssProperty } from '../core/cssproperties';

@CSSType('MDCButton')
export abstract class ButtonBase extends Button {
    public variant: string;
    @cssProperty elevation: number;
    @cssProperty elevationHighlighted: number;
    @cssProperty rippleColor: Color | string;

    constructor() {
        super();
        this.style.margin = 5;
    }
}

export const variantProperty = new Property<ButtonBase, string>({
    name: 'variant'
});
variantProperty.register(ButtonBase);
