import { View } from 'tns-core-modules/ui/core/view';

export interface SnackBarOptions {
    /**
     * The action button text of the snackbar.
     */
    actionText?: string;

    /**
     * The text of the snackbar.
     */
    message: string;

    /**
     * Delay to hide the snackbar.
     */
    hideDelay?: number;

    /**
     * Action Text Color of the snackbar.
     */
    actionTextColor?: string;

    /**
     * Text Color of the snackbar.
     */
    textColor?: string;

    /**
     * Background Color of the snackbar.
     */
    backgroundColor?: string;
    /**
     * *Android Only*
     * Set the maxLines if you are displaying a long string of text and it will wrap.
     */
    maxLines?: number;

    /**
     * *Android Only*
     * Use RTL for textview of snackbar.
     */
    isRTL?: boolean;

    /**
     * *Android Only*
     * The View to which the snackbar will be attached. Useful with modals.
     * Default to topmost().currentPage
     */
    view?: View;
}

export enum DismissReasons {
    SWIPE = 'Swipe',
    ACTION = 'Action',
    TIMEOUT = 'Timeout',
    MANUAL = 'Manual',
    CONSECUTIVE = 'Consecutive'
}

export enum SnackBarAction {
    NONE = 'None',
    DISMISS = 'Dismiss'
}

export abstract class SnackBarBase {
    _options: SnackBarOptions;
    constructor(options?: SnackBarOptions) {
        this._options = options;
    }

    public simple(message: string, textColor?: string, backgroundColor?: string, maxLines?: number, isRTL?: boolean, view?: View): Promise<any> {
        return this.showSnack({
            message,
            textColor,
            backgroundColor,
            maxLines,
            isRTL,
            view
        });
    }

    public action(options: SnackBarOptions) {
        return this.showSnack(options);
    }

    public showSnack(options: SnackBarOptions) {
        // if (!options) {
        //     options = this._options;
        // }
        this._options = options;
        // return new Promise((resolve, reject) => {
        // try {
        // this.initSnack(options, resolve);
        return this.show();
        // } catch (ex) {
        // reject(ex);
        // }
        // });
    }
    abstract show();
    abstract dismiss();
    abstract initSnack(options: SnackBarOptions, resolve?: Function);
}
