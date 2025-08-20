package com.desmondfowler.azeroth_tour_guide;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AzerothTourGuideController {
  @GetMapping("/")
  public String index() {
    return "Greetings from Spring Boot!";

  }
}
