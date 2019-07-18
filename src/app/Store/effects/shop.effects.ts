import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {Observable, of} from "rxjs";
import {map, mergeMap, catchError} from "rxjs/operators";
import {ShopService} from "../../service/shop.service";
import * as shopActions from "../Actions/shop.actions";
import {Shop, AllproductShop} from "../../service/shop.interface";

@Injectable()
export class ShopeEffect {
    constructor(private actions$:Actions, private shopService: ShopService) {

    }
    /*----- Start Load Shop -------*/
    @Effect() LoadShops$: Observable<Action> = this.actions$.pipe(
        ofType<shopActions.LoadShops>(shopActions.ShopActionTypes.LOAD_SOPS),
        mergeMap(() => 
            this.shopService.getAllShops().pipe(
                map(
                    (shop: AllproductShop) => new shopActions.LoadShopsSuccess(shop.data)
                ),
                catchError(err => of(new shopActions.LoadShopsFail(err)))
            )
        )
    )
    /*----- End Load Shop -------*/

}