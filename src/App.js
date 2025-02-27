// import Navbar from './components/Navbar';
// import DynamicDisplay from './components/DynamicDisplay';
// import Display from './components/Display';
// import DisplayDate from './components/DisplayDate';
// import Object from './components/Object';
// import Profile from './components/Profile';
// import CardDisplay from './components/Card';
// import List from './components/List';
// import Alperen from './components/Alperen';
// import Practice from './components-new/Practice';

import EventHandler from "./components/EventHandler";
import EventHandlerasProp from "./components/eventHandlerasProp";
import EventHandlerPassing from "./components/EventHandlerPassing";
import EventPropogation from "./components/EventPropogation";
import PreventDefault from "./components/PreventDefault";


function App() {
  return (
    <div className="container">
    {/* <Alperen />
    <Navbar />
    <Display />
    <DynamicDisplay />
    <DisplayDate />
    <Object />
    <Profile />
    <CardDisplay />
    <List /> */}
    {/* <Practice/> */}
    <EventHandler />
    <EventHandlerPassing />
    <EventHandlerasProp />
    <EventPropogation />
    <PreventDefault />
    
    </div>
  );
}

export default App;
