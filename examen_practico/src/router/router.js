import {createRouter, createWebHashHistory} from "vue-router";


const routes = [
    {
        path :'/',
        redirect : "climafutu"

    },
    { 
        path :'/climafutu',
      name : "climafutu",  
      component :() => 
        import(/*wedpackChunkName:"climafutu"*/"@/clima/pages/climafutu")
    },
    {
        path :'/live',
     component : () => 
        import(/*wedpackChunkName:"climactual"*/"@/clima/pages/climactual"),
      
    },
   
];
const router= createRouter({
    history: createWebHashHistory(),
    routes

});

export default router