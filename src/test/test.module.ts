import { DatePipe, CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModule, ElementRef, Renderer } from '@angular/core';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
// import { MockRouter, MockActivatedRoute } from './helpers/mock-route.service';
import { RegisterRoutingModule } from '../app/register/register-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpUtilService } from '../app/services/http-util.service';

@NgModule({
    providers: [
        MockBackend,
        BaseRequestOptions,
        HttpUtilService,
        // {
        //     provide: ActivatedRoute,
        //     useValue: new MockActivatedRoute({id: 123})
        // },
        // {
        //     provide: Router,
        //     useClass: MockRouter
        // },
        {
            provide: Http,
            useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backendInstance, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
        }
    ]
})
export class ServerTestModule {}
