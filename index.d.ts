interface EventAttachType extends Document {
  attachEvent: (type: string, callback: () => void) => void;
}
