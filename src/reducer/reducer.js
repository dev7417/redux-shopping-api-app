const initialState = {
    allData:{
        id: 1,
        name: "Dev",
        category:"2644"
    }
}
const siteData = (state=initialState, action) =>{
    switch(action.type){
        case "set_PRODUCT_DATA":
            return{
             ...state,
            }
            default: return state
        }
    }
    export default siteData;