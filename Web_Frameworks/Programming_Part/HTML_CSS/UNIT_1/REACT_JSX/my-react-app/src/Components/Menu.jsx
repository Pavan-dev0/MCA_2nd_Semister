import React, {useState} from 'react';
const MenuData=[{label:"Menu 1"}, {label: "Menu 2", submenu:[{label:"Sub Menu 1"}, {label:"Sub Menu 2"}], }, {label:"Menu 3" , submenu:[{label:"Sub Menu 1"}, {label:"Sub Menu 2"}],}, 
{label:"Menu 3", submenu:[{label:"Sub Menu 1"},{label:"Sub Menu 2", submenu:[{label:"Nested Sub Menu 1"}, {label:"Nested Sub Menu 2"},],},{label:"Sub Menu 3"}, ],},{label:"Menu 4", submenu:[{label:"Sub Menu 1"},{label:"Sub Menu 2"}], },];

function MenuItem({item}){
    const [open,setOpen]=useState(false);
    const hasSubMenu=Array.isArray(item.submenu) && item.submenu.length>0;

    return (
        <li style={{marginBotton: "6px"}}> 
        <button onClick={()=> hasSubMeny && setOpen((prev) => !prev)}
        style={{
            border:"1px solid #ccc",
            borderRadius:"6px",
            background:"#fff",
            cursor:hasSubmenu? "pointer" :"default",
            padding: "6px 10px",

        }}>
            {item.label} {hasSubMenu ? (open ? "-" : "+"):""}</button>
            {hasSubMenu && open && (
                <ul style={{listStyle:"none",marginTop:"8px",paddingLeft:"16px"}}>
                    {item.submenu.map((subItem,index)=>( 
                        <MenuItem key={`${subItem.label}-${index}`} item={subItem}/>
                    ))}

                </ul>
            )}
            </li>

    )
}