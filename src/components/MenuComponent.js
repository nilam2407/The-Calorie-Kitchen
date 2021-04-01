import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            selecteddish :null
            
      };
    }

    onSelectdish(choose) {
        this.setState ({selecteddish : choose });

    }

    onRenderdish(plate){
        if(plate != null){
            return(
                <card className= "col-12 col-md-5 m-1">
                    <CardImg width="100%" src={plate.image} alt={plate.name}/>
                    <CardBody>
                    <CardTitle>
                        {plate.name}
                    </CardTitle>
                    <CardText>
                        {plate.description}
                    </CardText>
                    </CardBody>
                </card>
            )
        }
        else {
            return(
                <div></div>
                )    }
    }

    render(){

        const menu= this.props.dishes.map((plate)=>{
            return(
                <Card keyid={plate.id} className= "col-12 col-md-5 m-1">
                    <Card onClick ={()=>this.onSelectdish(plate)}>
                        <CardImg width="100%" src={plate.image} alt={plate.name}/>
                            <CardImgOverlay>
                            <CardTitle>{plate.name}</CardTitle>
                            </CardImgOverlay>
                    </Card>
                </Card>
            );
        });
        return(
            <div className ="container">
                <div className="row">
                        {menu}
                    </div>
                <div className="row">
                {
                    this.onRenderdish(this.state.selecteddish)
                }

                </div>
            </div>

        );
    }
}

export default Menu;