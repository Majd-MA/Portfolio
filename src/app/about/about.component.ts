import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {PageService} from "../page.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less'
})
export class AboutComponent implements OnInit {
  constructor(private pageService: PageService) {}

  feedbackData = {
    name: '',
    email: '',
    message: ''
  };

  ngOnInit(): void {
    this.pageService.setInitIndex(3);
  }

  submitFeedback() {
    // Log the form data to the console
    console.log('Feedback Data:', this.feedbackData);

    // Optional: You can add additional logic to handle the form submission
    // like sending the data to a server or clearing the form.
  }
}
