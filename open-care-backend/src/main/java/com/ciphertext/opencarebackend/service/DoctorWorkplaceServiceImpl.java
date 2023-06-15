package com.ciphertext.opencarebackend.service;

import com.ciphertext.opencarebackend.exception.ResourceNotFoundException;
import com.ciphertext.opencarebackend.iservice.DoctorWorkplaceService;
import com.ciphertext.opencarebackend.model.DoctorWorkplace;
import com.ciphertext.opencarebackend.repository.DoctorWorkplaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Sadman
 */
@Service
public class DoctorWorkplaceServiceImpl implements DoctorWorkplaceService {

    @Autowired
    DoctorWorkplaceRepository doctorWorkplaceRepository;

    @Override
    public List<DoctorWorkplace> getAllDoctorWorkplaces() {
        return doctorWorkplaceRepository.findAll();
    }

    @Override
    public DoctorWorkplace getDoctorWorkplaceById(Long id) throws ResourceNotFoundException {
        return doctorWorkplaceRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not found DoctorWorkplace with id = " + id));
    }
}
