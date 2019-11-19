import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';


export const slideInAnimation =
    trigger('routeAnimations', [

        transition('Search => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ opacity: 0 }),
                    animate('0.8s', style({}))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateY(0%)', opacity: 1 }),
                    animate('0.8s ease-in-out', style({ transform: 'translateY(100%)', opacity: 0 }))
                ], { optional: true }),
                query(':enter', [
                    style({ opacity: 0 }),
                    animate('0.8s', style({ opacity: 1 }))
                ], { optional: true }),
            ])
        ]),


    ]);