import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const toastrService=inject(ToastrService);
  
  if(authService.isAuthenticated()){
    console.log("login'e giriş yapılmışş ")
    return true;
   
  }
  else{
    console.log("login'e yölendirdi veya token oluşturulmamış")
    router.navigate(["login"])
    toastrService.info("Sisteme giriş yapmalısınız")
    return false;
  }
};
