import React from 'react'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface Props {
    className?: string,
    showText?: boolean
}

export const Logo: React.FC<Props> = ({ className, showText = false }) => {
    return (
        <div className="flex items-center gap-2">
            <Image 
                src="/zyn logo.png" 
                alt="Logo" 
                width={100} 
                height={100} 
                className={cn("w-10 h-10 hidden dark:block", className)} 
            />
            <Image 
                src="/zyn logo.png" 
                alt="Logo" 
                width={100} 
                height={100} 
                className={cn("w-10 h-10 block dark:hidden", className)} 
            />
            {showText && (
                <span className="text-lg font-bold">
                    ZnytAi Agent
                </span>
            )}
        </div>
    )
}

export default Logo