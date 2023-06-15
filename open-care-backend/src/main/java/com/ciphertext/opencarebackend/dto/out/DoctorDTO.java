package com.ciphertext.opencarebackend.dto.out;

import lombok.Getter;
import lombok.Setter;

/**
 * @author Sadman
 */
@Getter
@Setter
public class DoctorDTO {
    private Long id;
    private String name;
    private int yearOfExperience;
    private String specialities;
    private String degrees;
    private String description;
    private byte[] image;
}
