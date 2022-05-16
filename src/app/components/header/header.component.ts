import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorOption } from 'src/app/models/color-option.model';
import { ThemeService } from 'src/app/services/theme.service';
import { VoiceRecognitionService } from '../../services/voice-recognition';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUserSpeaking: boolean = false;
  colorOptions: Observable<Array<ColorOption>> = this.themeService.getThemeOptions();
  @Output() voiceText = new EventEmitter<string>();

  constructor(
    private readonly themeService: ThemeService,
    private voiceRecognition: VoiceRecognitionService
  ) {}

  ngOnInit(): void {
    this.initVoiceInput();
  }

  stopRecording() {
    this.voiceRecognition.stop();
    this.isUserSpeaking = false;
  }

  initVoiceInput() {
    this.voiceRecognition.init();
    this.voiceRecognition.speechInput().subscribe((input) => {
      this.voiceText.emit(input);
    });
  }

  startRecording() {
    this.isUserSpeaking = true;
    this.voiceRecognition.start();
  }

  themeChangeHandler(themeToSet: any) {
    this.themeService.setTheme(themeToSet);
  }
}
