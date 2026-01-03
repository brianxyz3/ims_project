import type { LucideIcon } from "lucide-react";

export interface LinkOrTextWithIconItem {
    icon: LucideIcon;
    text: string;
}

export interface TextItem {
    text: string;
    link: string;
}