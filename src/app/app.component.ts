import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  readonly rows = [
    ["King Arthur", "-", "Arrested"],
    ["Sir Bedevere", "The Wise", "Arrested"],
    ["Sir Lancelot", "The Brave", "Arrested"],
    ["Sir Galahad", "The Chaste", "Killed"],
    ["Sir Robin", "The Not-Quite-So-Brave-As-Sir-Lancelot", "Killed"],
  ];
}
