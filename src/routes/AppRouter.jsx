import { BrowserRouter, Route, Routes } from 'react-router';
import AdminLayout from '../layouts/AdminLayout';
import Home from '../pages/admin/home/Home';
import Courses from '../pages/admin/courses/Courses';
import Applications from '../pages/admin/applications/Applications';
import Pricing from '../pages/admin/pricing/Pricing';
import Settings from '../pages/admin/settings/Settings';
import WebsiteLayout from '../layouts/WebsiteLayout';
import Profile from '../pages/profile/Profile';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import ProtectedRoute from './ProtectedRoute';
import GuestRoute from './GuestRoute';
import RoleRoute from './RoleRoute';
import CreateCourse from '../pages/admin/courses/CreateCourse';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/auth' element={<GuestRoute />}>
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Route>

        <Route element={<ProtectedRoute />}>

          <Route element={<RoleRoute roles={["student"]} />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route element={<RoleRoute roles={["admin"]} />}>
            <Route path="/dashboard" element={<AdminLayout />}>
              <Route index element={<Home />} />
              <Route path="courses" element={<Courses />} />
              <Route path='courses/create' element={<CreateCourse/>} />
              <Route path="applications" element={<Applications />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>

        </Route>

        <Route path='/' element={<WebsiteLayout />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter