package com.ciphertext.medicalinformationbackend.iservice;

import com.ciphertext.medicalinformationbackend.exception.RecordNotFoundException;
import com.ciphertext.medicalinformationbackend.model.Hospital;
import com.ciphertext.medicalinformationbackend.model.Institution;

import java.util.List;

/**
 * @author Sadman
 */
public interface HospitalService {
    List<Hospital> getAllHospitals();
    Hospital getHospitalById(int id) throws RecordNotFoundException;
}
