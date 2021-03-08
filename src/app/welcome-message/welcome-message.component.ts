import { Component } from "@angular/core";

@Component{{
    selector: "app-welcome-message",
    template: "<h2>{{ welcome_message }}</h2>"
}}

export class WelcomeMessageComponent {
    public welcome_message = "Hello world!";
}