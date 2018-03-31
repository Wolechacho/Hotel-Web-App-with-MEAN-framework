import {Component,Input,Output,EventEmitter,OnChanges} from '@angular/core'

@Component({
    selector : 'pagination',
    template:
    `
            <nav class="text-center" *ngIf="items.length > pageSize">
                <ul class="pagination pagination-md">
                    <li [class.disabled]="currentPage == 1">
                        <a (click)="onPrevious()" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li *ngFor="let page of pages" (click)="setPage(page)">
                        <a>{{page}}</a>
                    </li>
                    <li [class.disabled]="currentPage == pages.length">
                        <a (click)="onNext" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
    `,
    inputs:['items','pageSize'],
    outputs:['pageChanged']
})


export class PaginationComponent implements OnChanges
{
    items:[];
    pageSize:number = 10;
    pageChanged = new EventEmitter();
    pages:any[];
    currentPage : number;

    ngOnChanges()
    {
        this.currentPage = 1;
        this.pages = [];
        let noOfPages = Math.ceil(this.items.length /  this.pageSize);
        for(var i = 1;i <= noOfPages;i++)
        {
            this.pages.push(i);
        }
    }



    public onPrevious():void
    {
        if(this.currentPage == 1)
        return
        this.currentPage--;
        this.pageChanged.emit(this.currentPage);
    }

    public onNext():void
    {
        if(this.currentPage == this.pages.length)
        return
        this.currentPage++;
        this.pageChanged.emit(this.currentPage);
    }

    public setPage(page:number):void
    {
        this.currentPage = page
        this.pageChanged.emit(page);
    }
}