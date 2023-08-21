import React,{lazy} from "react";
const HomeView = lazy(() => import('../views/home/index'));

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
        path:'',
        title:'Features',
        isRouter:false,
        child:[]
    },
    {
        key: "Governance Token",
        path:'',
        title:'Governance Token',
        isRouter:false,
        child:[ ]
    },
    {
        key: "Roadmap",
        path:'',
        title:'Roadmap',
        isRouter:false,
        child:[]
    },
]

export default RouterList;
