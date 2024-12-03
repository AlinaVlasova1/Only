import React from "react";
import {IContentCard} from "../../models/slide-models";
import styles from './card.module.css';

export const Card: React.FunctionComponent<IContentCard> = ({title, description}) => {
    return (
        <div className={styles.card}>
            <span className={styles.title}>{title}</span>
            <span className={styles.description}>{description}</span>
        </div>
    )
}