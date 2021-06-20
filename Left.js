import React from 'react';
import { Form, Button} from 'react-bootstrap';
import Facebook from './Facebook';
import Google from './Google';
import '../index.css';

const Left = () => {
 return (
     <div className="left-b">
         <br/>
         <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
         <h1>LOGIN FORM</h1>
         <br/>
             <Form.Group >
                 <Form.Label>Enter your email</Form.Label>
                 <Form.Control type="email" placeholder="Enter your email" />
             </Form.Group>
             <Form.Group >
                 <Form.Label>Enter your password</Form.Label>
                 <Form.Control type="password" placeholder="Enter your password" />
             </Form.Group>
             <Button type="submit" color="black">Login</Button>
             <p>or login with social media</p>
             <Facebook/>
             <br/>
             <Google/>
         </Form>
     </div>
 )
}

export default Left;