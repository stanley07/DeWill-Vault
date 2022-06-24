import { PostedMessage, messages } from './model';

// The maximum number of latest messages the contract returns.
const MESSAGE_LIMIT = 10;

// Adds a new message under the name of the sender's account id.
export function addMessage(text: string): void {
  const message = new PostedMessage(text)
  messages.push(message)
}

// Returns an array of last N messages.\
export function getMessages(): PostedMessage[] {
  const numMessages = min(MESSAGE_LIMIT, messages.length);
  const startIndex = messages.length - numMessages;
  const result = new Array<PostedMessage>(numMessages);
  for(let i = 0; i < numMessages; i++) {
    result[i] = messages[i + startIndex];
  }
  return result;
}
