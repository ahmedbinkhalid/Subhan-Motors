
import { IconType } from 'react-icons'; 

interface LinkOption {
    title: string;
    path: string;
}

export interface SideBarLinkProps {
    linkTitle: string;
    linkPath?: string;
    LinkIcon: IconType;
    linkOptions?: LinkOption[];
}
