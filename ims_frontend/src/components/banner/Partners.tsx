import type { LinkOrTextWithIconItem } from '@/types/linkOrTextWithIconItem'
import React from 'react'

interface PartnersProp extends LinkOrTextWithIconItem{}

const Partners: React.FC<PartnersProp> = ({icon, text}) => {
    const Icon = icon
    return (
        <span className="text-xl font-bold text-foreground flex items-center gap-2"><Icon/> {text}</span>
    )
}

export default Partners