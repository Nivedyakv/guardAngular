import { CanActivateFn ,Router} from '@angular/router';
import { Inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = Inject(Router);
  if(localStorage.getItem('user') === 'admin'){
      return true;
  } else {
      router.navigateByUrl('login');
      return false;
  }
  
  // if(localStorage.getItem('admin') === 'admin'){
  //   return true;
  //   }else if(localStorage.getItem('username') && localStorage.getItem('password')){
  //     return true;
  //   }
  //   else{
  //     router.navigateByUrl('/login')
  //     return false;
  //   }
  
};
