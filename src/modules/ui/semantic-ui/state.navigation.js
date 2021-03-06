import {NavigationState as DefaultNavigationState} from '../default/state.navigation.js';

export class NavigationState extends DefaultNavigationState {     
    constructor(data, linkSection){
        super(data, linkSection);
    }
    
    get defaultSectionClasses(){
        return 'ui container';
    }
    
    get defaultHeaderClasses(){
        return 'ui header';
    }
};