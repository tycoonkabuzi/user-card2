import styled from "styled-components";
const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #474646;
  gap: 2%;
`;
const CardContainer = styled.div`
  border: 2px solid #e7e7e7;
  border-radius: 20px;
  padding: 20px;
  width: 29%;
  &:hover {
    box-shadow: 1px 1px 20px#d8d8d8;
    cursor: pointer;
  }
`;
const Title = styled.div`
  background-color: #6e4e4e;
  padding: 20px;
  font-size: large;
  font-weight: 600;
  line-height: 10px;
  color: white;
`;
const Description = styled.p``;
const Card = ({ users }) => {
  return (
    <Main>
      {users.map((user, index) => (
        <CardContainer key={index}>
          <Title>
            <p>Name: {user.name} </p>
            <p>Surname: {user.surname} </p>
          </Title>
          <Description>{user.description}</Description>
        </CardContainer>
      ))}
    </Main>
  );
};

export default Card;
