"use client";

import React, { useRef, useEffect } from 'react';

import { CornerDownRight } from 'lucide-react';

import Textarea from 'react-textarea-autosize'

import { Button, Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui';

import { useEnterSubmit } from '../_hooks';

import { useChat } from '../_contexts/chat';

import { cn } from '@/lib/utils';

const ChatInput: React.FC = () => {

    const { input, setInput, onSubmit, isLoading, solanaPrivateKey } = useChat();

    const { onKeyDown } = useEnterSubmit({ onSubmit: onSubmit })

    const inputRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (solanaPrivateKey && inputRef.current) {
            inputRef.current.focus();
        }
    }, [solanaPrivateKey]);

    return (
        <div className="flex flex-col w-full">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}
                className={cn(
                    // Base styles
                    "w-full rounded-md flex flex-col overflow-hidden transition-colors duration-200 ease-in-out border border-transparent shadow-lg",
                    // Light mode styles
                    "bg-neutral-100 focus-within:border-[#2f9999]",
                    // Dark mode styles
                    "dark:bg-neutral-800/50 dark:focus-within:border-brand-600",
                    isLoading && "opacity-50 cursor-not-allowed"
                )}
            >
                <Textarea
                    ref={inputRef}
                    tabIndex={0}
                    onKeyDown={onKeyDown}
                    placeholder="Ask ZnytAi Agent anything..."
                    className={cn(
                        "w-full max-h-60 resize-none bg-transparent px-3 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-600 dark:placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50",
                        "focus-visible:outline-none",
                        "dark:placeholder:text-neutral-400",
                    )}
                    value={input}
                    onChange={e => {
                        setInput(e.target.value);
                    }}
                    disabled={isLoading}
                />
                <div className="flex items-center justify-end px-2 pb-2">
                    <TooltipProvider>
                        <Tooltip delayDuration={0}>
                            <TooltipTrigger asChild>
                                <Button 
                                    type="submit" 
                                    size="icon" 
                                    disabled={input.trim() === '' || isLoading}
                                    variant="ghost"
                                    className="h-8 w-8"
                                >
                                    <CornerDownRight className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                                    <span className="sr-only">Send message</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Send message</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </form>
        </div>
    );
};

export default ChatInput;