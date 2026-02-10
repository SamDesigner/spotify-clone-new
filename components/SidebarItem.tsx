import { IconType } from "react-icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
interface SidebarItemProps {
    icon: IconType,
    label: string,
    active?: boolean,
    href: string
}

const SidebarItem = ({ icon: Icon, label, active, href }: SidebarItemProps) => {
    return (
        <div>
            <Link href={href} className={twMerge(`f
                flex
                flex-row
                h-auto
                items-center
                w-full
                gap-x-4
                font-medium
                cursor-pointer
                hover:text-white
                transition
                text-neutral-400
                py-1 
                `,
                active && 'text-white'
                )}>
                    <Icon size={26} />
                    <p className="truncate w-full">{label}</p>
            </Link>
        </div>
    );
}

export default SidebarItem;