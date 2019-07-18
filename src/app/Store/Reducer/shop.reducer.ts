import * as shopActions from "../Actions/shop.actions";
import {Shop, returnPostShop} from "../../service/shop.interface";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {EntityState, EntityAdapter, createEntityAdapter} from "@ngrx/entity";
export interface shopState extends EntityState<Shop> {
    selectedShopId: number | null,
    loading: boolean;
    loaded: boolean;
    error: returnPostShop
}
export interface AppState extends shopState {
    DataShops: shopState
}
export const defaultShop: shopState = {
    ids: [],
    entities: {},
    selectedShopId: null,
    loading: false,
    loaded: false,
    error: {status: "", message: ""}
}
export const shopAdapter: EntityAdapter<Shop> = createEntityAdapter<Shop>();
export const initialState = shopAdapter.getInitialState(defaultShop);
export function ShopReducer(state = initialState, action: shopActions.Action): shopState {
    switch(action.type) {
        /*------ Start LOAD SOPS ----------*/
        case shopActions.ShopActionTypes.LOAD_SOPS:
            return {
                ...state,
                 loading:true
            }
        /*------ End LOAD_SOPS ----------*/
        /*------ Start LOAD SOPS SUCCESS ----------*/
        case shopActions.ShopActionTypes.LOAD_SOPS_SUCCESS:
            return shopAdapter.addAll(action.payload, {
                ...state,
                loading: false,
                loaded: true,
                Allstatus: {status: "", message: ""},

            })
        /*------ End LOAD SOPS ----------*/
        /*------ Start LOAD SOPS FAIL----------*/
        case shopActions.ShopActionTypes.LOAD_SOPS_FAIL:
            return {
                 ...state,
                 entities: {}, 
                 loading:false, 
                 loaded: false, 
                 error: action.payload
            }
        /*------ End LOAD SOPS FAIL----------*/
        default:
            return state
    }
}
const getShopFeatureState = createFeatureSelector<shopState>("DataShops");
export const getShops = createSelector(
    getShopFeatureState,
    shopAdapter.getSelectors().selectAll
)
export const getShopsLoading = createSelector(
    getShopFeatureState,
    (state:shopState) => state.loading
)
export const getShopsLoaded = createSelector(
    getShopFeatureState,
    (state:shopState) => state.loaded
)
export const getErrors = createSelector(
    getShopFeatureState,
    (state:shopState) => state.error
)
