import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/common/Header";
import Home from "./components/Home";
// import VetPortal from './components/portals/VetPortal';
// import AllPetProfile from './components/petProfile';
// import AddPetProfile from './components/AddPetProfile';
// import UpdatePetProfile from './components/UpdatePetProfile';

import AdoptPet from "./components/User/AdoptPet";
import Footer from "./components/common/Footer";
import ShelterPet from "./components/User/ShelterPet";
import UserPortal from "./components/User/UserProtal";
import Booking from "./components/User/myBooking";
import Events from "./components/User/Events";
import Pets from "./components/User/myPets";
import Profile from "./components/User/myProfile";

import SupplierList from "./components/SupplierList";
import AddSuppliers from "./components/AddSuppliers";
import ManageSuppliers from "./components/ManageSuppliers";
import UpdateSupplier from "./components/UpdateSupplier";
import StockRequests from "./components/StockRequests";
import StockBudgetRequests from "./components/StockBudgetRequests";
import StockBudgetRequestForm from "./components/StockBudgetRequestForm";
import UpdateStockBudgetRequest from "./components/UpdateStockBudgetRequest";

import Spinner from "./components/common/Spinner";

// import AdoptPet from './components/adoptPetPage/AdoptPet';
// import ShelterPet from './components/shelterPetPage/ShelterPet';
// import UserPortal from './components/User/UserProtal';
// import Booking from './components/User/Booking';
// import Events from './components/User/Events';
// import Pets from './components/User/Pets';
// import Profile from './components/User/Profile';
import VehicleDashboard from "./components/VehicleDashboard";
import EditVehicle from "./components/EditVehicle";
import Vehicles from "./components/Vehicles";
import AddNewVehicle from "./components/AddNewVehicle";
import PendingBookings from "./components/PendingBookings";
import AddAvailability from "./components/AddAvailability";
import Availabilities from "./components/Availabilities";
import EditAvailabilities from "./components/EditAvailabilities";
import AddTBooking from "./components/AddTBooking";
import AddVehicleBudgetRequestForm from "./components/AddVehicleBudgetRequest";
import AllVBudgetRequests from "./components/AllVBudgetRequests";
import VHome from "./components/VHome";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/common/Header";
import Home from "./components/Home";
import VetPortal from "./components/portals/VetPortal";
import AllPetProfile from "./components/Animal_Management/Pet_Profile/petProfile";
import AddPetProfile from "./components/Animal_Management/Pet_Profile/AddPetProfile";
import UpdatePetProfile from "./components/Animal_Management/Pet_Profile/UpdatePetProfile";
import ProfilePage from "./components/Animal_Management/Pet_Profile/ProfilePage";
import HealthProfile from "./components/Animal_Management/Health_Profile/HealthProfile";
import AddHealth from "./components/Animal_Management/Health_Profile/AddHealth";
import DisplayHealth from "./components/Animal_Management/Health_Profile/DisplayHealth";
import Addvac from "./components/Animal_Management/Health_Profile/Addvac";
import AdoptPet from "./components/adoptPetPage/AdoptPet";
import UpdateVac from "./components/Animal_Management/Health_Profile/UpdateVac";
import Dashboard from "./components/Animal_Management/Dashboard/Dashboard";
import Shelterpets from "./components/Animal_Management/Pet_Profile/ShelterPets";
import Breed from "./components/Animal_Management/Pet_Profile/Breed";
import Footer from "./components/common/Footer";
import ShelterPet from "./components/User/ShelterPet";
import UserPortal from "./components/User/UserProtal";
import Booking from "./components/User/myBooking";
import Events from "./components/User/Events";
import Pets from "./components/User/myPets";
import Profile from "./components/User/myProfile";
import PortalHandler from "./components/PortalHandler";
import Spinner from "./components/common/Spinner";
import AddEvent from './components/EventManagement/AddEvent';
import AllEvent from './components/EventManagement/AllEvent';
import RegisterEvent from './components/EventManagement/RegisterEvent';
import AllRegisterEvent from './components/EventManagement/AllRegisterEvent';
import AllEventUser from './components/EventManagement/AllEventUser';
import EditEvent from './components/EventManagement/EditEvent';
import AddEventFeedback from './components/EventManagement/AddEventFeedback';
import AllEventFeedback from './components/EventManagement/AllEventFeedback';
import EventReport from './components/EventManagement/EventReport';
import BudgetRequestForm from './components/EventManagement/BudgetRequestForm';
import AllEventBudget from './components/EventManagement/AllEventBudget';
import EditBudget from './components/EventManagement/BudgetRequestEdit';
import StockRequestForm from './components/EventManagement/StockRequestForm';
import StockRequestEdit from './components/EventManagement/StockRequestEdit';
import AllEventStock from './components/EventManagement/AllEventStock';
import LeftSideBar from './components/LeftSideBar'
import EventChart from './components/EventManagement/EventChart'
import QRCodeContent from './components/EventManagement/QRCodeContent'
import IncomeExpenseReport from './components/EventManagement/IncomeExpenseReport'
import EventPortal from './components/portals/EventPortal';
import EventDashboard from './components/EventManagement/EventDashboard';
import EditBooking from './components/EventManagement/EditBooking';






