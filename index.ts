class SimpleEventStateManager {
  static myEventBus: Comment | null = null;
  constructor() {
    if (SimpleEventStateManager.myEventBus == null) {
      SimpleEventStateManager.myEventBus =
        document.createComment("my-event-bus");
    }
  }

  static initiateBus() {
    if (SimpleEventStateManager.myEventBus == null) {
      console.log("New event system initiated");
      SimpleEventStateManager.myEventBus =
        document.createComment("my-event-bus");
    }
  }

  static emit(eventName: string, data: any) {
    if (SimpleEventStateManager.myEventBus == null) {
      SimpleEventStateManager.myEventBus =
        document.createComment("my-event-bus");
    }
    SimpleEventStateManager.myEventBus?.dispatchEvent(
      new CustomEvent(eventName, {
        detail: data,
      })
    );
  }
}

function RegisterListener(eventName: string, callback: any) {
  SimpleEventStateManager.myEventBus?.addEventListener(eventName, (e) => {
    callback(e);
  });
}

function RemoveListener(eventName: string, callback: any) {
  SimpleEventStateManager.myEventBus?.removeEventListener(eventName, (e) => {
    callback(e);
  });
}

function EmitMessage(eventName: string, data: any) {
  SimpleEventStateManager.emit(eventName, data);
}

module.exports = { SimpleEventStateManager, RegisterListener, EmitMessage };
