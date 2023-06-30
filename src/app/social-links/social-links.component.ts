import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookSvgComponent } from '../svg/facebook-svg.component';
import { InstagramSvgComponent } from '../svg/instagram-svg.component';
import { PinterestSvgComponent } from '../svg/pinterest-svg.component';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule, FacebookSvgComponent, InstagramSvgComponent, PinterestSvgComponent],
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent {

}
