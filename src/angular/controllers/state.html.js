import createFactoryFunction from '../utilities/create-factory-function.js';

class HtmlStateController {
    constructor($state, $scope, $rootScope, iVXjsActions, iVXjsBus, iVXjs) {
        let { id, timeoutInMs, onTimeout = [], next = [] } = $state.current.data;

        this.id = id;
        this.iVXjsActions = iVXjsActions;
        this.iVXjsBus = iVXjsBus;

        if (typeof timeoutInMs != "undefined" && timeoutInMs > 0) {
           
            setTimeout(function () {
                 iVXjs.log.debug(`onTimeout Actions`, {}, { state: $state.current.data, source: 'onTimeout', status: 'completed', actions: onTimeout, timestamp: Date.now() });

                iVXjsActions.resolveThenNavigate(onTimeout, next);
            }, timeoutInMs);
        }
    }

    performEvents(events) {
        let self = this;

        self.iVXjsActions.resolveActions(events, () => {
            events.forEach((event, index) => {
                self.iVXjsBus.emit(event.eventName, event.args)
            })
        })
    }
}

HtmlStateController.$inject = ['$state', '$scope', '$rootScope', 'ivxjs.actions', 'ivxjs.bus', 'iVXjs'];

export default createFactoryFunction(HtmlStateController);