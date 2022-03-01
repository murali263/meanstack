import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { category } from '../model/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public _category:HttpClient) { }

 public GETCategoryUrl = "http://localhost:3000/api/v1/category";
 public PostCategoryUrl = "http://localhost:3000/api/v1/category";

  getcategory():Observable <category[]>{
    return this._category.get<category[]>(this.GETCategoryUrl)
  }
  postcategory(users:any):Observable<category[]>{
    return this._category.post<category[]>(this.PostCategoryUrl,users)
  }
  deletecategory(categoryID:String):Observable<category[]>{
    return this._category.delete<category[]>(`http://localhost:3000/api/v1/category/${categoryID}`)
  }

}
