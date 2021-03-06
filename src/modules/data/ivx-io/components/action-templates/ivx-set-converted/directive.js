export class Directive {
    constructor(iVXjs) {
        this.link = ($scope, iElm, iAttrs, controller) => {
            iElm[0].addEventListener('click', (event) => {
                event.preventDefault();

                let { ivxSetConverted: value } = iAttrs;

                iVXjs.experience.setConverted(value);
            }, false);
        }
    }
}

Directive.$inject = ["iVXjs"];

export default class {
    constructor(app, opts) {
        let { factoryFunctionCreator } = opts;

        app
            .directive('ivxSetConverted', factoryFunctionCreator(Directive));
    }
}