import { Link } from "react-router-dom"; // ✅ not react-router
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const navItems = [
  {
    name: "Features",
    dropdown: ["Trends", "Lifestyle", "Business", "Technologies"],
  },
  {
    name: "Categories",
    dropdown: ["Trends", "Lifestyle", "Business", "Technologies"],
  },
  {
    name: "Lifestyle",
    dropdown: ["Trends", "Lifestyle", "Business", "Technologies"],
  },
];

export default function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.name}>
            {/* trigger */}
            <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>

            {/* dropdown content */}
            <NavigationMenuContent>
              <ul className="grid gap-2 p-2">
                {item.dropdown.map((sub, index) => (
                  <li key={index}>
                    <NavigationMenuLink asChild>
                      <Link
                        to="#"
                        className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                      >
                        {sub}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      {/* viewport is CRUCIAL for correct positioning + animation */}
      <NavigationMenuViewport />
    </NavigationMenu>
  );
}
