import { HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const newRequest = req.clone({
     
  })
  
  return next(newRequest);
};
