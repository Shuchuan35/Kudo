import React from 'react';
import {
   Card, CardText, CardBody,
   CardTitle, CardSubtitle
} from 'reactstrap';

const Kudo = (props) => (
   <div>{props.kudosList.map(kudo => (
      <Card key={kudo._id}>
         <CardBody>
            <CardTitle>{kudo.title}</CardTitle>
            <CardSubtitle>{kudo.fromuser}</CardSubtitle>
            <CardText>{kudo.body}</CardText>
            <CardSubtitle>~Sommebody</CardSubtitle>
         </CardBody>
      </Card>
   ))}
   </div>
);

export default Kudo;