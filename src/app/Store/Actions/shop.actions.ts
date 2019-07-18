import { Action } from '@ngrx/store';
import { Shop, returnPostShop } from 'src/app/service/shop.interface';
export enum ShopActionTypes {
    LOAD_SOPS = "[shop] Load Shops",
    LOAD_SOPS_SUCCESS = "[shop] Load Shops Success",
    LOAD_SOPS_FAIL = "[shop] Load Shops Fail",
    CREATE_SOP = "[shop] Load Shops",
    CREATE_SOP_SUCCESS = "[shop] Create Shops Success",
    CREATE_SOP_FAIL = "[shop] Create Shops Fail"
}
export class LoadShops implements Action {
    readonly type = ShopActionTypes.LOAD_SOPS;
}
export class LoadShopsSuccess implements Action {
    readonly type = ShopActionTypes.LOAD_SOPS_SUCCESS;
    constructor(public payload: Shop[]) {
    }
}
export class LoadShopsFail implements Action {
    readonly type = ShopActionTypes.LOAD_SOPS_FAIL;
    constructor(public payload: returnPostShop) {
    }
}
export class CreateShop implements Action {
    readonly type = ShopActionTypes.CREATE_SOP;
    constructor(public payload: Shop) {
    }
}
export class CreateShopSuccess implements Action {
    readonly type = ShopActionTypes.CREATE_SOP_SUCCESS;
    constructor(public payload: returnPostShop) {
    }
}
export class CreateShopFail implements Action {
    readonly type = ShopActionTypes.CREATE_SOP_FAIL;
    constructor(public payload: returnPostShop) {
    }
}
export type Action = 
LoadShops |
LoadShopsSuccess |
LoadShopsFail |
CreateShop |
CreateShopSuccess |
CreateShopFail;