import{r as m,j as e,c as h,R as x}from"./index-c5a8cd3f.js";import{u as p,F as u,L as b}from"./layout-d4945bde.js";const w=()=>{const{signInUser:a,user:n}=p(),s=t=>window.location.assign("/netflix_clone/"+t),i=t=>{t.preventDefault(),console.log("submit");const d=new FormData(t.currentTarget),l={};for(const[r,o]of d.entries())l[r]=typeof o=="string"?o:"";a({email:l.email,password:l.password}).then(()=>{s("")}).catch(r=>{console.log(r)})},c=()=>{a({email:"demo@richkevan.com",password:"password"}).then(()=>{s("")}).catch(t=>{console.log(t)})};return m.useEffect(()=>{n&&s("")},[n]),e.jsx("div",{className:"min-h-screen w-full bg-Login bg-no-repeat",children:e.jsx("div",{className:"h-screen container mx-auto grid place-items-center before:h-24 z-20 relative",children:e.jsxs("div",{className:"w-[450px] h-[75vh] bg-black bg-opacity-80 mb-24 px-16 pt-16 pb-10 rounded-md flex flex-col",children:[e.jsxs("div",{className:" flex-[2_2_55%]",children:[e.jsx("h1",{className:" text-4xl font-bold",children:"Sign In"}),e.jsxs("form",{onSubmit:i,children:[e.jsx("input",{type:"text",name:"email",placeholder:"Email or phone number",className:"w-full h-10 bg-gray-500 mt-4 mb-4 px-2 text-white placeholder:text-white rounded-md"}),e.jsx("input",{type:"password",name:"password",placeholder:"Password",className:"w-full h-10 bg-gray-500 mt-4 mb-4 px-2 text-white placeholder:text-white rounded-md"}),e.jsx("button",{className:"w-full h-10 bg-red-600 mt-4 mb-4 px-2 text-white placeholder:text-white rounded-md",type:"submit",children:"Sign In"}),e.jsx("button",{className:"w-full h-10 bg-red-600 mt-4 mb-4 px-2 text-white placeholder:text-white rounded-md",type:"button",onClick:c,children:"Login with demo account"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"remember",className:"text-white",children:"Remember me"}),e.jsx("input",{type:"checkbox",name:"remember",id:"remember",className:"ml-2"})]}),e.jsx("a",{href:"#",className:"text-white",children:"Need help?"})]})]})]}),e.jsxs("div",{className:"flex flex-col flex-[1_1_45%]",children:[e.jsx("div",{children:e.jsxs("p",{className:"text-white mt-4",children:["New to Netflix? ",e.jsx("a",{href:"/netflix_clone/signup/",className:"text-red-600",children:"Sign up now."})]})}),e.jsx("div",{children:e.jsxs("p",{className:"text-white text-sm",children:["This page is protected by Google reCAPTCHA to ensure you're not a bot.",e.jsx("a",{children:"Learn more."})]})})]})]})})})};h.createRoot(document.getElementById("root")).render(e.jsx(x.StrictMode,{children:e.jsx(u,{children:e.jsx(b,{children:e.jsx(w,{})})})}));