import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
import { CategoryService } from 'src/app/shared/category.service';
@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  constructor(public _postdata:CategoryService) { }

  ngOnInit(): void {
  }
  form:FormGroup = new FormGroup({
    name : new FormControl("",Validators.required),
    icon : new FormControl("",Validators.required)
  })
  onSubmit(){
    console.log(this.form.value)
    if(this.form.valid){
      this._postdata.postcategory(this.form.value).subscribe(res=>{this.form,res },err=>console.log(err))
    }

  }

}
