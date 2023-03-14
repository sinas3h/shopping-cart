import React , {useReducer , createContext} from 'react';


const initialState = {
    selectItem : [] ,
    counterSelect : 0 ,
    total : 0 ,
    checkout : false
}

const sumItem = items => {
    const counterSelect = items.reduce((total, product) => total + product.quantity, 0);
    const total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return {counterSelect, total}
}

const reducer = (state , action) => {
    switch(action.type) {
        case 'ADD_ITEM' :
            if (!state.selectItem.find(item => item.id === action.payload.id)){
                 state.selectItem.push({
                    ...action.payload ,
                    quantity : 1
                 })
            }
            return {
                ...state,
                selectItem : [...state.selectItem] ,
                ...sumItem(state.selectItem),
                checkout : false
            }

        case 'REMOVE_ITEM' :
            const newRemove = state.selectItem.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectItem : [...newRemove] ,
                ...sumItem(newRemove)
            }

        case 'INCREASE' :
            const indexI = state.selectItem.findIndex(item => item.id === action.payload.id)
            state.selectItem[indexI].quantity++ ;
            return {
                ...state ,
                ...sumItem(state.selectItem)
            }

        case 'DECREASE' : 
            const indexD = state.selectItem.findIndex(item => item.id === action.payload.id)
            state.selectItem[indexD].quantity-- ;
            return {
                ...state ,
                ...sumItem(state.selectItem)
            }

        case 'CHECK_OUT' :
            return {
                selectItem : [] ,
                counterSelect : 0 ,
                total : 0 ,
                checkout : true
            }

        case 'CLEAR' :
            return {
                selectItem : [] ,
                counterSelect : 0 ,
                total : 0 ,
                checkout : false
            }


        default:
            return state
        
    }
}

export const cartContext = createContext()

const CartContextProvider = ({children}) => {

const [state , dispatch] = useReducer(reducer , initialState)

    return (
        <cartContext.Provider value={{state , dispatch}}>
            {children}
        </cartContext.Provider>
    );
};

export default CartContextProvider;