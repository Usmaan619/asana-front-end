import { Component, Input } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-comman-table",
  templateUrl: "./comman-table.component.html",
  styleUrls: ["./comman-table.component.css"],
})
export class CommanTableComponent {
  iconForBoolean: any;
  @Input("tableConfig") set tableConfig(tableConfig: any) {
    this.table = tableConfig;
  }
  table: any;
  currentMonthYear: any;
  nextMonthYear: any;

  constructor() {}

  ngOnInit(): void {
    const today = moment();
    this.currentMonthYear = today.format("YYYY-MM-DD");
    const nextYear = today.add(12, "months");
    this.nextMonthYear = nextYear.format("YYYY-MM-DD");
  }
}
