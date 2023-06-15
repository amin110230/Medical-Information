package com.ciphertext.opencarebackend.iservice;

import com.ciphertext.opencarebackend.exception.ResourceNotFoundException;
import com.ciphertext.opencarebackend.model.DoctorDegree;

import java.util.List;

/**
 * @author Sadman
 */
public interface DoctorDegreeService {
    List<DoctorDegree> getAllDoctorDegrees();
    DoctorDegree getDoctorDegreeById(int id) throws ResourceNotFoundException;
}
