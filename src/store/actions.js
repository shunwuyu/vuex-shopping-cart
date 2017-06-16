import * as types
 from './mutation-types'

export const addToCart = ({commit}, product) => {
  commit(types.ADD_TO_CART)
}
