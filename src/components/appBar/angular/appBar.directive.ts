import { AfterViewInit, Directive } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { addCss, ios as iosApp } from 'tns-core-modules/application';

import { themer } from '../../core/core';

@Directive({
    selector: '[materialAppBar]'
})
export class AppBarDirective implements AfterViewInit {
    _appBarController: MDCAppBarViewController;
    addedToParent = false;
    constructor(route: ActivatedRoute, private page: Page) {
        // page.frame.ios.navBarVisibility = 'never';
        console.log('AppBarDirective');
        this.createNativeView();
    }

    public createNativeView() {
        this._appBarController = MDCAppBarViewController.alloc().init();
        // const _appBar = this.appBar = MDCAppBar.new();
        // _appBar.headerViewController.headerView.minMaxHeightIncludesSafeArea = false;
        // _appBar.navigationBar.inkColor = new Color('red').ios;
        // _appBar.navigationBar.tintColor  = new Color('blue').ios;
        // _appBar.headerViewController.headerView.backgroundColor = new Color('yellow').ios;
        // _appBar.navigationBar.sizeToFit();
        this._appBarController.applyPrimaryThemeWithScheme(themer.appScheme);
        console.log('createNativeView AppBar');
        this._addController();
        return null;
    }

    private _addController() {
        // console.log('_addController', this.addedToParent, this instanceof AppBar, this instanceof ActionBar);
        if (this._appBarController && !this.addedToParent) {
            const page = this.page;
            if (page && page.parent) {
                page['customNavigationBar'] = true;
                const viewController = page.ios as UIViewController;
                if (viewController.navigationController) {
                    viewController.navigationController.navigationBarHidden = true;
                }
                // let currentControllers = viewController.childViewControllers;
                // console.log('currentControllers', currentControllers.count);
                // if (currentControllers.count > 0) {
                //     currentControllers[0].removeFromParentViewController();
                // }
                // viewController.childViewControllers[0]
                // viewController.addChildViewController(this._appBarController);
                // console.log('addChildViewController done');
                this.addedToParent = true;
            }
        }
    }
    // public onLoaded() {
    //     super.onLoaded();
    //     console.log('onLoaded');

    //     // }, 1000);
    // }

    ngAfterViewInit() {
        this._addController();
        const viewController = this.page.ios as UIViewController;
        if (viewController.navigationController) {
            viewController.navigationController.setNavigationBarHiddenAnimated(true, false);
        }
        viewController.view.addSubview(this._appBarController.view);
        this._appBarController.didMoveToParentViewController(viewController);
    }
}
