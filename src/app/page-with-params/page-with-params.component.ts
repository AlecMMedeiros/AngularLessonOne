import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-with-params',
  templateUrl: './page-with-params.component.html',
  styleUrls: ['./page-with-params.component.css']
})
export class PageWithParamsComponent implements OnInit {
  public id: number | null = null;
  public productName: string | null  = "";
  public productBrand: string | null  = "";

  constructor(private route: ActivatedRoute) {}
  

  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => this.id = Number(params.get("id")))

    this.route.queryParamMap.subscribe((params) => {
      this.productName = params.get("productName");
      this.productBrand = params.get("productBrand");

    })
  }  
}
