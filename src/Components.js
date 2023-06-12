import styled from "styled-components";
// const show = keyframes`
//   0%, 49.99% {
// 		opacity: 0;
// 		z-index: 1;
// 	}

// 	50%, 100% {
// 		opacity: 1;
// 		z-index: 5;
// 	}
// `;

// const hide = keyframes`
//   0%, 49.99% {
//     opacity: 1;
//     z-index: 5;
//   }

//   50%, 100% {
//     opacity: 0;
//     z-index: 1;
//   }
// `

export const Container = styled.div`
  background-color: transparent;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  @media screen and (min-width:700px)
  {
    height:400px;
    width:750px;
  }
  @media screen and (min-width:600rem)
  {
    height:350px;
    width:500px;
  }
  @media screen and (max-width:700px) and (min-width:500px) 
  {
    height:80%;
    width:95%;
  }
  @media screen and (max-width:500px)
  {
    height:80vh;
    width:90vw;
  }
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
  border:;
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  @media screen and (min-width:500px)
  {
    width:50%;
    ${props =>
    props.signingIn !== true
      ? `
  transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	`
      : null}
  }
  @media screen and (max-width:500px)
  {
    width:100%;
    ${props =>
    props.signingIn !== true
      ? `
	  opacity: 1;
	  z-index: 5;
	  `
      : null}
  }
  opacity: 0;
  z-index: 1;
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  @media screen and (min-width:500px)
  {
    width:50%;
    ${props => (props.signingIn !== true ? `transform: translateX(100%);` : null)}
  }
  @media screen and (max-width:500px)
  {
    width:100%;
    ${props => (props.signingIn !== true ? `transform: translateX(100%);` : null)}
  }
  z-index: 2;
`;

export const Form = styled.form`
  background: rgb(9,9,121);
  background: linear-gradient(40deg,#FFF9DE,#E06469);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  color:white;
  margin: 0;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  height:10%;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 10px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const respoText = styled.p`
@media screen and (min-width:500px)
{
  display:none;
}
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  @media screen and (min-width:500px)
  {
    left:50%;
    width:50%;
  }
  @media screen and (max-width:500px)
  {
    display:none;
  }
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${props =>
    props.signingIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
  background: #ff416c;
  background: linear-gradient(40deg,#FFF9DE,#E06469);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${props => (props.signingIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => (props.signingIn !== true ? `transform: translateX(0);` : null)}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${props => (props.signingIn !== true ? `transform: translateX(20%);` : null)}
`;
export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;
