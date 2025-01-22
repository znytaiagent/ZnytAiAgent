import React, { useMemo } from 'react';

import ReactMarkdown, { Components } from "react-markdown";

import { cn } from '@/lib/utils';

interface Props {
    children: string
    asSpan?: boolean
    components?: Components,
    headingClassName?: string
}

export const Markdown: React.FC<Props> = ({ children, asSpan = false, components, headingClassName }) => {


    const value = useMemo(() => {
        return children.replaceAll("\\(", "$")
            .replaceAll("\\)", "$")
            .replaceAll("\\[", "$$")
            .replaceAll("\\]", "$$");
    }, [children]);

    const memoizedContent = useMemo(() => (
        <ReactMarkdown
            className={asSpan ? undefined : "prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 flex flex-col gap-4"}
            components={{
                h1({ children }) {
                    return <h1 className={cn("text-xl md:text-2xl font-bold", headingClassName)}>{children}</h1>
                },
                h2({ children }) {
                    return <h2 className={cn("text-lg md:text-xl font-bold", headingClassName)}>{children}</h2>
                },
                h3({ children }) {
                    return <h3 className={cn("text-md md:text-lg font-bold", headingClassName)}>{children}</h3>
                },
                h4({ children }) {
                    return <h4 className={cn("text-sm md:text-md font-bold", headingClassName)}>{children}</h4>
                },
                h5({ children }) {
                    return <h5 className={cn("text-xs md:text-sm font-bold", headingClassName)}>{children}</h5>
                },
                h6({ children }) {
                    return <h6 className={cn("text-xs font-bold", headingClassName)}>{children}</h6>
                },
                p({ children, node }) {
                    const hasBlockElements = node?.children?.some((child: { type: string, tagName: string }) => 
                        child.type === 'element' && 
                        ['div', 'p', 'blockquote', 'form'].includes(child.tagName)
                    );

                    if (hasBlockElements) {
                        return (
                            <div className="text-sm md:text-base">
                                {children}
                            </div>
                        );
                    }

                    if (asSpan) {
                        return <span>{children}</span>
                    }
                    return <p className="text-sm md:text-base">{children}</p>
                },
                a({ href, children }) {
                    return (
                        <a
                            href={href}
                            className="text-brand-500 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {children}
                        </a>
                    )
                },
                ol({ children }) {
                    return <ol className="list-decimal pl-4 text-sm md:text-base flex flex-col gap-2">{children}</ol>
                },
                ul({ children }) {
                    return <ul className="list-disc pl-4 text-sm md:text-base flex flex-col gap-2">{children}</ul>
                },
                li({ children }) {
                    return <li className="pl-0 ml-4 text-sm md:text-base space-y-2">{children}</li>
                },
                img({ src, alt }) {
                    return <img
                        src={src}
                        alt={alt}
                        className="mx-auto"
                    />
                },
                ...components
            }}
        >
            {value}
        </ReactMarkdown>
    ), [value, asSpan, components]);

    return memoizedContent;
};

Markdown.displayName = 'Markdown'