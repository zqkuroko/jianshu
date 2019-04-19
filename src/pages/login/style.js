import styled from 'styled-components';

export const LoginWapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #f1f1f1;
`;

export const LoginBox = styled.div`
  width: 400px;
  margin: 60px auto 0;
  background: #fff;
  padding: 50px 50px 30px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  box-sizing: border-box;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  border: 1px solid #c8c8c8;
  border-radius: 4px;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  color: #fff;
  border: none;
  outline: none;
  background: #187cb7;
  text-align: center;
  display: block;
  cursor: pointer;
  border-radius: 25px;
`;