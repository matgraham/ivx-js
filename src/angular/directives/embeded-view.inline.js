import createFactoryFunction from '../utilities/create-factory-function.js';
import controller from '../controllers/embedded-view.inline.js';

class EmbeddedViewInline {
    constructor($compile, $filter, iVXjs, iVXjsUIModule, pullInTemplate) {
        Object.assign(this, {
            template: this.templateHTML,
            restrict: 'E',
            replace: true,
            scope: {
                viewData: '='
            },
            controller,
            controllerAs: 'vm'
        });

        this.link = ($scope, iElm, iAttrs, controller) => {
        }
    }

    get templateHTML() {
        return `
     
            <div class="ivx-embbeded-view ivx-embedded-view-inline" id="{{viewData.id}}"  ng-class="viewData.classes" ui-view="{{viewData.id}}"></div>
       `
    }
}

EmbeddedViewInline.$inject = ['$compile', '$filter', 'iVXjs', 'ivxjs.modules.ui', 'pullInTemplate'];

export default angular
    .module('ivx-js.directives.embedded.inline', [])
    .directive('ivxjsEmbeddedViewInline', createFactoryFunction(EmbeddedViewInline))
    .name;