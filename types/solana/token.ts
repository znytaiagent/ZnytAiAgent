export type SolanaToken = {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logoURI: string;
    tags: string[];
    daily_volume: number;
    created_at: string;
    freeze_authority: string | null;
    mint_authority: string | null;
    permanent_delegate: string | null;
    minted_at: string | null;
    extensions: {
        coingeckoId: string;
    };
};
