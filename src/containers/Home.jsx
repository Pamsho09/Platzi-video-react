import React from 'react'
import { connect } from 'react-redux'



import Main from "../components/Main";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import Card from "../components/Card";



function Home({myList,trends,originals}) {

  console.log("estoe s");
 
  return (
    <div className="Home">
      
      <Main />
{myList.length>0 &&
      <Categories title="Mi lista">
        <Carousel>
        {myList.map((item) => (
            <Card key={item.id} {...item} mode />
          ))}
        </Carousel>
      </Categories>}
      <Categories title="Tendencia">
        <Carousel>
          {trends.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales">
        <Carousel>
         {originals.map((item) => {
           return (
             <Card key={item.id} {...item} />
           );
         })}
        </Carousel>
      </Categories>

   
    </div>
  );
}
const mapStateToPrp =state=>{
  console.log(state)
  return {
myList: state.myList,
trends:state.trends,
originals:state.originals


  }


}

export default connect(mapStateToPrp,null)(Home);
