import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Shop } from './shop.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  addShopData = "http://197.161.95.169:8888/shop-test/api/add-shop-data";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFhNzY5MTczYTRlYjJhNTFmZWQyOTY1MjFlYjJiZDkwZTgyY2EzMGQzYjQwOTBhYTZjYjQyNjUyZmI2MDU4YmI5YTgwNDk3ZmYzYzI5MDg4In0.eyJhdWQiOiIxIiwianRpIjoiYWE3NjkxNzNhNGViMmE1MWZlZDI5NjUyMWViMmJkOTBlODJjYTMwZDNiNDA5MGFhNmNiNDI2NTJmYjYwNThiYjlhODA0OTdmZjNjMjkwODgiLCJpYXQiOjE1NjE1MzY1OTAsIm5iZiI6MTU2MTUzNjU5MCwiZXhwIjoxNTkzMTU4OTkwLCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.FLT3Nc03gT6wd1nWxsnmUp2seuIQSc0QuSst7vFoA_040xURHYqfAgoP3S9RNveqo80CKF9b2tIBn29fyCIG2Fo0EDmYWUezoSCfm2_W4jhrqhiLG7G5zhuy6SLQHjIglskisDrmok9DcQjkUxGLNeB8qXkanz3VMOUg_T-aoYeHqHeUu5vwSmx9Ts5-8lcIC2F9EpfZ8VJZcyRFHxW4rQGo7xy6uIPYbMCTxYlsrnVq7pSy0aiSlE-BLajiHXczX6pCS65kq2JIMAAzdZDspHNmwjGHVEoCYE83ihfT-AY55femHUKJ38ReEzj807o_4esimT0G5Lk_li4t1G_ziNog8noBth7vEha7EbjTqAegTMkp1efxLy4-Kf_Gu4uMS4zC_Vg6maaspMfJowYJZGaVca-hm5huDPFt-En47QrvG3xgA9iOjdi39Y110NLHaqMPRMETntsYKkzFZODFqtZ4zkXZjrVDo9Q0y1RJWsgOqtG0hcihdeZ5w4frrNu9dcozKTwNsWTQAg5JjTVcxoRk05mt1knmIFTKn-5LtPwNtwa5SmfWUqERPsQQ-g8qbPihQJdKueoh_xMH1zuLIyRVDRPQ7AzYDDBek5qKNLviEe3Zknfvnq9VMolwzCTOLGJjxAUTk2IHaajdu7Oqhz3KRRWMN4wiBcdnKS2jafY'

    })
  };

  constructor(private http: HttpClient) { }
 
  createShop(shop): Observable<any> {
    return this.http.post(this.addShopData, JSON.stringify(shop), this.httpOptions)
  }

}
