import styled from "styled-components";
import React from 'react'
import Content from "./Content";


const Header= styled.header`
  position:fixed;
  top:0;
  width:100%;
  height:100px;
  background-color:rgba(255,255,255,0.7);
  z-index:1;
  display:flex;
  align-items:end;
  padding:10px;
  padding-left:100px;
  font-size:2em;
  a{
    width:100px;
    margin-right:50px;
  };

`
const Title = styled.h1`
text-transform:uppercase ;
font-size:10em;
text-align:center;
font-style: italic;
margin-top:200px;

`
const Contents = styled.ul`
  padding-top:200px;
  width:60%;
  height:100vh;
  margin: 0 auto;
  display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr;
  justify-items: center;
`
const Sidebar=styled.div`
position:fixed;
width:5%;
height:20%;
right:0;
background-color:rgba(255,255,255,0.8);
display:flex;
justify-content:center;
align-items:center;
`
const Image = styled.div`
  background-image:
  url('https://cdn.pixabay.com/photo/2015/10/22/16/42/icon-1001596_960_720.png');
  background-size: cover;
  background-position: center center;
  height:3em;;
  width:3em;
  
`
function App() {
  const datas = [
    {
      id:0,
      name:'옷1',
      price:3000,
      introtext:'봄 신상 아우터',
      introsrc:'https://cdn.pixabay.com/photo/2016/04/01/12/01/cap-1300471_960_720.png',
    },
    {
      id:1,
      name:'옷1',
      price:3000,
      introtext:'봄 신상 아우터',
      introsrc:'https://cdn.pixabay.com/photo/2016/04/01/12/01/cap-1300471_960_720.png',    },
    {
      id:2,
      name:'옷1',
      price:3000,
      introtext:'봄 신상 아우터',
      introsrc:'https://cdn.pixabay.com/photo/2016/04/01/12/01/cap-1300471_960_720.png',    },
    {
      id:3,
      name:'옷32',
      price:3000,
      introtext:'봄 신상 아우터',
      introsrc:'https://cdn.pixabay.com/photo/2016/04/01/12/01/cap-1300471_960_720.png',    },
    {
      id:4,
      name:'옷124',
      price:3000,
      introtext:'봄 신상 아우터',
      introsrc:'https://cdn.pixabay.com/photo/2016/04/01/12/01/cap-1300471_960_720.png',    },
    {
      id:5,
      name:'옷234',
      price:3000,
      introtext:'봄 신상 아우터',
      introsrc:'https://cdn.pixabay.com/photo/2016/04/01/12/01/cap-1300471_960_720.png',    },
    {
      id:6,
      name:'옷11235',
      price:3000,
      introtext:'봄 신상 아우터',
      introsrc:'https://cdn.pixabay.com/photo/2016/04/01/12/01/cap-1300471_960_720.png',    },
    {
      id:7,
      name:'옷151542',
      price:3000,
      introtext:'봄 신상 아우터',
      introsrc:'https://cdn.pixabay.com/photo/2016/04/01/12/01/cap-1300471_960_720.png',    },
    {
      id:8,
      name:'옷11235',
      price:3000,
      introtext:'봄 신상 아우터',
      introsrc:'https://cdn.pixabay.com/photo/2016/04/01/12/01/cap-1300471_960_720.png',    },

  ]
  return(
  <>
    <Header>
      <a href="/home">Home</a>
      <a href="/login">Login</a>   
    </Header>
    <Sidebar>
      <a href="#"><Image></Image></a>
    </Sidebar>
    <Title>
      style
    </Title>
    <Contents>
      {datas?.map(data=><Content key ={data.id} data={data}></Content>)}
    </Contents>
  </>
)}   

export default App;
