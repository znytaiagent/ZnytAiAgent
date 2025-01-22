'use client';

import React from 'react'

import { Markdown, Icon } from '@/components/ui';

import ToolInvocation from './tools';

import { cn } from '@/lib/utils';

import type { Message } from 'ai';
import Logo from '@/components/ui/logo';

interface Props {
    message: Message,
    className?: string,
    previousMessage?: Message,
    nextMessage?: Message
}

const Message: React.FC<Props> = ({ message, className, previousMessage, nextMessage }) => {

    const isUser = message.role === 'user';

    const nextMessageSameRole = nextMessage?.role === message.role;
    const previousMessageSameRole = previousMessage?.role === message.role;

    return (
        <div className={cn(
            // base styles
            "flex w-full px-2 py-4 max-w-full last:border-b-0 first:pt-0",
            // mobile styles
            "flex-col gap-2",
            // desktop styles
            "md:flex-row md:gap-4 md:px-4",
            nextMessageSameRole && "pb-0",
            previousMessageSameRole && "pt-0",
            !nextMessageSameRole && "border-b border-gray-200 dark:border-neutral-700",
            className,

        )}>
            <div className={cn(
                "flex items-center md:items-start gap-4",
                previousMessageSameRole && "hidden md:block"
            )}>
                <div className={cn(
                    "flex items-center justify-center w-6 h-6 md:w-10 md:h-10 rounded-full",
                    isUser && "bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700",
                    previousMessageSameRole && "opacity-0"
                )}>
                    {
                        isUser ? (
                            <Icon
                                name="User"
                                className="w-4 h-4 md:w-6 md:h-6"
                            />
                        ) : (
                            <Logo className="w-6 h-6 md:w-10 md:h-10" />
                        )
                    }
                </div>
                <p className={cn(
                    "text-sm font-semibold md:hidden",
                    isUser ? "text-neutral-900 dark:text-neutral-100" : "text-brand-500 dark:text-brand-500"
                )}>
                    {message.role === 'user' ? 'You' : 'ZnytAi'}
                </p>
            </div>
            <div className="md:pt-2 w-full max-w-full md:flex-1 md:w-0 overflow-hidden flex flex-col gap-2">
                {
                    message.toolInvocations && message.toolInvocations.length > 0 && (
                        <div className="flex flex-col gap-2">
                            {message.toolInvocations.map((tool) => (
                                <ToolInvocation key={tool.toolCallId} tool={tool} />
                            ))}
                        </div>
                    )
                }
                {
                    message.content && (
                        <Markdown>
                            {message.content}
                        </Markdown>
                    )
                }
            </div>
        </div>
    )
}

export default Message;