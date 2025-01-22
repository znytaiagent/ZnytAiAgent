import { CoreTool } from "ai";

export interface Agent {
    name: string;
    slug: string;
    systemPrompt: string;
    capabilities: string;
    tools: Record<string, CoreTool>;
}