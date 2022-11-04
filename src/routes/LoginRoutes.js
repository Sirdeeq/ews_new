/* eslint-disable no-unused-vars */
import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import MainLayout from 'layout/MainLayout/index';
import EditWarning from 'pages/extra-pages/EditWarning';
import ViewUser from 'pages/extra-pages/ViewUser';
import AddNewContact from 'pages/extra-pages/AddNewContact';
// import ViewReports from 'pages/extra-pages/ViewReport';

// render - login

const Profile = Loadable(lazy(() => import('pages/extra-pages/Profile')));
const ChangePassword = Loadable(lazy(() => import('pages/extra-pages/ChangePassword')));
const Login = Loadable(lazy(() => import('pages/authentication/Login')));
const SignUp = Loadable(lazy(() => import('pages/authentication/Register')));
const ChangePicture = Loadable(lazy(() => import('pages/extra-pages/ChangePicture')));
const EditProfile = Loadable(lazy(() => import('pages/authentication/EditProfile')));
const Warnings = Loadable(lazy(() => import('pages/extra-pages/Warnings')));
const AddNewWarnings = Loadable(lazy(() => import('pages/extra-pages/AddNewWarnings')));
const ViewWarning = Loadable(lazy(() => import('pages/extra-pages/ViewWarning')));
const Reports = Loadable(lazy(() => import('pages/extra-pages/Reports')));
const Users = Loadable(lazy(() => import('pages/extra-pages/Users')));
const Contents = Loadable(lazy(() => import('pages/extra-pages/Content')));
const History = Loadable(lazy(() => import('pages/extra-pages/History')));
const Requests = Loadable(lazy(() => import('pages/extra-pages/Requests')));
const Contacts = Loadable(lazy(() => import('pages/extra-pages/Contacts')));
const ViewRequests = Loadable(lazy(() => import('pages/extra-pages/ViewRequests')));
const ViewReport = Loadable(lazy(() => import('pages/extra-pages/ViewReport')));
const Statistics = Loadable(lazy(() => import('pages/extra-pages/Statistic')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/register',
            element: <SignUp />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: 'admin',
            element: <MainLayout />,
            children: [
                {
                    path: 'dashboard',
                    children: [
                        {
                            path: 'default',
                            element: <DashboardDefault />
                        },
                        {
                            path: 'warnings',
                            element: <Warnings />
                        },
                        {
                            path: 'reports',
                            element: <Reports />
                        },
                        {
                            path: 'requests',
                            element: <Requests />
                        },
                        {
                            path: 'statistics',
                            element: <Statistics />
                        },
                        {
                            path: 'profile',
                            element: <Profile />
                        },
                        {
                            path: 'changepassword',
                            element: <ChangePassword />
                        },
                        {
                            path: 'changepicture',
                            element: <ChangePicture />
                        },
                        {
                            path: 'history',
                            element: <History />
                        },
                        {
                            path: 'editprofile',
                            element: <EditProfile />
                        },
                        {
                            path: 'new-warning',
                            element: <AddNewWarnings />
                        },
                        {
                            path: 'edit-warning',
                            element: <EditWarning />
                        },
                        {
                            path: 'view-warning',
                            element: <ViewWarning />
                        },
                        {
                            path: 'users',
                            element: <Users />
                        },
                        {
                            path: 'view-users',
                            element: <ViewUser />
                        },
                        {
                            path: 'view-reports',
                            element: <ViewReport />
                        },
                        {
                            path: 'view-requests',
                            element: <ViewRequests />
                        },
                        {
                            path: 'contents',
                            element: <Contents />
                        },
                        {
                            path: 'contacts',
                            element: <Contacts />,
                            children: [
                                {
                                    path: '/admin/dashboard/contacts/new-contact',
                                    element: <AddNewContact />
                                }
                            ]
                        },
                        {
                            path: 'new-contact',
                            element: <AddNewContact />
                        },
                        {
                            path: 'statistics',
                            element: <Statistics />
                        }
                    ]
                }
            ]
        }
    ]
};

export default LoginRoutes;
