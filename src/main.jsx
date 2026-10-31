
import './index.css'
import ReactDOM from 'react-dom/client'
import router from './Route/Router'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router ={router}/>
)
