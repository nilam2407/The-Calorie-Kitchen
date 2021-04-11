import React  from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

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
 

 function RenderComments({comments}) {
   
    if (comments != null) {

        let list = comments.map((comments)=>{

            return(
                <li key={comments.id} >
                    <div>
                        <p>{comments.comment}</p>
                        <p>--{comments.author},
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                    </div>
                </li>

            )
        })

        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {list}
                </ul>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
    
    
//     if(comment != null) {
//         const cmnts = comment.map((comment) => {
//             return (
//                 <ul key={comment.id} className="list-unstyled">
//                     <li>
//                         <p> {comment.comment} </p>
//                         <p> -- {comment.author},
//                             &nbsp;
//                             {new Intl.DateTimeFormat('en-US', {
//                                 year: 'numeric',
//                                 month: 'short',
//                                 day: '2-digit'
//                             }).format(new Date(Date.parse(comment.date)))}
//                         </p>
//                     </li>
//                 </ul>
                
//             )
//         })

//         return (
//             <div className="col-12 col-md-5 m-1">
//                 <h4> Comments </h4>
//                 {cmnts}
//             </div>
//         )
//      }  
       
//      else {
//         return (
//             <div></div>
//         )
//     }
// }



const Dishdetail = (props) =>{
        if(props.dish != null){
             return(
        <div className ="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to ='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className= "col-12">
                <h3> {props.dish.name}</h3>
                <hr/>
            </div>
            </div>
        <div className="row">
            <div className = "col-12 col-md-5 m-1">
            <RenderDish dish ={props.dish}/>
            </div>
            <div className ="col-12 col-md m-1">
                <RenderComments comments ={props.comments}/>
            </div>
           
            
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