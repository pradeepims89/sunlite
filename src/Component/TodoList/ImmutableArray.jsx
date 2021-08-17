import React, { Component } from 'react'

export default class ImmutableArray extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:["Apple", "mango","Banana"],
             fruits:["A", "B","C","L","M"],
        }
    }
     Array=()=>
     {
        const fruits=this.state.fruits
        // Add  an element into array
        const AddnewFruitslist=fruits.concat("Add new");
        console.log(AddnewFruitslist);
        //  Remove element
      
        const newFruitslist=fruits.filter((item, index)=>{
         return  index!==0
        })
      console.log(newFruitslist)
        // modifiy element
      const newFruitslist1=fruits.map(( item, index)=>{
        if(index===0)
        {
            return "Some things"
        }
         return item;
      })
      console.log(newFruitslist1)
      
     }
    componentDidMount()
    {
      this.Array();
    }

    render() {
        const nefruit=this.state.fruits.concat('M')
        
        return (
            <div>
                List of fruits:{this.state.list.map((name, index)=>
                {
                 return <li key={index}> {name} </li>
                })}

                {
                   nefruit
                }
            </div>
        )
    }
}
