import React,{Component}  from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,Breadcrumb,BreadcrumbItem, Button,Modal,ModalHeader,ModalBody,Row,Label,Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import{ Control,LocalForm, Errors} from 'react-redux-form';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

const required =(val) => val && val.length;
const maxLength=(len) =>(val) => !(val) ||(val.length <= len);
const minLength =(len) =>(val) =>(val) &&(val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen : false
        }

        this.toggleModal= this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      
    
        }

        toggleModal(){
            this.setState({isModalOpen:!this.state.isModalOpen})}
    

            handleSubmit(values){
                this.props.addComment(this.props.disId, values.rating,values.name,values.comment);
                console.log('current state is : '+ JSON.stringify(values));
                alert('current state is :' +JSON.stringify(values));
            }

    render(){
    return(
        <div>
        <Button  color="light" onClick = {this.toggleModal}> 
        <span className ="fa fa-edit fa-lg"git p></span>
             Submit Comment</Button>
        <Modal isOpen ={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle ={ this.toggleModal}>
                    Submit Comment</ModalHeader>
                <ModalBody>
                  <LocalForm onSubmit ={(values) => this.handleSubmit(values)}>
                      <Row className ="form-group">
                          <Col md={10}>
                          <Label htmlFor="rating"> Rating </Label>
                          <Control.select model=".rating" name="rating"
                          className="form-control">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                          </Control.select>
                          </Col>
                      </Row>
                      <Row className="form-group">
                      <Col md={10}>
                          <Label htmlFor="name"> Your Name </Label> 
                         
                          <Control.text model=".name"  id="name" name="name"
                          placeholder="Your Name"
                          className ="form-control"
                          validators ={{
                              required,minLength: minLength(3), maxLength : maxLength(15)}}/>

                              <Errors 
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages ={{
                                        required :'Required',
                                        minLength :' Must be greater than 2 characters',
                                        maxLength : 'Must be 15 characters or less'

                                    }}
                                    />
                        </Col>
                      </Row>
                      <Row className ="form-group">
                      <Col md={10}>
                          <Label htmlFor="comment"> Comment</Label>
                          <Control.textarea model= ".comment" id="comment" name="comment"
                          row="6"
                          className="form-control"/>
                          </Col>
                      </Row>
                
                      <Row className="form-group">
                          <Col md={4} >
                          <Button type ="submit" color="primary">
                             
                              Submit
                          </Button>
                          </Col>
                      </Row>
                      </LocalForm>  
                    
                </ModalBody>


            </Modal>
       
        </div>
    )
}
}


    



function RenderDish({dish}) {
    if(dish != null)
    return(

         <Card>
             <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>
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
 

 function RenderComments({comments,addComment,dishId}) {
   
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
                <CommentForm disId={dishId} addComment = {addComment}/>
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

        if(props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if(props.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );

        }

      else  if(props.dish != null){
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
                <RenderComments comments ={props.comments}
                addComment ={props.addComment}
                dishId ={props.dish.id}
                //dish id needed to add id to state
                />
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