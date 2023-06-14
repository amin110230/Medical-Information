package com.ciphertext.medicalinformationbackend.service;

import com.ciphertext.medicalinformationbackend.exception.ResourceNotFoundException;
import com.ciphertext.medicalinformationbackend.iservice.DegreeService;
import com.ciphertext.medicalinformationbackend.model.Degree;
import com.ciphertext.medicalinformationbackend.repository.DegreeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Sadman
 */
@Service
public class DegreeServiceImpl implements DegreeService {

    @Autowired
    DegreeRepository degreeRepository;

    @Override
    public List<Degree> getAllDegrees() {
        return degreeRepository.findAll();
    }

    @Override
    public Degree getDegreeById(int id) throws ResourceNotFoundException {
        return degreeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not found Degree with id = " + id));
    }
}
