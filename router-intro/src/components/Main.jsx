import { Route, Routes } from 'react-router-dom'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import Home from './Home'

//for routes, keep capitalization consistent

export default function Main () {
    
    let userName = "BChan"
    
    return (
            
            
            <div className = "main">
                <Routes>
                    <Route exact path="/" element={<Home
                                                        userName={userName}
                                                                            />}/>
                    <Route exact path="ComponentA" element={<ComponentA/>}/>
                    <Route exact path="ComponentB" element={<ComponentB/>}/>
                </Routes>
            </div>)
    }