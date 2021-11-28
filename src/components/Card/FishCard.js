import React from "react";
import 'antd/dist/antd.css';
import {Button, Card} from "antd";
import {NavLink} from "react-router-dom";
import {FISH_CARD_MARGIN, FISH_CARD_WIDTH} from "../../const/Constants";

export const FishCard = ({image, name, lifetime, type, id}) => (
    <Card
        style={{width: FISH_CARD_WIDTH, margin:FISH_CARD_MARGIN}}
        hoverable
        cover={<img src={image} alt="example" style={{height:'150px'}}  />}>
        <Card.Meta
            title={name}
            description={
                <div>
                    <p>Lifetime: {lifetime} year(s)</p>
                    <p>Type: {type}</p>
                    <NavLink to={`/catalog/fish/${id}`}>
                        <Button>
                            View more...
                        </Button>
                    </NavLink>
                </div>
            }
        />
    </Card>
);