function App() {
  return (
    <>
      <Router>
        <div className="App">
  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="shelterpet" element={<ShelterPet />} />
            <Route path="adoptpet" element={<AdoptPet />} />
            //user
            <Route path="user" element={<UserPortal />} />
            <Route path="profile" element={<Profile />} />
            <Route path="booking" element={<Booking />} />
            <Route path="pets" element={<Pets />} />
            <Route path="events" element={<Events />} />
            //
            <Route path="/supplierList" element={<SupplierList />} />
            <Route path="/addSuppliers" element={<AddSuppliers />} />
            <Route path="/manageSuppliers" element={<ManageSuppliers />} />
            <Route path="/updateSuppliers/:id" element={<UpdateSupplier />} />
            <Route path="/stockRequests" element={<StockRequests />} />
            <Route
              path="/StockBudgetRequests"
              element={<StockBudgetRequests />}
            />
            <Route
              path="/StockBudgetRequestForm"
              element={<StockBudgetRequestForm />}
            />
            <Route
              path="/UpdateStockBudgetRequest/:id"
              element={<UpdateStockBudgetRequest />}
            />
            <Route path="test" element={<Spinner />} />
            <Route path="/" element={<PortalHandler />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="shelterpet" element={<ShelterPet />} />
            <Route path="adoptpet" element={<AdoptPet />} />
            <Route path="user" element={<UserPortal />} />
            <Route path="profile" element={<Profile />} />
            <Route path="booking" element={<Booking />} />
            <Route path="pets" element={<Pets />} />
            <Route path="events" element={<Events />} />
            <Route path="test" element={<Spinner />} />
            <Route path="petprofile" element={<VetPortal />}>
              <Route path="updatepet/:id" element={<UpdatePetProfile />} />
              <Route path="allpetprofile" element={<AllPetProfile />} />
              <Route path="addpet" element={<AddPetProfile />} />
              <Route path="addhealthprofile" element={<AddHealth />} />
              <Route path="profilepage/:id" element={<ProfilePage />} />
              <Route path="healthprofile" element={<HealthProfile />} />
              <Route path="displayhealth/:id" element={<DisplayHealth />} />
              <Route path="addvac/:id/:state" element={<Addvac />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="spets" element={<Shelterpets />} />
              <Route path="breed" element={<Breed />} />
              <Route path="upvac/:id/:index/:state" element={<UpdateVac />} />
            </Route>
            <Route path="/vhome" exact element={<VHome />} />
            <Route
              path="/vehicledashboard"
              exact
              element={<VehicleDashboard />}
            />
            <Route path="/vehicles" exact element={<Vehicles />} />
            <Route path="/editvehicle/:id" exact element={<EditVehicle />} />
            <Route path="/addnvehicle" exact element={<AddNewVehicle />} />
            <Route path="/pending" element={<PendingBookings />} />
            <Route path="/tbooking" exact element={<AddTBooking />} />
            <Route path="/availability" exact element={<Availabilities />} />
            <Route
              path="/addavailability"
              exact
              element={<AddAvailability />}
            />
            <Route
              path="/editavailability/:id"
              exact
              element={<EditAvailabilities />}
            />
            <Route
              path="/vbudgets/:id"
              exact
              element={<AllVBudgetRequests />}
            />
            <Route
              path="/addvbudget"
              exact
              element={<AddVehicleBudgetRequestForm />}
            />
            {/* <Route path='user' element={<UserPortal />} />
              <Route path='profile' element={<Profile />} />
              <Route path='booking' element={<Booking />} />
              <Route path='pets' element={<Pets />} />
              <Route path='Events' element={<Events />} /> */}



            // EventManagement
            <Route path='eventdashboard' element={<EventPortal />} >
                
                 <Route path='getEvents' element={<AllEvent />} />
                 <Route path='addEvent' element={<AddEvent />} />
                 <Route path='editEvent/:id' element={<EditEvent />} />
                 <Route path='getFeedbacks' element={<AllEventFeedback />} />
                 <Route path='budget' element={<AllEventBudget />} />
                 <Route path='editbudget/:id' element={<EditBudget />} />
                 <Route path='addBudget' element={<BudgetRequestForm />} />
                 <Route path='stock' element={<AllEventStock />} />
                 <Route path='editstock/:id' element={<StockRequestEdit />} />
                 <Route path='addStock' element={<StockRequestForm />} />
                 <Route path='eventbooking' element={<AllRegisterEvent />} />
                 <Route path='chart' element={<IncomeExpenseReport />} />
                 <Route path='dashboard' element={<EventDashboard />} />
                 <Route path='report' element={<EventReport />} />
                 <Route path='addbooking/:id' element={<RegisterEvent />} />
                 <Route path='editBooking/:id' element={<EditBooking />} />
                 <Route path='getEventsUser' element={<AllEventUser />} />
                 <Route path='addFeedback/:id' element={<AddEventFeedback />} />
            </Route>



          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
