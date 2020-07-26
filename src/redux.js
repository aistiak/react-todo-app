import { createStore } from 'redux'
import uuid from 'uuid'
const initialState = {

	todos : [
		{
			id : uuid() ,
			text : 'eat 🍴🍴',
			done : false ,
		},
		{
			id : uuid() ,
			text : 'sleep 💤💤',
			done :false ,
		},
	]
}

 
const reducer = function(state,{type,payload}){

	switch(type){
		
		case 'add_todo' :
			return {
				...state ,
				todos : [ ...state.todos , payload ]
			}
		
		case 'toggle_todo' :
			return {
				...state ,
				todos : [ ...state.todos.map( v => { 
					if( v.id == payload ) v.done = !v.done 
					return v  
				}) ]
			} 	
			
		case 'dlt_item' :
			return {
				...state ,
				todos : [ ...state.todos.filter( v => v.id != payload) ]
			} 	
		

		case 'set_todos' :
			return {
				...state ,
				todos : payload 
			}	

		default :
			return state 	
	}
} 

export const  store = createStore(reducer,initialState)


export const addTodo = (text) => ({ 

	type : 'add_todo' ,
	payload : {
		id : uuid() ,
		text : text ,
		done : false ,
	} ,
})


export const toggleTodo = id => ({
	type: 'toggle_todo',
	payload: id ,
})
export const dltItem = id => ({
	type : 'dlt_item' ,
	payload : id ,
})
export const setTodos = todos => ({
	type : 'set_todos' ,
	payload : todos ,
})