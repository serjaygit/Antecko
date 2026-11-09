import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { HEADER_DATA } from "@/config/header.data";
import { ExternalLink } from "lucide-react";

export default function Navbar() {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList className="gap-2">
        {HEADER_DATA.map((item) => (
          <NavigationMenuItem key={item.href}>
            {item.sublinks ? (
              <>
                <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="flex flex-col w-105 gap-1 p-2">
                    {item.sublinks.map((sublink, index) => (
                      <NavigationMenuLink key={sublink.href} asChild>
                        <Link
                          href={`/services/${sublink.href}`}
                          className="group flex items-center font-medium"
                        >
                          <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                            0{index + 1}
                          </span>

                          <span className="flex-1 transition-colors group-hover:text-foreground">
                            {sublink.label}
                          </span>

                          <ExternalLink className="size-4 opacity-0 group-hover:opacity-100 transition-all" />
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className="text-muted-foreground font-medium hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
