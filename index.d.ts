type IntervalType = (
  callback: () => Promise<void>,
  interval: number,
) => NodeJS.Timer;

type EventListenerType = (
  type: string,
  callback: () => Promise<void>,
  options?: { passive: boolean },
) => void;

interface EventAttachType extends Document {
  attachEvent: (type: string, callback: () => void) => void;
}
