import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const Login = Loadable(lazy(() => import('pages/authentication/Login')));
const SignUP = Loadable(lazy(() => import('pages/authentication/Register')));
const Warnings = Loadable(lazy(() => import('pages/extra-pages/Profile')));
const Reports = Loadable(lazy(() => import('pages/extra-pages/ChangePassword')));
const Requests = Loadable(lazy(() => import('pages/extra-pages/ChangePicture')));
const Statistics = Loadable(lazy(() => import('pages/authentication/EditProfile')));
// const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
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
                }
            ]
        }
    ]
};

export default MainRoutes;
