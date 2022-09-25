import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../context/CartContext"

export const CartWidget = () => {
	const { games, removeItem, clear } = useContext(CartContext)

	const addHandler = (e) => {
		removeItem(e.target.id)
	}
	console.log(games)
	let total = 0;
	games.map(game => total += game.cantidad)
	return (
		<div className="dropdown dropdown-end">
			<label tabIndex={0} className="btn btn-ghost btn-circle">
				<div className="indicator">
					<i className='bx bxs-cart bx-sm text-white'></i>
					<span className="badge badge-sm bg-primary indicator-item">{total}</span>
				</div>
			</label>
			<div tabIndex={0} className="mt-3 card card-compact dropdown-content w-60 bg-base-100 dark:bg-base-100 shadow">
				<div className="card-body p-1">
					{games.length ? games.map(game =>
						<div className="flex justify-between w-full mb-4" key={game.id}>
							<img className="w-10 bg-contain" src={game.img} />
							<div className="w-9/12 content-between grid ">
								<p className="text-start font-bold">{game.title}</p>
								<div className=' flex'>
									<p className=" text-black">{game.cantidad}</p>
									<p className=' text-black'>$ {game.price * game.cantidad} </p>
								</div>
							</div>
							<button className="btn btn-primary p-1 h-1" id={game.id} onClick={addHandler} >x</button>
						</div>) : <p>No hay juegos agregados</p>
					}
					<div className="card-actions">
						<button onClick={clear} className="btn btn-primary btn-block outline-none">Borrar todos</button>
						<Link to={'/ProGamer/cart'} className="btn btn-primary btn-block outline-none">Terminar compra</Link>
					</div>
				</div>
			</div>
		</div>
	)
}