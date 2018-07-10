import { BottomNavigationBase, BottomNavigationTabBase } from './bottomNavigation-common';
export declare class MDCBottomNavigationBarDelegate {
}
export declare class BottomNavigation extends BottomNavigationBase {
    private _delegate;
    readonly ios: any;
    createNativeView(): any;
    initNativeView(): void;
    disposeNativeView(): void;
    onLoaded(): void;
    createTabs(tabs: BottomNavigationTab[]): void;
    protected selectTabNative(index: number): void;
}
export declare class BottomNavigationTab extends BottomNavigationTabBase {
    constructor(title: string, icon: string, selectedIcon?: string, selectable?: boolean, parent?: WeakRef<BottomNavigationBase>);
}