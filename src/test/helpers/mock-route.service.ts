// import { ActivatedRoute, Router } from '@angular/router';
// import { SpyObject } from './spyobject';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';

// import Spy = jasmine.Spy;

// export class MockActivatedRoute extends ActivatedRoute {

//     constructor(parameters?: any) {
//         super();
//         this.queryParams = Observable.of(parameters);
//         this.params = Observable.of(parameters);
//         this.data = Observable.of({ ...parameters, pagingParams: {
//             page: 10,
//             ascending: false,
//             predicate: 'id'
//         }});
//     }
// }

// export class MockRouter extends SpyObject {
//     navigateSpy: Spy;

//     constructor() {
//         super(Router);
//         this.navigateSpy = this.spy('navigate');
//     }
// }
