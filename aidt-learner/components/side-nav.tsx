'use client'

import { useState } from 'react'
import { Home, Library, GraduationCap, Award, Menu, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar"

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Library, label: "My Library", href: "/library" },
  { icon: GraduationCap, label: "Courses", href: "/courses" },
  { icon: Award, label: "Certificates", href: "/certificates" },
]

export function SideNav() {
  const [open, setOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-[240px] mt-16">
          <SidebarProvider>
            <Sidebar className="w-full border-r-0">
              <SidebarContent>
                <SidebarMenu className="space-y-2 p-4">
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton asChild onClick={() => setOpen(false)}>
                        <a href={item.href} className="flex items-center gap-4 p-4 text-lg">
                          <item.icon className="h-6 w-6" />
                          <span>{item.label}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>
          </SidebarProvider>
        </SheetContent>
      </Sheet>

      <div className="hidden md:flex">
        <Button
          variant="ghost"
          size="icon"
          className="fixed left-0 top-[1.2rem] z-50 ml-4"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>

        <SidebarProvider>
          <Sidebar className={`hidden md:flex h-screen flex-shrink-0 mt-16 transition-all duration-300 
            ${isCollapsed ? 'w-[80px]' : 'w-[300px]'}`}>
            <SidebarContent>
              <SidebarMenu className="space-y-2 p-4">
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
                      <a href={item.href} className="flex items-center gap-4 p-4 text-lg">
                        <item.icon className="h-6 w-6" />
                        {!isCollapsed && <span>{item.label}</span>}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
        </SidebarProvider>
      </div>
    </>
  )
}

