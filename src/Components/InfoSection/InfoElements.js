import styled from 'styled-components'

export const InfoContainer = styled.div`
  color: #383F42;
  background:${( { lightBg } ) => ( lightBg ? '#277F91' : '#F7E3A1' )};
  height: 100vh;

    @media screen and (max-width: 1300px) {
    padding: 100px 0;
    height: 100%;
  }

`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div`
  margin-top: 8vh;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${( { imgStart } ) => ( imgStart ? `'col2 col1'` : `'col1 col2'` )};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${( { imgStart } ) => ( imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` )};
    margin-top: 5vh;
  }

    @media screen and (max-width: 480px) {
    grid-template-areas: ${( { imgStart } ) => ( imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` )};
    margin-top: -15vh;
  }

`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  
`

export const TopLine = styled.p`
  color: #383F42;
  font-size: 60px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-bottom: 30px;

@media screen and (max-width: 480px) {
    font-size: 25px;
  }
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 25px;
  line-height: 1.1;
  font-weight: 600;
  color: ${( { lightText } ) => ( lightText ? '#F7E3A1' : '#383F42' )};

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }

    @media screen and (max-width: 550px) {
      font-size: 15px;
  }
`

export const Subtitle = styled.a`
  max-width: 440px;
  margin-bottom: 25px;
  font-size: 50px;
  line-height: 25px;
  color: ${( { darkText } ) => ( darkText ? '#383F42' : '#F7E3A1' )};
  color: ${( { lightTextDesc } ) => ( lightTextDesc ? '#F7E3A1' : '#383F42' )};

    @media screen and (max-width: 480px) {
    font-size: 25px;
  }

    @media screen and (max-width: 550px) {
    font-size: 25px;
  }

`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 400px;
  height: 100%;

  @media screen and (min-width: 300px) {
      width: 100%;
      height: auto;
      justify-content: center;
      align-items: center;
      display: flex;
      margin-bottom: -10vh;
  }

    @media screen and (max-width: 375px) {
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 20vh;
  }
  
  @media screen and (max-width: 480px) {
    width: 70%;
    justify-content: center;
    align-items: center;
  }

    @media screen and (max-width: 550px) {
      width: 70%;
      margin-top: -150px;
  }

    @media screen and (max-width: 1300px) and (min-width: 780px) {
      width: 60%;
      margin-top: -10vh;
    }

`

export const Img = styled.img`
  width: 100%;
  height: auto;
  margin: 0 0 10px 10px;
  padding-right: 0;
  border-radius: 25px;
  background-color: #277F91;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 35px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  filter: grayscale(25%);
  position: relative;
  
  @media screen and (max-width: 768px) {
      height: auto;
      width: 80%;
      margin-top: -25vh;
      margin-left: 20vw;
  }

    @media screen and (max-width: 320px) {
      margin-top: -36vh;
      height: auto;
      width: 100%;
      margin-right: -30vw;
  }

`