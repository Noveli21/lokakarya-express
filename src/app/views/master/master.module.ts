import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MasterRoutingModule } from './master-routing.module';

import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';

import {
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    CollapseModule,
    DropdownModule,
    FormModule,
    GridModule,
    ListGroupModule,
    NavModule,
    PaginationModule,
    PlaceholderModule,
    PopoverModule,
    ProgressModule,
    SharedModule,
    SpinnerModule,
    TableModule,
    TabsModule,
    TooltipModule,
    UtilitiesModule
} from '@coreui/angular';


@NgModule({
    imports: [
        CommonModule,
        MasterRoutingModule,
        AccordionModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CardModule,
        CollapseModule,
        GridModule,
        UtilitiesModule,
        SharedModule,
        ListGroupModule,
        IconModule,
        ListGroupModule,
        PlaceholderModule,
        ProgressModule,
        SpinnerModule,
        TabsModule,
        NavModule,
        TooltipModule,
        CarouselModule,
        FormModule,
        ReactiveFormsModule,
        DropdownModule,
        PaginationModule,
        PopoverModule,
        TableModule,
        DocsComponentsModule,
    ],
    declarations: []
})
export class MasterModule { }

