package com.ciphertext.opencarebackend.iservice;

import com.ciphertext.opencarebackend.exception.ResourceNotFoundException;
import com.ciphertext.opencarebackend.model.DoctorWorkplace;

import java.util.List;

/**
 * @author Sadman
 */
public interface DoctorWorkplaceService {
    List<DoctorWorkplace> getAllDoctorWorkplaces();
    DoctorWorkplace getDoctorWorkplaceById(Long id) throws ResourceNotFoundException;
}
