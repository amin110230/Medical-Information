package com.ciphertext.medicalinformationbackend.service;

import com.ciphertext.medicalinformationbackend.exception.RecordNotFoundException;
import com.ciphertext.medicalinformationbackend.iservice.DoctorService;
import com.ciphertext.medicalinformationbackend.model.Doctor;
import com.ciphertext.medicalinformationbackend.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Sadman
 */
@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    DoctorRepository doctorRepository;

    @Override
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    @Override
    public Doctor getDoctorById(int id) throws RecordNotFoundException {
        return doctorRepository.findById(id).orElseThrow(() -> new RecordNotFoundException(id));
    }
}
