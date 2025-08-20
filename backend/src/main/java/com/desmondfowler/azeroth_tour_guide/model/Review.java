package com.desmondfowler.azeroth_tour_guide.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

/**
 * Review
 */
@Entity
@Data
public class Review {

  @Id
  private Long id; // Review ID
  private String text; // Review text
  private String author; // Review author
  private Long locationId; // Foreign key reference to location, currently nullable since JSON lacks it
}
