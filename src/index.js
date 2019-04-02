import React from 'react';
import ReactDom from 'react-dom';

// import AppHeader from './components/app-header';
// import SearchPanel from './components/search-panel';
// import TodoList from './components/todo-list';

// const App = () => {
//     return (
//         <div>
//             <AppHeader/>
//             <SearchPanel/>
//             <TodoList/>
//         </div>
//     );
// };
// ReactDom.render(<App/>,document.getElementById("root"));

const App = (props) => {
    const {name,age} = props;
    let [first,last,...arr] = ["Ilya"," Kon","Vova","Putin"];
    console.log(arr[1]);
    return (
        <div>
            
            <h1>Hello World : {name} + {first}</h1>
            <h1>Hello World :{age} + {last}</h1>
        </div>
    );
};
ReactDom.render(<App name="Tom" age="33"/>,document.getElementById("root"));