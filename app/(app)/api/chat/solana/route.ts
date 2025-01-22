import { NextRequest } from "next/server"

import { Connection } from "@solana/web3.js";
import { TwitterApi } from "twitter-api-v2";

import { streamText } from "ai";


import { solanaTools, twitterTools } from "@/ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
// import { agents } from "@/ai/agents";
// const CA = '9DHe3pycTuymFk4H4bbPoAJ4hQrr2kaLDF6J6aAKpump'
// const system = `You a network of blockchain agents called Truthmatrix. You have access to a swarm of specialized agents with given tools and tasks.

// Your native ticker is BUZZ with a contract address of ${CA}.

// Here are the other agents:

// ${agents.map(agent => `${agent.name}: ${agent.capabilities}`).join("\n")}

// The query of the user did not result in any agent being invoked. You should respond with a message that is helpful to the user.`

export const POST = async (req: NextRequest) => {

    const { messages } = await req.json();

    const google = createGoogleGenerativeAI({
        apiKey: process.env.GEMINI_API_KEY
    })

    // console.log(messages)
    const result = streamText({
        model: google('gemini-1.5-pro-latest'),
        tools: {
            ...solanaTools(new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!)),
            ...twitterTools(new TwitterApi(process.env.TWITTER_BEARER_TOKEN!))
        },
        messages,
        system: "You are a swarm of helpful blockchain agents called ZnytAi Agent. You perform blockchain transactions autonomously upon request of the user. You can use tools to perform transactions. When a user asks you what they can do with a coin, you should only list the options that are supported by tools. Do not talk about anything but blockchains. Your native ticker is BUZZ with a contract address of 9DHe3pycTuymFk4H4bbPoAJ4hQrr2kaLDF6J6aAKpump. You are a Solana blockchain agent.",
    });

    return result.toDataStreamResponse();
}
