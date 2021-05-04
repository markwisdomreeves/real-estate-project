import React from "react";
import Loader from 'react-loader-spinner'


 function Loading() {
     return (
       <div style={{display: "flex", justifyContent: "center", textAlign: "center", marginTop: "40px"}}>
        <Loader
         type="Circles"
         color="#000000"
         height={200}
         width={200}
         timeout={5000}
      />
      </div>
     )
 }


 export default Loading
