import { SOLANA_STAKE_NAME } from "./name";
import { SOLANA_STAKE_PROMPT } from "./prompt";
import { StakeInputSchema } from "./input-schema";

import type { StakeResultBodyType } from "./types";
import type { SolanaAction } from "../solana-action";

export class SolanaStakeAction implements SolanaAction<typeof StakeInputSchema, StakeResultBodyType> {
  public name = SOLANA_STAKE_NAME;
  public description = SOLANA_STAKE_PROMPT;
  public argsSchema = StakeInputSchema;
} 