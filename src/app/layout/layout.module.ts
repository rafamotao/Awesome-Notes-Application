import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { PopoverModule } from 'ngx-bootstrap/popover';


import {
    AppAsideModule,
    AppBreadcrumbModule,
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
  } from '@coreui/angular';
import { LayoutNoteListComponent } from './layout-note-list/layout-note-list.component';
import { LayoutNoteItemComponent } from './layout-note-item/layout-note-item.component';
import { LayoutNoteNewComponent } from './layout-note-new/layout-note-new.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    imports: [
        CollapseModule,
        CommonModule,
        LayoutRoutingModule,
        FormsModule,

        // BrowserModule,
        AppAsideModule,
        AppBreadcrumbModule.forRoot(),
        AppFooterModule,
        AppHeaderModule,
        AppSidebarModule,
        PerfectScrollbarModule,
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        ChartsModule,
        ModalModule.forRoot(),
        PopoverModule.forRoot()
    ],
    declarations: [
        LayoutComponent,
        LayoutNoteNewComponent,
        LayoutNoteListComponent,
        LayoutNoteItemComponent
    ]
})
export class LayoutModule { }
