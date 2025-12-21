import React from "react";
import Logo from "./Logo";
import {RiMenuLine, RiArrowDownSLine} from "@remixicon/react";
import { navItems } from "../data/data";
import SearchInput from "./Searchinput";


export default function Header(){
    return <header>
        <div className="container">
            {/* Logo */}
            <Logo />
            {/* Mobile Menu */}
            <div className="">
                {/* Desktop Menu*/}
                <nav className ="">
                </nav>
                {/* Search bar */}
                <SearchInput />
                {/* list */}
                <ul className="">
 { navItems.map(item => (
    <li key={item.id}>
        <a href="" className="">
            {item.label}
            {item.hasDropdown && <RiArrowDownSLine />}
            {item.hasDropdown && (
                <ul className="">
                    {item.dropdown.map(link =>(
                        <li key={link} >
                            <a href="#">{link}</a>
                        </li>
                    ))}
                </ul>
            )}
        </a>
    </li>
 )) }
                </ul>
            </div>
            {/* Desktop Menu */}  
        </div>
    </header>;
}