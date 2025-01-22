import { Wallet } from "@coinbase/coinbase-sdk";

import type { TransferArgumentsType, TransferActionResultType } from "./types";

export async function transfer(
  wallet: Wallet,
  args: TransferArgumentsType,
): Promise<TransferActionResultType> {
  try {
    const transferResult = await wallet.createTransfer({
      amount: args.amount,
      assetId: args.assetId,
      destination: args.destination,
      gasless: args.gasless,
    });

    const result = await transferResult.wait();

    const transaction = result.getTransaction();

    if (!transaction) {
      throw new Error("Failed to get transaction");
    }

    const transactionHash = transaction.getTransactionHash();

    if (!transactionHash) {
      throw new Error("Failed to get transaction hash");
    }

    return {
      message: `Transferred ${args.amount} of ${args.assetId} to ${args.destination}.\nTransaction hash for the transfer: ${transactionHash}\nTransaction link for the transfer: ${transaction.getTransactionLink()}`,
      body: {
        transactionHash
      }
    };
  } catch (error) {
    return {
      message: `Error transferring the asset: ${error}`
    };
  }
} 