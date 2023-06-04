package com.ciphertext.medicalinformationbackend.iservice;

import com.ciphertext.medicalinformationbackend.exception.RecordNotFoundException;
import com.ciphertext.medicalinformationbackend.model.MedicalSpeciality;
import org.springframework.http.ResponseEntity;

import java.util.List;

/**
 * @author Sadman
 */
public interface SpecialityService {
    List<MedicalSpeciality> getAllSpecialities();
    MedicalSpeciality getSpecialityById(int id) throws RecordNotFoundException;
    MedicalSpeciality createSpeciality(MedicalSpeciality medicalSpeciality);
    MedicalSpeciality updateSpeciality(MedicalSpeciality newMedicalSpeciality, int specialityId);
    ResponseEntity<Object> deleteSpecialityById(int specialityId);
}
