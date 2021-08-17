import React from 'react'
import { useState, useCallback } from 'react'
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Button from './Button';
const funccount = new Set();


export default function UseCallback() {

    // const [count, setCount] = useState(0)
    // const [number, setNumber] = useState(0)

    // const incrementCounter = () => {
    //     setCount(count + 1)
    //     console.log('1')
    // }
    // const decrementCounter = () => {
    //     setCount(count - 1)
    //     console.log('2')
    // }

    // const incrementNumber = () => {
    //     setNumber(number + 1)
    //     console.log('3')
    // }
   
 
// const incrementCounter = useCallback(() => {
//   setCount(count + 1)
// }, [count])
// const decrementCounter = useCallback(() => {
//   setCount(count - 1)
// }, [count])
// const incrementNumber = useCallback(() => {
//   setNumber(number + 1)
// }, [number])
//     funccount.add(incrementCounter);
// funccount.add(decrementCounter);
// funccount.add(incrementNumber);
// alert(funccount.size);
  const [namehome, setnameHome] = useState('Home page')
    const [nameAbout, setNameAboutpage] = useState('About page')

    // const setHomepage=  ()=>
    // {
    //  setnameHome('Updated home page')
    // }
    // const setAboutPage=()=>
    // {
    //     setNameAboutpage('Updated home page')
    // }
    const setHomepage=useCallback( ()=>
    {
     setnameHome('Updated home page')
    } ,[namehome])
    const setAboutPage=useCallback(()=>
    {
        setNameAboutpage('Updated home page')
    },[nameAbout])
    console.log('Main page')
    return (
        <div>
            {/* {count}
            <button onClick={incrementCounter}>
                Increase counter
            </button>
            <button onClick={decrementCounter}>
                Decrease Counter
            </button>
            <button onClick={incrementNumber}>
                increase number
            </button> */}
             
            <Header type="home"  name={namehome} >
            </Header>
            <Button  clickHandler={setHomepage}>
                Update home header
            </Button>
            <About type="About"  name={nameAbout} >
            </About>
            <Button  clickHandler={setAboutPage}>
                Update About header
            </Button>
            <Footer></Footer>
        </div>
    )
}
