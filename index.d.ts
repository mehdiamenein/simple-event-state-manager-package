declare class SimpleEventStateManager {
  static myEventBus: Comment | null;
  static initiateBus(): void;
  static emit(eventName: string, data: any): void;
}

declare function RegisterListener(eventName: string, callback: any): void;
declare function EmitMessage(eventName: string, data: any): void;

export { SimpleEventStateManager, RegisterListener, EmitMessage };
