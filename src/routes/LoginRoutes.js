import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import MainLayout from 'layout/MainLayout/index';

// render - login

const Profile = Loadable(lazy(() => import('pages/extra-pages/Profile')));
const ChangePassword = Loadable(lazy(() => import('pages/extra-pages/ChangePassword')));
const Login = Loadable(lazy(() => import('pages/authentication/Login')));
const SignUp = Loadable(lazy(() => import('pages/authentication/Register')));
const ChangePicture = Loadable(lazy(() => import('pages/extra-pages/ChangePicture')));
const EditProfile = Loadable(lazy(() => import('pages/authentication/EditProfile')));
const Warnings = Loadable(lazy(() => import('pages/extra-pages/Warnings')));
const AddNewWarnings = Loadable(lazy(() => import('pages/extra-pages/AddNewWarnings')));
const Reports = Loadable(lazy(() => import('pages/extra-pages/Reports')));
const History = Loadable(lazy(() => import('pages/extra-pages/History')));
const Requests = Loadable(lazy(() => import('pages/extra-pages/Requests')));
const Statistics = Loadable(lazy(() => import('pages/extra-pages/Statistics')));
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
                        }
                    ]
                }
            ]
        }
    ]
};

export default LoginRoutes;
