package com.ciphertext.opencarebackend.iservice;

import com.ciphertext.opencarebackend.dto.out.HospitalDTO;
import com.ciphertext.opencarebackend.exception.ResourceNotFoundException;
import com.ciphertext.opencarebackend.model.Hospital;
import org.springframework.http.ResponseEntity;

import java.util.List;

/**
 * @author Sadman
 */
public interface HospitalService {
    List<HospitalDTO> getAllHospitals();
    Hospital getHospitalById(int id) throws ResourceNotFoundException;
    Hospital createHospital(Hospital hospital);
    Hospital updateHospital(Hospital newHospital, int hospitalId);
    ResponseEntity<Object> deleteHospitalById(int hospitalId);
}
