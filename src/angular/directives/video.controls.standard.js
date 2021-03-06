import createFactoryFunction from '../utilities/create-factory-function.js';
import StandardControlsController from '../controllers/video.controls.standard.js';
import VideoEventNames from '../../constants/video.events.js';

let videoEventNames = new VideoEventNames();


class StandardControls {
    constructor(iVXjsUI, iVXjsBus) {
        this.template = this.templateHTML;
        this.restrict = 'E';
        this.scope = {}
        this.controller = StandardControlsController
        this.controllerAs = 'vm'
        this.link = ($scope, iElm, iAttrs, controller) => {
            let standardControls = new iVXjsUI.videoControls(iElm.find('div'), iVXjsBus);

            controller.controls = standardControls;

            standardControls.addEventListeners(iVXjsBus);
        }
    }

    get templateHTML() {
        return `<div class="video-control-container"></div>`;
    }
}

StandardControls.$inject = ['ivxjs.modules.ui', 'ivxjs.bus'];

export default angular
    .module('ivx-js.directives.video.standard-controls', [])
    .directive('ivxjsStandardVideoControls', createFactoryFunction(StandardControls))
    .name;
