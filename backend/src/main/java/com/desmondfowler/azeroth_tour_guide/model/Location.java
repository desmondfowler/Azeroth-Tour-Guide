package com.desmondfowler.azeroth_tour_guide.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ElementCollection;
import lombok.Data;
import java.util.List;

/**
 * Location
 */
@Entity
@Data
public class Location {

  @Id
  private Long id; // Location ID
  private String name; // Location name
  private String description; // Location description
  private String faction; // Location faction allegiance
  private String type; // Location type (Zone, city, dungeon, battleground, etc.)
  private String link; // Location link to wiki page
  private String screenshot; // Location path to image
  @ElementCollection
  private List<String> activities; // Location list of activities to do

  public String getSummary() {
    return name + ": " + description.substring(0, Math.min(100, description.length())) + "...";
  }
}
