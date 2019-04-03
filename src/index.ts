import { install as installCore } from './components/core/material';
import { install as installBottomSheet } from './components/bottomSheet/bottomSheet';

export * from './components/activityIndicator/activityIndicator';
export * from './components/appBar/appBar';
export * from './components/bottomNavigation/bottomNavigation';
export * from './components/bottomSheet/bottomSheet';
export * from './components/button/button';
export * from './components/cardView/cardView';
export * from './components/core/material';
export * from './components/dialogs/dialogs';
export * from './components/floatingActionButton/floatingActionButton';
export * from './components/page/page';
export * from './components/progress/progress';
export * from './components/ripple/ripple';
export * from './components/slider/slider';
export * from './components/snackBar/snackBar';
export * from './components/textField/textField';

export function install() {
    installCore();
    installBottomSheet();
}
