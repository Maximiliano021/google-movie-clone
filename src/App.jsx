import './App.css'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Aside } from './components/Aside'
import { ItemFilterContainer } from './components/ItemFilterContainer'
import { UserContext } from './context/UserContext'
import { Checkout } from './components/Checkout'
import {ProductsContainer} from './firebase/ProductsContainer'

function App() {
	return (
		<div className="p-4">
			<UserContext>
				<BrowserRouter>
					<NavBar />
					<div className="flex gap-4">
						<Aside />
						<Routes>
							<Route path="/ProGamer/" element={<ItemListContainer />} />
							<Route path="/ProGamer/cart" element={<Checkout />} />
							<Route path='/ProGamer/shop/item/:id' element={<ItemDetailContainer />} />
							<Route path='/ProGamer/categ/:genre' element={<ItemFilterContainer />} />
							<Route path='/ProGamer/products' element={<ProductsContainer/>} />
						</Routes>
					</div>
				</BrowserRouter>
			</UserContext>
		</div>
	)
}

export default App