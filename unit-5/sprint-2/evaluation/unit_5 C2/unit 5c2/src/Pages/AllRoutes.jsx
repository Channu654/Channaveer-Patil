import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import RegisterOne from "./RegisterPageOne";
import RegisterTwo from "./RegisterPageTwo";


import { Box, Text } from "@chakra-ui/react"



 const Navbar = ()=>{

    return (
        <Box borderBottom='1px solid black' bg='pink' textAlign='center' >
            <Link to='/register/one'>
                <Text color='white'>click on Registration to go Registration</Text>
                <Text fontSize='5xl' color='white'>Registration</Text>
            </Link>
        </Box>
    )
}





function AllRoutes(){
    return(
        <>
        
<Routes>
    <Route path="/" element={<Navbar/>}></Route>
    <Route path="/register/one" element={<RegisterOne/>}></Route>
    <Route path="/register/two" element={<RegisterTwo/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>

</Routes>
</>
    )
}

export default AllRoutes