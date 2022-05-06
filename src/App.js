import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddItem from './Pages/AddItem/AddItem';
import Home from './Pages/Home/Home';
import Item from './Pages/Item/Item';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Shared/Login/Login';
import Register from './Pages/Shared/Register/Register';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import Update from './Pages/Update/Update';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/item" element={<Item/>}></Route>
       <Route path="/addItem" element={
         <RequireAuth>
           <AddItem/>
         </RequireAuth>
       }></Route>
       <Route path="/manageInventory" element={<ManageInventory/>}></Route>
       <Route path="/update/:id" element={<Update/>}></Route>
       <Route path="/register" element={<Register/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
     </Routes>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
