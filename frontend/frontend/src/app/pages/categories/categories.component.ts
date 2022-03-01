import { Component, OnInit } from '@angular/core';
import {CategoryService} from 'src/app/shared/category.service';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  category:any=[];

  constructor(public _category:CategoryService, private messageService: MessageService,
    private confirmationService: ConfirmationService,) { }

  ngOnInit(): void {
    this._category.getcategory().subscribe(res=>this.category = res,err=>{
      console.log(err)
    })
  }

  // deleteCategory(categoryId: string){
  //   this._category.deletecategory(categoryId).subscribe(
  //     () => {

  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Success',
  //         detail: 'Category is deleted!'
  //       });
  //     },
  //     () => {
  //       this.messageService.add({
  //         severity: 'error',
  //         summary: 'Error',
  //         detail: 'Category is not deleted!'
  //       });
  //     }
  //   );

  // }

}
