import React  from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({dish}) {
    if(dish != null)
    return(

         <Card>
             <CardImg width="100%" src={dish.image} alt={dish.name}/>
             <CardBody>
             <CardTitle>
                 {dish.name}
             </CardTitle>
             <CardText>
                 {dish.description}
             </CardText>
             </CardBody>
         </Card>
    );

else 
    return(
        <div></div>
        );    

}
 

 function RenderComments({comment}) {
     console.log("inside comments")
     if(comment != null) {
        const cmnts = comment.map((comment) => {
            return (
            
                <ul key={comment.id} className="list-unstyled">
                    <li>
                        <p> {comment.comment} </p>
                        <p> -- {comment.author},
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                            }).format(new Date(Date.parse(comment.date)))}
                        </p>
                    </li>
                </ul>
                
            );
        });

        return (
            <div className="col-12 col-md-5 m-1">
                <h4> Comments </h4>
                {cmnts}
            </div>
        );
     }  
       
     else {
        return (
            <div></div>
        );
    }
}



const Dishdetail = (props) =>{
        if(props.dish != null){
             return(
        <div className ="container">
        <div className="row">
            <div className = "col-12 col-md-5 m-1">
            <RenderDish dish ={props.dish}/>
            </div>
            <RenderComments comment ={props.dish.comments}/>
            
             </div>
             
        </div>
        

    ); }

    else {
        return(
            <div></div>
        );
    }



}        


export default Dishdetail;