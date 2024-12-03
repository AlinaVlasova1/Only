export interface ISlideModel {
    dateFirst: string,
    dateSecond: string,
    contentCards: IContentCard[],
    id: number,
    itemNumber: string,
}

export interface ISlide {
    contentCards: IContentCard[],
    id: number,
}

export interface IContentCard {
    title: string;
    description: string;
    id: number;
}