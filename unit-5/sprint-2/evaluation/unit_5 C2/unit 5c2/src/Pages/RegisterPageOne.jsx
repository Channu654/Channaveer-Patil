import { Box, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom";


 function RegisterOne  (){
    const [ name, setName] = useState("");
    const [ email, setEmail] = useState("");

    return (
        
        <Box border='1px solid black' margin='auto'textAlign='center' w='40%' p={5} mt={10} bg="skyblue" display='grid'>
      
            <Input mb={5} placeholder="enter your name" onChange={(e)=>{setName(e.target.value)}}></Input>
            <Input mb={5} placeholder="enter your email" onChange={(e)=>{setEmail(e.target.value)}}></Input>
            <Link to='/register/two'> Next </Link>
        </Box>
    )
}

export default RegisterOne;