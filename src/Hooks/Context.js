import React  from 'react'
const datapass={
id:"10001",
name:"pradeep",
department:"Software"
};

const Context=React.createContext(datapass);
const Provider=Context.Provider;
const Consumer=Context.Consumer;

export {Provider,Consumer}

export default Context;