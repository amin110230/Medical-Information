package com.ciphertext.medicalinformationbackend.iservice;

import com.ciphertext.medicalinformationbackend.exception.ResourceNotFoundException;
import com.ciphertext.medicalinformationbackend.model.Degree;

import java.util.List;

/**
 * @author Sadman
 */
public interface DegreeService {
    List<Degree> getAllDegrees();
    Degree getDegreeById(int id) throws ResourceNotFoundException;
}
