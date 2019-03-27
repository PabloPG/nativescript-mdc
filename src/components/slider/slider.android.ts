import { Color } from 'tns-core-modules/color/color';

import { elevationProperty, rippleColorProperty } from '../core/cssproperties';
import { SliderBase, thumbColorProperty, trackBackgroundColorProperty, trackFillColorProperty } from './slider-common';

export class Slider extends SliderBase {
    nativeViewProtected: android.widget.SeekBar;

    [rippleColorProperty.setNative](color: Color) {
        this[thumbColorProperty.setNative](color);
    }
    [thumbColorProperty.setNative](color: Color) {
        this.nativeViewProtected.setThumbTintList(color ? android.content.res.ColorStateList.valueOf(color.android) : null);
    }
    [trackBackgroundColorProperty.setNative](color: Color) {
        this.nativeViewProtected.setProgressBackgroundTintList(color ? android.content.res.ColorStateList.valueOf(color.android) : null);
    }
    [trackFillColorProperty.setNative](color: Color) {
        this.nativeViewProtected.setProgressTintList(color ? android.content.res.ColorStateList.valueOf(color.android) : null);
    }

    // [elevationProperty.setNative](value: number) {
    //     this.nativeViewProtected.thumbElevation = value;
    // }
}
