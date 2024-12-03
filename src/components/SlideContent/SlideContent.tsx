import React from "react";
import {IContentCard, ISlide} from "../../models/slide-models";
import {Card} from "../Card/Card";
import style from './side-content.module.css'


export const SideContent: React.FunctionComponent<ISlide> = ({contentCards}) => {
    return (
        <div>
            <div className={style.cardList}>
                {contentCards.length > 0 && contentCards.map((el: IContentCard) =>
                    <Card title={el.title} description={el.description} id={el.id} key={el.id}></Card>
                )}
            </div>
        </div>
    )
}