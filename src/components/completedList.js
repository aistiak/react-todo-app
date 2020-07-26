import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { toggleTodo ,dltItem } from "../redux"
const CompletedList  = () => {

	const dispatch = useDispatch()

	const todos = useSelector( state => state.todos )
	
	const toggleItem = id => dispatch( toggleTodo(id) ) 
	
	const removeTodo = id => dispatch ( dltItem(id) )

	const doneList = todos.filter( ({done}) => done ).map( (v,k) => {
		return (
			<li key={k} > 
				<input type="checkbox" name={v.id}  onChange={ event => { event.preventDefault(); toggleItem( event.target.name ) }} checked />
				{v.text} 
				<span className="item-del">
					<a  href="javascript:;" onClick={ () => removeTodo( v.id )  } > &#128465; </a>
				</span>
			</li>
		)
	})


	return (

		<div className="completed-list-div"> 
			
			<span>completed</span>
			<ul className="completed-list">
				{ doneList }
			</ul>
		</div>
	)


}

export default CompletedList