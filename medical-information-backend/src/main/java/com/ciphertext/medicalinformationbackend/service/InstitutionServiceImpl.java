package com.ciphertext.medicalinformationbackend.service;

import com.ciphertext.medicalinformationbackend.exception.ResourceNotFoundException;
import com.ciphertext.medicalinformationbackend.iservice.InstitutionService;
import com.ciphertext.medicalinformationbackend.model.Institution;
import com.ciphertext.medicalinformationbackend.repository.InstitutionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Sadman
 */
@Service
public class InstitutionServiceImpl implements InstitutionService {

    @Autowired
    InstitutionRepository institutionRepository;

    @Override
    public List<Institution> getAllInstitutions() {
        return institutionRepository.findAll();
    }

    @Override
    public Institution getInstitutionById(int id) throws ResourceNotFoundException {
        return institutionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not found Institution with id = " + id));
    }
}
