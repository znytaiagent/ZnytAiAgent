import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { streamText } from 'ai';
// import { NextRequest } from "next/server";

// import { createOpenAI, /*openai */ } from "@ai-sdk/openai"
// import { streamText } from "ai"

// import { streamText } from "ai";

// import { Coinbase } from "@coinbase/coinbase-sdk";

// import { openai } from "@ai-sdk/openai";

// import { CdpAgentkit, cdpTools } from "@/ai";

// export const POST = async (req: NextRequest) => {

//     const { messages } = await req.json();
//     console.log('gets here too and funniest thing', messages)
//     // const agentkit = await CdpAgentkit.configureWithWallet({
//     //     networkId: Coinbase.networks.BaseSepolia,
//     //     cdpWalletData: process.env.WALLET_DETAILS,
//     // });

//     const result = streamText({
//         model: openai("gpt-4o-mini"),
//         // tools: cdpTools(agentkit),
//         messages,
//     })

//     result.toDataStream()

//     return result.toDataStreamResponse();
// }



// export const maxDuration = 30;
// export async function POST(req: Request) {
//   const { messages } = await req.json();

// //   const xai = new createXai({
// //     apiKey: apiKey,
// // })
//   const openai= createOpenAI({ 
//     apiKey: process.env.OPENAI_API_KEY
//    })

   
//   console.log(process.env.OPENAI_API_KEY)
  
//   const result = streamText({
//     model: openai('gpt-4o'),
//     system: 'You are a helpful assistant.',
//     messages,
//   });

//   return result.toDataStreamResponse();
// }


// import { NextRequest } from "next/server";

// import { openai } from "@ai-sdk/openai"
// import { streamText } from "ai"
// import { NextRequest, NextResponse } from "next/server"

// import { Connection } from "@solana/web3.js";
// import { TwitterApi } from "twitter-api-v2";

// import { streamText } from "ai";

// import { openai } from "@ai-sdk/openai";

// import { solanaTools, twitterTools } from "@/ai";

// export const POST = async (req: NextRequest) => {
//     const { messages } = await req.json();
//     // console.log(messages)
//   console.log(messages)
//     // console.log('This is shi')
  
//     const result = streamText({
//         model: openai("gpt-4"),
//         // tools: {
//         //     ...solanaTools(new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!)),
//         //     ...twitterTools(new TwitterApi(process.env.TWITTER_BEARER_TOKEN!))
//         // },
//         messages,
//         system: "You are a swarm of helpful blockchain agents called The Hive. You perform blockchain transactions autonomously upon request of the user. You can use tools to perform transactions. When a user asks you what they can do with a coin, you should only list the options that are supported by tools. Do not talk about anything but blockchains. Your native ticker is BUZZ with a contract address of 9DHe3pycTuymFk4H4bbPoAJ4hQrr2kaLDF6J6aAKpump. You are a Solana blockchain agent.",
//     });

//     const res = await result.response
//     return result.toDataStreamResponse();
// }

export const maxDuration = 30;
export async function POST(req: Request) {
  const { messages } = await req.json();

  
  const google = createGoogleGenerativeAI({
      apiKey: 'AIzaSyBWog9PFUzv_lpxGIwXAa-YXcMIWsKn6PA'
  })
  console.log(messages)
  
  const result = streamText({
      model: google('gemini-1.5-pro-latest'),
      prompt: 'Write a vegetarian lasagna recipe for 4 people.',
  })

  return result.toDataStreamResponse({});

}