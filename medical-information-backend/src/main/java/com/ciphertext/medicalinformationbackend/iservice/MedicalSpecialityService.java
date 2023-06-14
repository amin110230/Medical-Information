package com.ciphertext.medicalinformationbackend.iservice;

import com.ciphertext.medicalinformationbackend.exception.ResourceNotFoundException;
import com.ciphertext.medicalinformationbackend.model.MedicalSpeciality;
import org.springframework.http.ResponseEntity;

import java.util.List;

/**
 * @author Sadman
 */
public interface MedicalSpecialityService {
    List<MedicalSpeciality> getAllSpecialities();
    MedicalSpeciality getSpecialityById(int id) throws ResourceNotFoundException;
    MedicalSpeciality createSpeciality(MedicalSpeciality medicalSpeciality);
    MedicalSpeciality updateSpeciality(MedicalSpeciality newMedicalSpeciality, int specialityId);
    ResponseEntity<Object> deleteSpecialityById(int specialityId);
}
