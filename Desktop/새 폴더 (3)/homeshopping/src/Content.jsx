import React from "react";
import styled from "styled-components";

const Cloth = styled.li`
  background-color:rgba(255,255,255,0.8);
  box-sizing:border-box;
  position:relative;
  height:350px;
  width:200px;
  list-style: none;
  margin-bottom:50px;
 
  
`
const Image = styled.div`
  height:190px;
  width:190px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
  url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
`
const Text = styled.div`
  position:absolute;
  top:210px;
  max-width:200px;
  p:first-child{
    font-size:1.5em;
    font-weight:bold;
    
  };
  p{
    line-height:30px;
    font-size:1em;
    margin:10px;
    color:black;
  };
  p:nth-child(2){
    font-size:1.2em;
    color:#ff4d4d;
  };

  p:last-child{
    font-style:italic;
  }

`
function Content({data}){
  
 return (
  <Cloth>
    <Image
      bgPhoto={data?.introsrc}
    ></Image>
    
  
    <Text>     
      <p>{data.name}</p>
      <p>{data.price}</p>
      <p>{data.introtext}</p>
    </Text>
    
  </Cloth>
 ) 
}

export default Content;