import { usePathname } from "next/navigation"
import { navDetails } from "../data/navdata"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu"

export const Navbar = () => {
    const pathname =usePathname()
    return (
        <>
            <div className=" md: px-[80]">

                <NavigationMenu>
                    <NavigationMenuList>
                        {navDetails.map((item,index)=>(
                        <NavigationMenuItem key={index}>
                                    <NavigationMenuLink href={item.link} className={pathname===item.link? "font-semibold text-green md:text-sm lg:text-md":'font-normal text-black md:text-sm lg:text-md'}>{item.title} </NavigationMenuLink>
                                </NavigationMenuItem>
                        ))}
                        
                        
                    </NavigationMenuList>
                </NavigationMenu>

            </div>
        </>
    )
}
