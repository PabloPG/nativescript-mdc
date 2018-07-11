import { AddChildFromBuilder, View } from 'tns-core-modules/ui/core/view/view';
import { CssProperty, Property } from 'tns-core-modules/ui/core/properties/properties';
import { EventData } from 'tns-core-modules/data/observable/observable';
import { Style } from 'tns-core-modules/ui/styling/style/style';
import { Color } from 'tns-core-modules/color/color';
import { booleanConverter } from 'tns-core-modules/ui/core/view-base/view-base';

/**
 * Event interface for tab selected event
 */
export interface OnTabSelectedEventData extends EventData {
    oldIndex: number;
    newIndex: number;
}

export abstract class BottomNavigationBase extends View implements AddChildFromBuilder {

    /**
     * Get or set the Bottom Navigation tabs
     */
    public tabs: BottomNavigationTabBase[];

    /**
     * Get or set the current selected tab index
     */
    public selectedTabIndex: number = 0;

    /**
     * Get or set the style of visibilty for the title of the tabs.
     */
    public titleVisibility: 'selected' | 'always' | 'never' = 'selected';

    /**
     * Get or set the color of the icon and title of the selected tab.
     */
    public activeColor: string = 'blue';

    /**
     * Get or set the color of the icon and title of not selected tabs.
     */
    public inactiveColor: string = 'gray';

    /**
     * Get or set the backgroundColor of the bottomNavigation
     */
    public backgroundColor: string = 'white';

    /**
     * Method allowing to manually select a tab
     */
    public selectTab(index: number): void {
        if (index !== this.selectedTabIndex) {
            this.selectTabNative(index);
        }
    }

    public onTabSelected(index: number) {
        let eventData: OnTabSelectedEventData = {
            eventName: 'tabSelected',
            object: this,
            oldIndex: this.selectedTabIndex || 0,
            newIndex: index
        };
        this.selectedTabIndex = index;
        this.notify(eventData);
    }

    _addChildFromBuilder(name: string, value: any): void {
        if (name === 'BottomNavigationTab') {
            if (!this.tabs) {
                this.tabs = <BottomNavigationTabBase[]>[];
            }
            this.tabs.push(<BottomNavigationTabBase>value);
        }
    }

    protected abstract selectTabNative(index: number): void;
}

export const tabsProperty = new Property<BottomNavigationBase, BottomNavigationTabBase[]>({
    name: 'tabs',
    equalityComparer: (a: any[], b: any[]) => !a && !b && a.length === b.length
});
tabsProperty.register(BottomNavigationBase);

export const titleVisibilityProperty = new Property<BottomNavigationBase, string>({
    name: 'titleVisibility'
});
titleVisibilityProperty.register(BottomNavigationBase);

export const activeColorProperty = new Property<BottomNavigationBase, string>({
    name: 'activeColor'
});
activeColorProperty.register(BottomNavigationBase);

export const activeColorCssProperty = new CssProperty<Style, Color>({
    name: 'tabActiveColor',
    cssName: 'tab-active-color',
    equalityComparer: Color.equals,
    valueConverter: (v) => new Color(v)
});
activeColorCssProperty.register(Style);

export const inactiveColorProperty = new Property<BottomNavigationBase, string>({
    name: 'inactiveColor'
});
inactiveColorProperty.register(BottomNavigationBase);

export const inactiveColorCssProperty = new CssProperty<Style, Color>({
    name: "tabInactiveColor",
    cssName: "tab-inactive-color",
    equalityComparer: Color.equals,
    valueConverter: (v) => new Color(v)
});
inactiveColorCssProperty.register(Style);

export const backgroundColorProperty = new Property<BottomNavigationBase, string>({
    name: 'backgroundColor'
});
backgroundColorProperty.register(BottomNavigationBase);

export const backgroundColorCssProperty = new CssProperty<Style, Color>({
    name: 'tabBackgroundColor',
    cssName: 'tab-background-color',
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
});
backgroundColorCssProperty.register(Style);

export class BottomNavigationTabBase {

    constructor(title: string, icon: string, selectedIcon?: string, selectable?: boolean, parent?: WeakRef<BottomNavigationBase>) {
        this._title = title;
        this._icon = icon;
        if (selectedIcon) { this._selectedIcon = selectedIcon; }
        if (selectable) { this._selectable = selectable; }
        if (parent) { this._parent = parent; }
    }

    private _title: string;

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        if (this.title !== value) {
            this._title = value;
        }
    }

    private _icon: string;

    get icon(): string {
        return this._icon;
    }

    set icon(value: string) {
        if (this._icon !== value) {
            this._icon = value;
        }
    }

    private _selectedIcon: string;

    get selectedIcon(): string {
        return this._selectedIcon;
    }

    set selectedIcon(value: string) {
        if (this._selectedIcon !== value) {
            this._selectedIcon = value;
        }
    }

    private _selectable: boolean = true;

    get selectable(): boolean {
        return booleanConverter(<any>this._selectable);
    }

    set selectable(value: boolean) {
        this._selectable = value;
    }

    private _parent?: WeakRef<BottomNavigationBase>;

    get parent(): WeakRef<BottomNavigationBase> {
        return this._parent;
    }

    set parent(value: WeakRef<BottomNavigationBase>) {
        if (this._parent !== value) {
            this._parent = value;
        }
    }
}
