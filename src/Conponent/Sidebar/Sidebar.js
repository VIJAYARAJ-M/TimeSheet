import React from "react";
import Nav from "../Navbar/Navbar";
import "../Style/Sidebar.css";
import { menuItem } from "./Menuitem";
import SubMenu from "./Submenu";

export default function Sidebar({children}) {
    return (
        <div className="containers">
            <div  className="sidebar" >
                <div className="top">
                    <h5  className="" style={{color:"white"}}>Prowesstics</h5>
                   
                </div>
                <div>
                    {menuItem.map((item, index) => {
                        
                        return <SubMenu item={item} key={index}

                        />
                    })}

                </div>
               
            </div>
          
            <main>


               <Nav/>

                <div style={{ padding:"20px" }}>
                    {children}
                </div>


               

            </main>

        </div>
    )
}