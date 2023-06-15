package com.ciphertext.medicalinformationbackend.dto.out;

import com.ciphertext.medicalinformationbackend.enums.HospitalType;
import com.ciphertext.medicalinformationbackend.enums.OrganizationType;
import com.ciphertext.medicalinformationbackend.model.District;
import com.ciphertext.medicalinformationbackend.model.Union;
import com.ciphertext.medicalinformationbackend.model.Upazila;
import jakarta.persistence.*;
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
