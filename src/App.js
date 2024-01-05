import logo from './logo.svg';
import './App.css';
// import { Accordion } from '../src/stories/accordion/Accordion';
import { Button } from './stories/button/Button';
import { Card } from './stories/card/Card';
import { Dropdown } from './stories/dropdown/Dropdown';
import { Grid } from './stories/grid/Grid';
import { Input } from './stories/input/Input'
import { Form } from './stories/form/Form';
import { List } from './stories/list/List';
import { DockPanel, Panel } from './stories/panel/Panel';
import { Menu } from './stories/menu/Menu';
import { Toolbar } from './stories/toolbar/Toolbar';
import { Tree } from './stories/tree/Tree';
import { Tabs } from './stories/tabs/Tabs';
import { Wizard } from './stories/wizard/Wizard';

function App() {
  // const data = {header:["Severity","Error ID","Message","Status"],content:[["Content 1","Content ","Content 3","Content "],["Content 5","Content ","Content 7","Content "]]}
  return (
    <div style={{backgroundColor:"#ffffff",height:"100vh"}} className="App">
      
      <div style={{padding:"50px"}}>
        {/* <Accordion list={["Sources","Destination"]}/> */}
        {/* <Button context="Topbar" split={false} toggled={false} label="File"/> */}
        {/* <Card /> */}
        {/* <Dropdown context={"Toolbar"} item_list={ [ { name: "sample name", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+O", hasSubMenu: true, subMenu: [{ name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }, { name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }], endGroup: false },
    { name: "sample name", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+O", hasSubMenu: false, subMenu: [{ name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }, { name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }], endGroup: false },
    { name: "sample name", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+O", hasSubMenu: true, subMenu: [{ name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }, { name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }], endGroup: false },
]}/> */}
        {/* <Grid context="Compact" data={data}/> */}
        {/* <Input /> */}
        {/* <Form /> */}
        {/* <List /> */}
        {/* <Panel /> */}
        {/* <DockPanel /> */}
        {/* <Menu /> */}
        {/* <Toolbar /> */}
        {/* <Tree /> */}
        {/* <Tabs /> */}
        <Wizard />
        </div>
      
    </div>
  );
}

export default App;
