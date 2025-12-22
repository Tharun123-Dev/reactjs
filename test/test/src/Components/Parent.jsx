export default function Parent(){
 
    return(
        <div>
            <h1>This is parent component</h1>
            <Child/>
        </div>
    )
}

function Child(){
    return(
        <div>
            <h2>This is child component</h2>
        </div>
    )
}