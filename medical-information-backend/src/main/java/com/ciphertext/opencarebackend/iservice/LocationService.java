package com.ciphertext.medicalinformationbackend.iservice;

import com.ciphertext.medicalinformationbackend.exception.ResourceNotFoundException;
import com.ciphertext.medicalinformationbackend.model.District;
import com.ciphertext.medicalinformationbackend.model.Division;
import com.ciphertext.medicalinformationbackend.model.Union;
import com.ciphertext.medicalinformationbackend.model.Upazila;

import java.util.List;

/**
 * @author Sadman
 */
public interface LocationService {
    List<Division> getAllDivisions();
    Division getDivisionById(int id) throws ResourceNotFoundException;
    List<District> getAllDistricts();
    District getDistrictById(int id) throws ResourceNotFoundException;
    List<District> getAllDistrictsByDivisionId(int divisionId) throws ResourceNotFoundException;
    List<Upazila> getAllUpazilas();
    Upazila getUpazilaById(int id) throws ResourceNotFoundException;
    List<Upazila> getAllUpazilasByDistrictId(int districtId) throws ResourceNotFoundException;

    List<Union> getAllUnionsByUpazilaId(int upazilaId) throws ResourceNotFoundException;
}
