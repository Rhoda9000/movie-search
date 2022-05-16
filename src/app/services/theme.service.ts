import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StyleManagerService } from './style-manager.service';
import { ColorOption } from '../models/color-option.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(
    private http: HttpClient,
    private styleManager: StyleManagerService
  ) {}

  getThemeOptions(): Observable<Array<ColorOption>> {
    return this.http.get<Array<ColorOption>>('assets/options.json');
  }

  setTheme(themeToSet: string) {
    this.styleManager.setStyle(
      'theme',
      `../../assets/styles/${themeToSet}.css`
    );
  }
}
