import { Link } from "react-router";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navItems = [
  {
    to: "#",
    name: "Features",
    dropdown: ["Trends", "Lifestyle", "Business", "Technologies"],
  },
  {
    to: "/about",
    name: "Categories",
    dropdown: ["Trends", "Lifestyle", "Business", "Technologies"],
  },
  {
    to: "/blogs",
    name: "Lifestyle",
    dropdown: ["Trends", "Lifestyle", "Business", "Technologies"],
  },
];

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.name} className="relative">
            {/* Trigger */}
            <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
            {item.dropdown && (
              // dropdown
              <NavigationMenuContent className="absolute left-0 top-full mt-2 w-56 rounded-md border bg-white shadow-md">
                <ul className="grid gap-2 p-2">
                  {item.dropdown.map((sub, index) => (
                    <li key={index}>
                      <NavigationMenuLink asChild>
                        <Link
                          to="#"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent"
                        >
                          {sub}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
