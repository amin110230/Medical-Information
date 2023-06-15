package com.ciphertext.opencarebackend.iservice;

import com.ciphertext.opencarebackend.dto.out.DoctorDTO;
import com.ciphertext.opencarebackend.exception.ResourceNotFoundException;
import com.ciphertext.opencarebackend.model.Doctor;

import java.util.List;

/**
 * @author Sadman
 */
public interface DoctorService {
    List<DoctorDTO> getAllDoctors();
    Doctor getDoctorById(Long id) throws ResourceNotFoundException;
}
