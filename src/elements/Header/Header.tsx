'use client';
import TabButton from '../../../../mythras-projects-react/website/src/components/tabButtons';
import { MENUITEMS } from './Header.data';
import './Header.scss';

export default function Header(props: any) {

  return (
    <div id="Header">
      <div className="headText {isSelected ? 'active' : ''}">Üdvözöllek az Árnyak Kohójában!</div>
      <menu>
          {MENUITEMS.map((menuItem)=> (
            <TabButton 
            key={menuItem.id} 
            isSelected={props.selectedMenu === menuItem.id} 
            onClick={()=> props.handleSelect(menuItem.id)}>
              {menuItem.nev}
            </TabButton>
          ))}
        </menu>

    </div>
  );
}