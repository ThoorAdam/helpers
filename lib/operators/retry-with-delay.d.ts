import { MonoTypeOperatorFunction } from 'rxjs';
export declare function retryWithDelay<T>(retryDelay: number, count?: number): MonoTypeOperatorFunction<T>;
