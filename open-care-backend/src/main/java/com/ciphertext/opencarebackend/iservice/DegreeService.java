package com.ciphertext.opencarebackend.iservice;

import com.ciphertext.opencarebackend.exception.ResourceNotFoundException;
import com.ciphertext.opencarebackend.model.Degree;

import java.util.List;

/**
 * @author Sadman
 */
public interface DegreeService {
    List<Degree> getAllDegrees();
    Degree getDegreeById(int id) throws ResourceNotFoundException;
}
