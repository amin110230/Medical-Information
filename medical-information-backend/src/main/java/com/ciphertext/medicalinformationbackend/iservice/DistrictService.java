package com.ciphertext.medicalinformationbackend.iservice;

import com.ciphertext.medicalinformationbackend.exception.RecordNotFoundException;
import com.ciphertext.medicalinformationbackend.model.District;

import java.util.List;

/**
 * @author Sadman
 */
public interface DistrictService {
    List<District> getAllDistricts();
    District getDistrictById(int id) throws RecordNotFoundException;
}
