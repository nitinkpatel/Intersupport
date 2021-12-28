import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: space-around;
flex-direction: column;
width: 100%;
border: 2px solid lightgrey;
border-radius: 20px;
max-height: 600px;
overflow: hidden;
text-overflow: ellipsis; 

button {
//  border-radius: 0 0 0px 0px;
  border: 1px solid lightgrey;

}
img {
  height: 200px;
  object-fit: scale-down;
  border-radius: 20px 20px 0 0;
}
div {
  font-family: Arial, Helvetica, sans-serif;
  overflow: hidden;
  text-overflow: ellipsis; 
  padding: 1rem;
  max-height: 100px;
}



`;