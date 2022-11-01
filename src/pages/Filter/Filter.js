import React, { useState } from 'react';
import { BsXLg, BsHouse } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, FreeMode, Scrollbar } from 'swiper';
import ThemeFilter from './ThemeFilter';
import LocalFilter from './LocalFilter';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';

const Filter = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openOnClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [filterTheme, setFilterTheme] = useSearchParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const setSortParams = () => {
    searchParams.set('sort', 'clear');
    setSearchParams(searchParams);
  };

  const appendSortParams = () => {
    searchParams.append(' key', 'value');
    setSearchParams(searchParams);
  };

  return (
    <S.ThemeFilterOutline>
      <ThemeFilter />
      <S.LocalFilterWrapper onClick={openOnClick}>
        <LocalFilter />
      </S.LocalFilterWrapper>
      <S.ModalWrapper isOpen={modalOpen} onRequestClose={closeModal}>
        <S.UpperComponentWrapper>
          <S.CloseButton onClick={closeModal}>
            <BsXLg />
          </S.CloseButton>
          <S.ModalTitle>필터</S.ModalTitle>
          <S.HiddenDiv />
        </S.UpperComponentWrapper>
        <S.ModalInnerText>
          <S.SubTitle>가격 범위</S.SubTitle>
          <S.PriceInfo> 평균 1박 요금은 ₩140,000입니다</S.PriceInfo>
          <S.CommonWrapper>
            <S.AllPrice>
              <S.PriceOutline>
                <S.PriceMinMax>최저 요금</S.PriceMinMax>
                <S.PriceTag>
                  <S.WonSymbol>₩</S.WonSymbol>
                  <S.PriceFilter type="number" />
                </S.PriceTag>
              </S.PriceOutline>
              <p> - </p>
              <S.PriceOutline>
                <S.PriceMinMax>최고 요금</S.PriceMinMax>
                <S.PriceTag>
                  <S.WonSymbol>₩</S.WonSymbol>
                  <S.PriceFilter type="number" />
                </S.PriceTag>
              </S.PriceOutline>
            </S.AllPrice>
          </S.CommonWrapper>
          <S.CommonWrapper>
            <S.SubTitle>숙소 유형</S.SubTitle>
            <form>
              <S.CheckBoxWrapper>
                <S.CheckBox type="checkbox" />
                <div>
                  <S.RoomType>집전체</S.RoomType>
                  <S.RoomDescription>
                    단독으로 사용하는 공간 전체
                  </S.RoomDescription>
                </div>
              </S.CheckBoxWrapper>
              <S.CheckBoxWrapper>
                <S.CheckBox type="checkbox" />
                <div>
                  <S.RoomType>개인실</S.RoomType>
                  <S.RoomDescription>
                    집 또는 호텔의 개인실과 일부 공용 공간
                  </S.RoomDescription>
                </div>
              </S.CheckBoxWrapper>
              <S.CheckBoxWrapper>
                <S.CheckBox type="checkbox" />
                <div>
                  <S.RoomType>다인실</S.RoomType>
                  <S.RoomDescription>
                    다른 사람들과 함께 사용하는 다인실 및 공용 공간{' '}
                  </S.RoomDescription>
                </div>
              </S.CheckBoxWrapper>
            </form>
          </S.CommonWrapper>
          <S.CommonWrapper>
            <S.SubTitle>침실과 침대</S.SubTitle>
            <S.BedAndBath>침실</S.BedAndBath>
            <S.ButtonCluster>
              {Array(8)
                .fill()
                .map((_, i) => i + 1)
                .map(quantity => (
                  <S.NumberButton key="bedroom" value={quantity}>
                    {quantity}
                  </S.NumberButton>
                ))}
            </S.ButtonCluster>
            <S.BedAndBath>침대</S.BedAndBath>
            <S.ButtonCluster>
              {Array(8)
                .fill()
                .map((_, i) => i + 1)
                .map(quantity => (
                  <S.NumberButton key="bed" value={quantity}>
                    {quantity}
                  </S.NumberButton>
                ))}
            </S.ButtonCluster>
            <S.BedAndBath>욕실</S.BedAndBath>
            <S.ButtonCluster>
              {Array(8)
                .fill()
                .map((_, i) => i + 1)
                .map(quantity => (
                  <S.NumberButton key="bathroom" value={quantity}>
                    {quantity}
                  </S.NumberButton>
                ))}
            </S.ButtonCluster>
          </S.CommonWrapper>
          <div>
            <S.CommonWrapper>
              <S.SubTitle>건물 유형</S.SubTitle>
              <S.HouseTypeButton>
                <S.TypeInnerContentWrapper>
                  <S.TypeInnerIcon>
                    <BsHouse />
                  </S.TypeInnerIcon>
                  <S.TypeInnerText>단독 또는 다세대 주택</S.TypeInnerText>
                </S.TypeInnerContentWrapper>
              </S.HouseTypeButton>
            </S.CommonWrapper>
            <S.CommonWrapper>
              <S.SubTitle>편의시설</S.SubTitle>
            </S.CommonWrapper>
            <S.CommonWrapper>
              <S.SubTitle>예약옵션</S.SubTitle>
            </S.CommonWrapper>
          </div>
        </S.ModalInnerText>
        <S.LowerComponentWrapper>
          <S.RemoveAll>전체 해제</S.RemoveAll>
          <S.CountAccomodation>숙소 개 표시</S.CountAccomodation>
        </S.LowerComponentWrapper>
      </S.ModalWrapper>
    </S.ThemeFilterOutline>
  );
};
export default Filter;

