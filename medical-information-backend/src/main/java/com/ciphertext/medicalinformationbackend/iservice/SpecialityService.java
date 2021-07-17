package com.ciphertext.medicalinformationbackend.iservice;

import com.ciphertext.medicalinformationbackend.exception.RecordNotFoundException;
import com.ciphertext.medicalinformationbackend.model.Institution;
import com.ciphertext.medicalinformationbackend.model.Speciality;

import java.util.List;

/**
 * @author Sadman
 */
public interface SpecialityService {
    List<Speciality> getAllSpecialities();
    Speciality getSpecialityById(int id) throws RecordNotFoundException;
}
