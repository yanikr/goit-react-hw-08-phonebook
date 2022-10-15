import styled from 'styled-components';
export const ContactsUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ContactsButton = styled.button`
  margin-left: 10px;
  width: fit-content;
  border: 1px solid;
  background-color: transparent;
  border-radius: 4px;
  &:hover {
    background-color: #2196f3;
    border: 1px solid #2196f3;
    color: #fff;
    cursor: pointer;
  }
`;
export const ContactsLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
  width: 400px;
  line-height: 26px;
  margin-bottom: 10px;
`;