Modal.setAppElement('#root');

const S = {
  ThemeFilterOutline: styled.div`
    display: flex;
    justify-content: center;
    padding: 0 80px;
  `,

  LocalFilterWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,

  CloseButton: styled.button`
    border: none;
    outline: none;
    background-color: white;
    font-size: 14px;
    font-weight: bolder;
    margin: 20px 0 20px 20px;
  `,

  ModalTitle: styled.span`
    font-size: 14px;
    font-weight: bolder;
    margin: 20px 40px 20px 0;
  `,

  HiddenDiv: styled.span`
    margin: 20px 20px 20px 0;
  `,

  ModalWrapper: styled(Modal)`
    border-radius: 10px;
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 780px;
    height: 80%;
    border: 1px solid gray;
    overflow: hidden;
  `,

  UpperComponentWrapper: styled.div`
    position: static;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ebebeb;
    top: 0;
    width: 100%;
    z-index: 100;
    height: 64px; ;
  `,

  LowerComponentWrapper: styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ebebeb;
    bottom: 0;
    width: 100%;
    height: 81px;
  `,

  RemoveAll: styled.span`
    margin: 25px 0 10px 20px;
    text-decoration: underline;
    font-size: 16px;
  `,

  CountAccomodation: styled.button`
    margin: 10px 20px 15px 0;
    outline: none;
    border: none;
    border-radius: 10px;
    width: 152px;
    height: 48px;
    color: white;
    background-color: black;
    font-size: 16px;
  `,

  ModalInnerText: styled.div`
    margin: 0 20px;
    z-index: 100;
    width: 98%;
    height: 64vh;
    overflow: scroll;
    padding: 0;
  `,

  SubTitle: styled.p`
    font-size: 22px;
    margin: 30px 0;
  `,

  PriceInfo: styled.p`
    font-size: 14px;
    color: #7e7e7e;
  `,

  CommonWrapper: styled.div`
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 20px;
  `,

  AllPrice: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,

  PriceOutline: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid #b0b0b0;
    border-radius: 5px;
    width: 305px;
    height: 53px;
    margin: 20px 10px;
  `,

  PriceMinMax: styled.div`
    font-size: 12px;
    color: #b0b0b0;
    padding: 10px 0 0 10px;
  `,

  PriceTag: styled.div`
    display: flex;
    flex-direction: row;
  `,

  WonSymbol: styled.span`
    font-size: 16px;
    padding: 5px 10px;
  `,

  PriceFilter: styled.input`
    width: 260px;
    height: 20px;
    font-size: 16px;
    border: none;
    outline: none;
  `,

  CheckBoxWrapper: styled.div`
    display: flex;
    flex-direction: row;
  `,

  CheckBox: styled.input`
    height: 24px;
    width: 24px;
  `,

  RoomType: styled.div`
    font-size: 16px;
    padding: 2px 0 0 15px;
  `,
  RoomDescription: styled.div`
    font-size: 14px;
    color: #b0b0b0;
    padding: 10px 0 20px 15px;
  `,

  BedAndBath: styled.div`
    font-size: 16px;
    padding: 20px 0 30px 0;
  `,

  ButtonCluster: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  `,

  IDCButton: styled.button`
    width: 120px;
    height: 40px;
    border-radius: 30px;
    font-size: 14px;
    margin-right: 10px;
    background-color: white;
    outline: none;
    border: 0.5px solid #b0b0b0;
  `,

  NumberButton: styled.button`
    width: 60px;
    height: 40px;
    border-radius: 30px;
    font-size: 14px;
    margin-right: 10px;
    background-color: white;
    outline: none;
    border: 0.5px solid #b0b0b0;
  `,

  HouseTypeButton: styled.button`
    width: 162px;
    height: 128px;
    border-radius: 10px;
    border: none;
    outline: none;
  `,

  TypeInnerContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 16px;
  `,

  TypeInnerIcon: styled.div`
    font-size: 32px;
  `,

  TypeInnerText: styled.div`
    font-size: 16px;
  `,
};
