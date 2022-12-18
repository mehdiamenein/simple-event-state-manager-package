var SimpleEventStateManager = /** @class */ (function () {
    function SimpleEventStateManager() {
        if (SimpleEventStateManager.myEventBus == null) {
            SimpleEventStateManager.myEventBus =
                document.createComment("my-event-bus");
        }
    }
    SimpleEventStateManager.initiateBus = function () {
        if (SimpleEventStateManager.myEventBus == null) {
            console.log("New event system initiated");
            SimpleEventStateManager.myEventBus =
                document.createComment("my-event-bus");
        }
    };
    SimpleEventStateManager.emit = function (eventName, data) {
        var _a;
        if (SimpleEventStateManager.myEventBus == null) {
            SimpleEventStateManager.myEventBus =
                document.createComment("my-event-bus");
        }
        (_a = SimpleEventStateManager.myEventBus) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new CustomEvent(eventName, {
            detail: data
        }));
    };
    SimpleEventStateManager.myEventBus = null;
    return SimpleEventStateManager;
}());
function RegisterListener(eventName, callback) {
    var _a;
    (_a = SimpleEventStateManager.myEventBus) === null || _a === void 0 ? void 0 : _a.addEventListener(eventName, function (e) {
        callback(e);
    });
}
function EmitMessage(eventName, data) {
    SimpleEventStateManager.emit(eventName, data);
}
module.exports = { SimpleEventStateManager: SimpleEventStateManager, RegisterListener: RegisterListener, EmitMessage: EmitMessage };
