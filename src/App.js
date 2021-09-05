import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Student from './Student'
import Memo from './Component/Memos/Memo';
// import Test from './Test'
// import Hooks from './Component/Hooks';
import Parent from './Component/PureComponent/Parent';
import States from './Component/Memos/States';
import States2 from './Component/States2';
import Login from './Component/Login';
import  Example from './Component/RestSprade/Example';
import RenderProps from './Component/RenderProps';
import RenderProp2 from './Component/RenderProp2';
import Counter from './Component/Counter';
import Wrapper from './Component/Wrapper';
import { Suspense,lazy, useCallback } from 'react';
import  Usestate  from './Hooks/Usestate';
// import LazyComponent from './Component/LazyComponent';
// import Context from './Hooks/Context';

//  const LazyComponent=lazy(()=>import('./Component/LazyComponent'))
 import UserEfflect from './Hooks/UserEfflect';

 import ComponentA from './Hooks/ComponentA';
 import UseReducer from './Hooks/UseReducer';
 import UseCallback from './Hooks/UseCallback';
 import UseMemoHook from './Hooks/UseMemoHook';
 import UseRefHook from './Hooks/UseRefHook';
 import UserHistoryHook from './Hooks/UserHistoryHook';
 import UseLocationHook from './Hooks/UseLocationHook';
 import Test1 from './Hooks/Test1';
 import Test2 from './Hooks/Test2';
 import Test3 from './Hooks/Test3';
 import Routes from './Component/Routing/Routes';
 import UserLogin from './Component/UserLogin';
 import  PageLifeCycle from './Component/LifeCycle/PageLifeCycle'
 import ToDoList from './Component/TodoList/ToDoList';
 import Loader from './Component/Employee/Loader';

 import { BeatLoader} from 'react-spinners'
import Header from './Component/Employee/Header';
import Footer from './Component/Employee/Footer'
import Content from './Component/Employee/Content';
function App() {


  return (
    <div className="App">   
     {/* <Student></Student> */}
     {/* <Test></Test> */}
     {/* <Hooks></Hooks> */}
     {/* <Parent></Parent>
     <Memo></Memo> */}
     {/* <States></States>
     <States2></States2> */}
     {/* <Login></Login>
     <Example></Example> */}
     {/* <RenderProps
       name="This my click  counter"   renders={(isUser)=>isUser? "Pk": 'calling function'}></RenderProps>
     <RenderProp2 name="This my click  Mouser enter"></RenderProp2>
       <br></br> */}
     {/* <Counter  Counter={(count,handleClick)=><RenderProps  c={count} fn={handleClick}>

     </RenderProps>} >
     </Counter> */}
      {/* <Counter >
      {(count,handleClick)=><RenderProps  c={count} fn={handleClick}>

</RenderProps>}
     </Counter> */}
{/* 
     <Counter  Counter={(count,handleClick)=><RenderProp2  c={count} fn={handleClick}>

</RenderProp2>} >
</Counter> */}
  {/* <RenderProp2  name="This root props" id="13232" jj="sdsdf"></RenderProp2> */}
{/*      
     <Suspense fallback={<div>Loading</div>}>
      <LazyComponent></LazyComponent>
     </Suspense> */}
     {/* <Usestate></Usestate> */}
     {/* <UserEfflect></UserEfflect> */}
     {/* <Context></Context> */}
     {/* <ComponentA></ComponentA> */}
   {/* <UseReducer></UseReducer> */}

   {/* <UseCallback></UseCallback> */}
   {/* <UseMemoHook></UseMemoHook> */}
   {/* <UseRefHook></UseRefHook> */}
   {/* <UserHistoryHook></UserHistoryHook> */}
   {/* <Router>
   <UseLocationHook></UseLocationHook>
   </Router> */}
  
 
   {/* <Routes></Routes> */}
   {/* <UserLogin></UserLogin> */}
   {/* <PageLifeCycle  name="pintu"></PageLifeCycle> */}
   {/* <ToDoList></ToDoList> */}
   {/* <Loader loading={true}></Loader> */}
   {/* <BeatLoader  loading   size={150} /> */}
   <Header></Header>
   <Content></Content>
   <Footer></Footer>
    </div>
  );
}

export default App;
