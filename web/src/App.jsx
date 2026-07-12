import { RouterProvider } from 'react-router-dom'

import RouteLayout from './layout/RouteLayout'
import About from './pages/About'
import Error from './components/Error'
import Home from './pages/Home'
import Products from './pages/Products'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route} from 'react-router'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import NotFound from './components/NotFound'
import JobsLayout from './layout/JobsLayout'
import Jobs, { jobsLoader } from './pages/Jobs'
import JobDetails, { jobDetailsLoader } from './components/JobDetails'
import FormLink from './components/FormLink'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp'
import Admin from './pages/Admin'
import AdminError from './components/AdminError.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import useAuthContext from './hooks/useAuthContext.jsx'
import AddJob from './pages/Admin/AddJob.jsx'

const App = () => {
  const {user} =useAuthContext()
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RouteLayout />}>
      <Route  index  element={<Home />} />
      <Route path='products' element={<Products />} />

      <Route path='admin' element={<Admin />}  errorElement={<AdminError />}>
          <Route path='login' element={!user ? <Login /> : <Navigate to="/admin/dashboard" />}/>
          <Route path='signup' element={!user ? <SignUp /> : <Navigate to="/admin/dashboard"/>}/>
          
          <Route path='dashboard' element={!user ? <Login /> :<AdminDashboard /> } >
            <Route path='addJobs' element={user ? <AddJob /> : <Navigate to="/admin/login"/>} />
          </Route>
          
       </Route>
      <Route path='about' element={<About />} />
      <Route path='contact' element={<ContactLayout />} >
        <Route path='info' element={<ContactInfo />} />
        <Route path='form' element={<ContactForm />} />

      </Route>
      <Route path='jobs' element={<JobsLayout />} errorElement={<Error />} >
     
        <Route  index element={<Jobs />} loader={jobsLoader}/>
        <Route  path=':id' element={<JobDetails />} loader={jobDetailsLoader} />
        <Route path=':id/apply'  element={<FormLink />}/>
     </Route>
     <Route  path='*' element={<NotFound />}/>
     
    </Route>
  )
)

  return (
    <div>
    
    <RouterProvider router={router} />
    
    </div>
  )
}

export default App