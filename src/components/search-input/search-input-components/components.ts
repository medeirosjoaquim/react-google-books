import styled from "styled-components";
import { colors } from "../../../assets/colors";

export const StyledInput = styled.input`
  border: none;
  border-radius: 3px;
  padding: 0 32px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 18px;
  width: 336px;
  height: 48px;
  background: #FDFCFC;
  border-radius: 10px;
  &::placeholder {
    color: ${colors.appDark};
  }
  &:focus {
    background-color: #fafafa;
    border: none;
    outline: none;
    // don't remove outline -- for accessibility reasons
    box-shadow: 0 0 1px 1px ${colors.appDark50};
}
`;

export const SearchInputContainer = styled.div`
  position: relative;
  height: 40px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
`;

export const Icon = styled.img`
  position: absolute;
  height: 12px;
  left: 10px;
`
