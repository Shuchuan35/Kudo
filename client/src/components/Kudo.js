import React from 'react';
import {
   Card, CardText, CardBody,
   CardTitle, CardSubtitle
} from 'reactstrap';

const Kudo = (props) => (
   <div>{props.kudosList.map(kudo => (
      <Card key={kudo._id} className='kudo'>
         <CardBody>
            <CardTitle className='text-capitalize text-info'><h5>{kudo.title}</h5></CardTitle>
            <CardSubtitle>{kudo.username}</CardSubtitle>
            <CardText>{kudo.body}</CardText>
            <CardSubtitle className='text-muted font-italic'>~{kudo.fromuser} <i className="fa fa-smile-o" aria-hidden="true"></i></CardSubtitle>
         </CardBody>
      </Card>
   ))}
   </div>
);

export default Kudo;