import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from "../../shared/components/modal/modal.component";
import {SharedEventService} from "../../core/services/shared-event.service";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('modalRef') modalRef: ModalComponent;

  constructor(private sharedEventService: SharedEventService,
              private authService: AuthService) {
    this.sharedEventService.onLogin.subscribe(() => {
      console.log("Respond to the login event");
      this.open();
    });
  }

  ngOnInit(): void {
  }

  open() {
    this.modalRef.open();
  }

  async loginWithGoogle() {
    await this.authService.googleLogin();
    this.modalRef.close();
  }

  loginWithGithub() {
    this.authService.githubLogin();
    this.modalRef.close();
  }

}
