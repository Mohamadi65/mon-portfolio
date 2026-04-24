"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Users,
  School,
  MapPin,
  Briefcase,
  Calendar,
  Package,
  Gift,
  UsersRound,
  UserCog,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const menuItems = [
    {
      label: t("sidebar.dashboard"),
      icon: Home,
      href: "/dashboard",
    },
    {
      label: t("sidebar.persons"),
      icon: Users,
      href: "/dashboard/users",
    },
    {
      label: t("sidebar.schools"),
      icon: School,
      href: "/dashboard/ecoles",
    },
    {
      label: t("sidebar.villages"),
      icon: MapPin,
      href: "/dashboard/villages",
    },
    {
      label: t("sidebar.professions"),
      icon: Briefcase,
      href: "/dashboard/metiers",
    },
    {
      label: t("sidebar.schoolYears"),
      icon: Calendar,
      href: "/dashboard/rentrees",
    },
    {
      label: t("sidebar.materials"),
      icon: Package,
      href: "/dashboard/materiels",
    },
    {
      label: t("sidebar.donations"),
      icon: Gift,
      href: "/dashboard/dons",
    },
    {
      label: t("sidebar.families"),
      icon: UsersRound,
      href: "/dashboard/familles",
    },
    {
      label: t("sidebar.users"),
      icon: UserCog,
      href: "/dashboard/utilisateurs",
    },
  ]

  return (
    <>
      {/* Mobile Sidebar - Sheet */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="p-6 pb-0">
            <SheetTitle className="text-left">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-orange-600">SAPAGA</span>
              </div>
            </SheetTitle>
          </SheetHeader>
          <nav className="space-y-1 p-4">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                    isActive
                      ? "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-500"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                  )}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden lg:flex flex-col border-r bg-card transition-all duration-300 fixed left-0 top-0 h-screen z-40",
          collapsed ? "w-16" : "w-64",
          className,
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-orange-600">SAPAGA</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className={cn("h-8 w-8", collapsed && "mx-auto")}
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                  isActive
                    ? "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-500"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                  collapsed && "justify-center",
                )}
                title={collapsed ? item.label : undefined}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <div className={cn("flex items-center", collapsed ? "flex-col space-y-2" : "justify-between")}>
            <ThemeToggle />
            <LanguageSelector iconOnly={collapsed} />
          </div>
        </div>
      </aside>
    </>
  )
}
