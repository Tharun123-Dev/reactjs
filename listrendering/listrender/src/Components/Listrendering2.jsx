function Listrendering2(){
    const products=[
        {id:1,name:'Laptop',price:50000},
        {id:2,name:'Mobile',price:20000},   
        {id:3,name:'Tablet',price:30000},
        {id:4,name:'Monitor',price:15000},
    ];
    
    return(
    <div>
       {
        products.map((product)=>(
            <div>
                <h1 style={{backgroundColor:"black",color:"white"}}>{product.name}</h1>
                <h2 style={{backgroundColor:"black",color:"white"}}>{product.price}</h2>
            </div>

        ))
       }


    </div>


    )




}
export default Listrendering2;