const initialState = {
    allData:[]
}
const siteData = (state=initialState,  {type, payLoad}) =>{
    switch(type){
        case "set_PRODUCT_DATA":
          
            return{
             ...state, allData:payLoad
            }
            default: return state
        }
    }
    export default siteData;