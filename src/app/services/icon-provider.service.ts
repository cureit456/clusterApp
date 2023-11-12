import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SvgIcon, icons } from '../../assets/icons/Icons';

@Injectable({
  providedIn: 'root',
})
export class IconProviderService {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    console.log('test');

    icons.forEach((icon: SvgIcon) => {
      iconRegistry.addSvgIconLiteral(
        icon.iconTag,
        sanitizer.bypassSecurityTrustHtml(icon.inlineSvg)
      );
    });
  }
}
