package com.ciphertext.medicalinformationbackend.iservice;

import com.ciphertext.medicalinformationbackend.exception.ResourceNotFoundException;
import com.ciphertext.medicalinformationbackend.model.Institution;

import java.util.List;

/**
 * @author Sadman
 */
public interface InstitutionService {
    List<Institution> getAllInstitutions();
    Institution getInstitutionById(int id) throws ResourceNotFoundException;
}
