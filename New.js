

import React from 'react';

const New=(props)=>{
    
    return(
        <div>
            <h2 style={{textAlign:"center",marginTop:"10%"}}>Profile Info</h2>

            <div classname="card" id="logindetails" style={{width:"22rem" ,margin:"0 auto",border:"1px solid black",textAlign:"center"}}>
                <img src=" https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1214400029002302&height=50&width=50&ext=1626801558&hash=AeSYioByMZw9VMuEMAo" alt="img" width="100" id="profileLabel" style={{marginTop:"20px", alignItems:"center"}} />
                <div className="card-body">
                    <div className="card-text" style={{textAlign:"justify"}}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>:</td>
                                    <td id="nameLabel">Aditi Bhadauria</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>:</td>
                                    <td id="emailLabel">adbhadauria@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>ID</td>
                                    <td>:</td>
                                    <td id="googleIdLabel">1214400029002302</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;

