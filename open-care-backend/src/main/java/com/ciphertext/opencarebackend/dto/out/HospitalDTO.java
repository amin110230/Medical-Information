package com.ciphertext.opencarebackend.dto.out;

import com.ciphertext.opencarebackend.enums.HospitalType;
import com.ciphertext.opencarebackend.enums.OrganizationType;
import com.ciphertext.opencarebackend.model.District;
import com.ciphertext.opencarebackend.model.Union;
import com.ciphertext.opencarebackend.model.Upazila;
import lombok.Getter;
import lombok.Setter;

/**
 * @author Sadman
 */
@Getter
@Setter
public class HospitalDTO {
    private int id;
    private String name;
    private String bnName;
    private Integer numberOfBed;
    private District district;
    private Upazila upazila;
    private Union union;
    private HospitalType hospitalType;
    private OrganizationType organizationType;
    private String lat;
    private String lon;
    private String url;
}
