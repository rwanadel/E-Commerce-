import { Component } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-regester',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './regester.component.html',
  styleUrl: './regester.component.css',
})
export class RegesterComponent {
  signupform: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.signupform = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        Username: ['', [Validators.required, this.noSpaces]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
            ),
          ],
        ],
        confirmpass: ['', [Validators.required]],
      },
      {
        validators: this.passwordMatchValidator('password', 'confirmpass'),
      }
    );
  }

  get name() {
    return this.signupform.get('name');
  }
  get email() {
    return this.signupform.get('email');
  }
  get Username() {
    return this.signupform.get('Username');
  }
  get password() {
    return this.signupform.get('password');
  }
  get confirmpass() {
    return this.signupform.get('confirmpass');
  }

  handlesubmit() {
    console.log(this.signupform);
    if (this.signupform.valid) {
      console.log('hi');

      this.router.navigate(['/']);
    }
  }

  //Match function
  passwordMatchValidator(
    passwordControlName: string,
    confirmPasswordControlName: string
  ): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: boolean } | null => {
      const passwordControl = formGroup.get(passwordControlName);
      const confirmPasswordControl = formGroup.get(confirmPasswordControlName);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else {
        confirmPasswordControl.setErrors(null);
        return null;
      }
    };
  }

  //nospace function
  noSpaces(control: AbstractControl): ValidationErrors | null {
    let hasSpace = (control.value || '').includes(' ');
    return hasSpace ? { spaces: true } : null;
  }
}
