const shorten = (title) =>  {
    const spilitText = title.split(" ")
    const newTitle = `${spilitText[0]} ${spilitText[1]}`
    return newTitle
}


const quantityCount = (state , id) => {
    const indexC = state.selectItem.findIndex(item => item.id === id)
    if(indexC === -1){
        return false
    } else {
        return state.selectItem[indexC].quantity
    }
    
}

const isInCart = (state , id) => {
    const indexI = state.selectItem.findIndex(item => item.id === id)
    if(indexI === -1){
        return true
    } else {
        return false
    }
    
}


export {shorten , quantityCount , isInCart}