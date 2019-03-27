import { Color, CSSType, Length, View, Property } from 'tns-core-modules/ui/core/view';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';

import { cssProperty } from '../core/cssproperties';

@CSSType('MDCCardView')
export abstract class CardViewBase extends StackLayout {
    borderColor: string;
    borderRadius: number;
    borderWidth: number;
    interactable: boolean;

    @cssProperty elevation: number;
    @cssProperty rippleColor: Color;
}

export const borderColorProperty = new Property<CardViewBase, Color>({
    name: 'borderColor',
    valueConverter: value => new Color(value)
});
borderColorProperty.register(CardViewBase);

export const borderRadiusProperty = new Property<CardViewBase, number>({
    name: 'borderRadius',
    valueConverter: value => +value
});
borderRadiusProperty.register(CardViewBase);

export const borderWidthProperty = new Property<CardViewBase, number>({
    name: 'borderWidth',
    valueConverter: value => +value
});
borderWidthProperty.register(CardViewBase);

export const interactableProperty = new Property<CardViewBase, boolean>({
    name: 'interactable',
    valueConverter: value => value === 'true'
});
interactableProperty.register(CardViewBase);
