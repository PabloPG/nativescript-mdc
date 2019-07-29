import { ViewBase } from 'tns-core-modules/ui/page/page';
export declare function isPostLollipop(): boolean;
export declare function isPostLollipopMR1(): boolean;
export declare const state: {
    readonly selected: number;
    readonly hovered: number;
    readonly focused: number;
    readonly enabled: number;
    readonly pressed: number;
    readonly window_focused: number;
    readonly checked: number;
};
export declare const stateSets: {
    readonly PRESSED_STATE_SET: native.Array<number>;
    readonly HOVERED_FOCUSED_STATE_SET: native.Array<number>;
    readonly FOCUSED_STATE_SET: native.Array<number>;
    readonly HOVERED_STATE_SET: native.Array<number>;
    readonly SELECTED_PRESSED_STATE_SET: native.Array<number>;
    readonly SELECTED_HOVERED_FOCUSED_STATE_SET: native.Array<number>;
    readonly SELECTED_FOCUSED_STATE_SET: native.Array<number>;
    readonly SELECTED_HOVERED_STATE_SET: native.Array<number>;
    readonly SELECTED_STATE_SET: native.Array<number>;
    readonly BACKGROUND_DEFAULT_STATE_1: number[];
    readonly BACKGROUND_DEFAULT_STATE_2: native.Array<number>;
    readonly BACKGROUND_SELECTED_STATE: native.Array<number>;
    readonly BACKGROUND_CHECKED_STATE: native.Array<number>;
    readonly BACKGROUND_FOCUSED_STATE: native.Array<number>;
    readonly BACKGROUND_DISABLED_STATE: native.Array<number>;
};
export declare function getRippleColorStateList(color: number): globalAndroid.content.res.ColorStateList;
export declare function getEnabledColorStateList(color: number, variant: string): globalAndroid.content.res.ColorStateList;
export declare function getFocusedColorStateList(color: number, variant: string): globalAndroid.content.res.ColorStateList;
export declare function createStateListAnimator(view: ViewBase, nativeView: android.view.View): void;
export declare function getAttrColor(context: android.content.Context, name: string): number;
export declare function createRippleDrawable(rippleColor: number, radius?: number): globalAndroid.graphics.drawable.StateListDrawable | globalAndroid.graphics.drawable.RippleDrawable;
export declare function getDrawableForState(stateListDrawable: android.graphics.drawable.StateListDrawable, state: number): globalAndroid.graphics.drawable.Drawable;
export declare function handleClearFocus(view: android.view.View): void;
export declare function setFocusable(view: android.view.View, focusable: boolean): void;
export declare function getLayout(id: string): number;
