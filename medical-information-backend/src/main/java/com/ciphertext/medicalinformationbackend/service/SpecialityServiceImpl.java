package com.ciphertext.medicalinformationbackend.service;

import com.ciphertext.medicalinformationbackend.exception.RecordNotFoundException;
import com.ciphertext.medicalinformationbackend.iservice.SpecialityService;
import com.ciphertext.medicalinformationbackend.model.Speciality;
import com.ciphertext.medicalinformationbackend.repository.SpecialityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Sadman
 */
@Service
public class SpecialityServiceImpl implements SpecialityService {

    @Autowired
    SpecialityRepository specialityRepository;

    @Override
    public List<Speciality> getAllSpecialities() {
        return specialityRepository.findAll();
    }

    @Override
    public Speciality getSpecialityById(int id) throws RecordNotFoundException {
        return specialityRepository.findById(id).orElseThrow(() -> new RecordNotFoundException(id));
    }
}
