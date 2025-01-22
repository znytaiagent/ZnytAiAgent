import { SOLANA_UNSTAKE_NAME } from "./name";
import { SOLANA_UNSTAKE_PROMPT } from "./prompt";
import { UnstakeInputSchema } from "./input-schema";

import type { UnstakeResultBodyType } from "./types";
import type { SolanaAction } from "../solana-action";

export class SolanaUnstakeAction implements SolanaAction<typeof UnstakeInputSchema, UnstakeResultBodyType> {
  public name = SOLANA_UNSTAKE_NAME;
  public description = SOLANA_UNSTAKE_PROMPT;
  public argsSchema = UnstakeInputSchema;
} 