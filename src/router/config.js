import React,{lazy} from "react";
const HomeView = lazy(() => import('../views/home/index'));
const FeaturesView = lazy(() => import('../views/Features/index'));
const DocumentView = lazy(() => import('../views/Document/index'));
const RoadmapView = lazy(() => import('../views/Road map/index'));
const PartnersView = lazy(() => import('../views/Partners/index'));

const RouterList = [
    {
        key: "/",
        path:'/',
        title:'Home',
        isRouter:true,
        isLink:true,
        meta:{
            title:'Home',
            keywords:'keywords',
            description:'description'
        },
        child:[],
        element: <HomeView/>
    },
    {
        key: "Features",
        path:'/Features',
        title:'Features',
        isRouter:true,
        isLink:true,
        child:[],
        meta:{
            title:'Features',
            keywords:'keywords',
            description:'description'
        },
        element:<FeaturesView/>
    },
    {
        key: "Document",
        path:'/Document',
        title:'Document',
        isRouter:true,
        isLink:true,
        child:[],
        meta:{
            title:'Document',
            keywords:'keywords',
            description:'description'
        },
        element:<DocumentView/>
    },
    {
        key: "Roadmap",
        path:'/Roadmap',
        title:'Roadmap',
        isRouter:true,
        isLink:true,
        child:[],
        element:<RoadmapView/>
    },
    {
        key:'Partners',
        path:'/Partners',
        title:'Partners',
        isRouter:true,
        isLink:true,
        child:[],
        element:<PartnersView/>
    }
]

export default RouterList;
