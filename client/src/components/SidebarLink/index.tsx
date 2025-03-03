import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function SidebarLink({ href, icon: Icon, label }: SidebarLinkProps) {
  return (
    <Link href={href} className="w-full">
      <div className="flex items-center gap-4 py-3 px-8 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
        <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
        <span className={`font-medium text-gray-800 dark:text-gray-100`}>
          {label}
        </span>
      </div>
    </Link>
  )
}
