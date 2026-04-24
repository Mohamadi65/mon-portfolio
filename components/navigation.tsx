"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"
import {
  Users,
  School,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Home,
  UserCheck,
  Gift,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const navigation = [
  { name: "nav.home", href: "/", icon: Home },
  { name: "nav.persons", href: "/personnes", icon: Users },
  { name: "nav.families", href: "/familles", icon: UserCheck },
  { name: "nav.schools", href: "/ecoles", icon: School },
  { name: "nav.villages", href: "/villages", icon: MapPin },
  { name: "nav.jobs", href: "/metiers", icon: Briefcase },
  { name: "nav.schoolYears", href: "/rentrees", icon: GraduationCap },
  { name: "nav.materials", href: "/materiels", icon: Heart },
  { name: "nav.donations", href: "/dons", icon: Gift },
  { name: "nav.users", href: "/utilisateurs", icon: Settings },
]

export function Navigation() {
  const pathname = usePathname()
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo et titre */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              {/* Logo stylisé inspiré du baobab */}
              <div className="relative">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-orange-600">
                  <path
                    d="M20 35 L20 25 M15 25 Q20 20 25 25 M12 22 Q20 15 28 22 M10 20 Q20 10 30 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle cx="20" cy="8" r="2" fill="currentColor" />
                  <circle cx="15" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="25" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="12" cy="18" r="1" fill="currentColor" />
                  <circle cx="28" cy="18" r="1" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="text-orange-600">SAPAGA</span>{" "}
                  <span className="text-gray-800 dark:text-gray-200">MANAGEMENT</span>
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t("home.subtitle")}</p>
              </div>
            </div>
          </div>

          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors hover:text-orange-600",
                    isActive
                      ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                      : "text-gray-700 dark:text-gray-300 hover:text-orange-600",
                  )}
                >
                  {t(item.name)}
                </Link>
              )
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <LanguageSelector />

            {/* Mobile menu button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">S</span>
                      </div>
                      <span className="font-bold">SAPAGA</span>
                    </div>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                      </Button>
                    </SheetClose>
                  </div>
                  <div className="flex-1 overflow-auto py-4">
                    <div className="flex flex-col space-y-1">
                      {navigation.map((item) => {
                        const isActive = pathname === item.href
                        return (
                          <SheetClose asChild key={item.name}>
                            <Link
                              href={item.href}
                              className={cn(
                                "flex items-center px-4 py-3 text-sm font-medium rounded-md",
                                isActive
                                  ? "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400"
                                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
                              )}
                            >
                              <item.icon className="mr-3 h-5 w-5" />
                              {t(item.name)}
                            </Link>
                          </SheetClose>
                        )
                      })}
                    </div>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-800 py-4">
                    <div className="flex items-center justify-between px-4">
                      <ThemeToggle />
                      <LanguageSelector />
                    </div>
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        className="w-full mt-4 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 justify-start"
                      >
                        <LogOut className="mr-3 h-5 w-5" />
                        {t("nav.logout")}
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <button className="hidden lg:flex items-center space-x-2 text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-500 transition-colors">
              <LogOut className="w-4 h-4" />
              <span className="text-sm font-medium">{t("nav.logout")}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
