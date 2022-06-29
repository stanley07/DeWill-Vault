import { context, u128, PersistentVector } from "near-sdk-as";

// If the user attaches more than 0.01N the message is premium
const PREMIUM_PRICE = u128.from('10000000000000000000000')

/** 
 * Exporting a new class PostedMessage so it can be used outside of this file.
 */
@nearBindgen
export class PostedMessage {
  premium: boolean;
  sender: string;
  constructor(public text: string) {
    this.premium = context.attachedDeposit >= PREMIUM_PRICE
    this.sender = context.predecessor
  }
}

/**
 * Any changes to the PersistentVector will be automatically saved in the storage.
 * The parameter to the constructor needs to be unique across a single contract.
 * It will be used as a prefix to all keys required to store data in the storage.
 */
export const messages = new PersistentVector<PostedMessage>("unique-id-1")
