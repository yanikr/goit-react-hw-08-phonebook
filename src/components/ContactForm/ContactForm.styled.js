import styled from 'styled-components';

export const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;
export const AddContactButton = styled.button`
  margin-left: 220px;
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
export const AddContactInput = styled.input`
  height: 20px;
  flex: 0 0 200px;
  margin-left: 10px;
`;
export const AddContactLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
  width: 400px;
  line-height: 26px;
  margin-bottom: 10px;
`;
