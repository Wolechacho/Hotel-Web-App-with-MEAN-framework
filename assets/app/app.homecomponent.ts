import {Component} from '@angular/core'
import {CarouselComponent} from './app.carouselcomponent'

@Component({
    selector:'homeTemplate',
    template:
    `
        <carouselImage></carouselImage>
        <div class="row well text-center">
	    <div class="col-md-8">
            <img src="imgs/HImages/hotel1.jpg" class="img-responsive">
        </div>
	    <div class="col-md-4">
            <p  class="room-name">
            Etoile de Sahile
            </p>
            <p>
                Very Nice hotel to be
            </p>
            <p class="room-price">
                $500.00
            </p>
            <p>
                <button type="submit" class="btn btn-danger">BOOK HOTEL</button>
            </p>
        </div>
    </div>
     <div class="row well  text-center">
	    <div class="col-md-7">
            <img src="imgs/HImages/hotel2.jpg" class="img-responsive">
        </div>
	    <div class="col-md-5">
            <p class="room-name">
                Nice Es Prangue
            </p>
            <p>
               Your need, our Care
            </p>
            <p class="room-price">
                $400.00
            </p>

            <p>
                <button type="submit" class="btn btn-danger">BOOK HOTEL</button>
            </p>
        </div>
    </div>
    `,
    directives:[CarouselComponent]
})

export class HomeComponent
{

}