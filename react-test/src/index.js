import React from 'react';//ипортирует рект
import ReactDOM from 'react-dom';//имопрт ректДом
import './index.css';// глобальный css
import App from './App';//компонент
import * as serviceWorker from './serviceWorker'; // хз что

ReactDOM.render(<App />, document.getElementById('root'));//функция рендер у пакета ректДом ,где 1 аргм (APP компонент) и 2 аргм (куда чтобы этот апп отрендарился)

//обычно создается компонент (App) в него вкладываются другие компоненты и тд
serviceWorker.unregister();
