import React from "react";
import {A11y, Pagination, Scrollbar} from "swiper/modules";
import {slides} from "../../mock/mock-card-content";
import {Swiper, SwiperSlide} from "swiper/react";
import style from "./main-page.module.css"
import {IContentCard} from "../../models/slide-models";
import {Card} from "../Card/Card";
import 'swiper/css';
import 'swiper/css/pagination';
import LeftArrowSvg from "../LeftArrowSvg/LeftArrowSvg";
import RightArrowSvg from "../RightArrowSvg/RightArrowSvg";
import RightArrowPaginationSvg from "../RightArrowPaginationSvg/RightArrowPaginationSvg";


export default function MainPage() {
    let key = 0;
    return (
        <div className={style.mainPage}>
            <div className={style.blockTitleWithGradient}>
                <img className={style.linearGradient} alt='background-gradient'></img>
                <span className={style.mainTitle}>Исторические даты</span>
            </div>
            <div className={style.mainDates}>
                <span className={style.titleFirst}>{slides[key].dateFirst}</span>
                <span className={style.titleSecond}>{slides[key].dateSecond}</span>
            </div>
            <div className={style.paginationDates}>
                <span className={style.text}>{slides[key].itemNumber}/06</span>
                <div className={style.pagination}>
                    <button className={style.buttonArrow}>
                        <LeftArrowSvg></LeftArrowSvg>
                    </button>
                    <button className={style.buttonArrow}>
                        <RightArrowSvg></RightArrowSvg>
                    </button>
                </div>
            </div>
            <Swiper
                className={style.swiperContainer}
                modules={[Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                direction="horizontal"
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {slides[key].contentCards.length > 0 && slides[key].contentCards.map((el: IContentCard) =>
                    <SwiperSlide className={style.swiperSlide}>
                        <Card title={el.title} description={el.description} id={el.id} key={el.id}></Card>
                    </SwiperSlide>
                )}
                <button className={style.buttonPaginationLeft}>
                    <RightArrowPaginationSvg></RightArrowPaginationSvg>
                </button>
                <button className={style.buttonPaginationRight}>
                    <RightArrowPaginationSvg></RightArrowPaginationSvg>
                </button>
            </Swiper>
        </div>
    )
}