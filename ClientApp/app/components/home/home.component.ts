import { Component, OnInit } from "@angular/core";
import { UserService } from "../../common/services/user.service";
import { User } from "../../common/models/user";

@Component({
  selector: "home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService) {}

  user: User;

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => (this.user = user));
  }
}
