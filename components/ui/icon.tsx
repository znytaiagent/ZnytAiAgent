import { memo } from 'react'

import { icons } from 'lucide-react'

import { cn } from '@/lib/utils'

import type { IconName } from '@/types'

export type IconProps = {
  name: IconName
  className?: string
  strokeWidth?: number
}

export const Icon = memo(({ name, className, strokeWidth }: IconProps) => {
  const IconComponent = icons[name]

  if (!IconComponent) {
    return null
  }

  return <IconComponent className={cn('w-4 h-4', className)} strokeWidth={strokeWidth || 2.5} />
})

Icon.displayName = 'Icon'
