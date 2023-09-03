import styled, { css } from "styled-components";

const FieldSet = styled.fieldset`
  display: flex;
  max-width: 48.5rem;
  border: none;
  background-color: var(--clr-gray-dark);
`;

const Input = styled.input`
  width: 100%;
  padding: 1.2rem 1.6rem;
  align-items: center;
  gap: 1rem;
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--clr-gray-text);
  border-radius: 0.2rem;
  border: 1.3px solid var(--clr-gray-light);
  background-color: var(--clr-gray-dark);
  transition: all 300ms;

  &:focus {
    outline: none;
    border: 1.3px solid var(--clr-gray-text);
  }

  &::placeholder {
    opacity: 0.5;
  }
`;

const Label = styled.label``;

const InputField = ({ type, id, name, label, ...others }) => {
  return (
    <FieldSet>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} name={name} {...others} />
    </FieldSet>
  );
};

export default InputField;
