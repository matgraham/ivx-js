import createFactoryFunction from '../utilities/create-factory-function.js';
import CheckboxInputController from '../controllers/input.checkbox.js';
import { ErrorMessages } from '../utilities/messages.error.js';

class CheckboxInput {
    constructor($compile, $filter, iVXjsUIModule, pullInTemplate) {
        this.template = this.templateHTML;
        this.transclude = true;
        this.restrict = 'E';
        this.require = "^ivxjsFormInput";
        this.replace = true;
        this.scope = {
            inputData: '=inputData'
        }
        this.controller = CheckboxInputController;
        this.controllerAs = 'vm';
        this.link = ($scope, iElm, iAttrs, controller) => {
            let { inputData: input } = $scope;
            let { id, name, errors = {}, labelHTML, label, attributes = {}, settings = {} } = input;
            let tagHTML = `ng-blur="vm.onChange(inputValue)" ng-model="inputValue"`;

            input.label = label ? label : $filter('stringParsers')('startCase', id);
            input = pullInTemplate.convertLabel($filter('stringParsers')('startCase', id), input, $scope);

            let checkboxUIObj = {
                input: input,
                tags: tagHTML,
                settings: settings,
                errors: new ErrorMessages(input, errors, attributes)
            };
            let checkBox = new iVXjsUIModule.checkbox(checkboxUIObj);

            iElm.html(checkBox.html);

            $compile(iElm.contents())($scope);
        }
    }

    get templateHTML() {
        return `<div></div>`;
    }
}

CheckboxInput.$inject = ['$compile', '$filter', 'ivxjs.modules.ui', 'pullInTemplate'];

export default angular
    .module('ivx-js.directives.input.checkbox', [])
    .directive('ivxjsCheckboxInput', createFactoryFunction(CheckboxInput))
    .name;
