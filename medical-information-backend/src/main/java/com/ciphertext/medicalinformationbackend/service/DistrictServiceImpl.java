package com.ciphertext.medicalinformationbackend.service;

import com.ciphertext.medicalinformationbackend.exception.RecordNotFoundException;
import com.ciphertext.medicalinformationbackend.iservice.DistrictService;
import com.ciphertext.medicalinformationbackend.model.District;
import com.ciphertext.medicalinformationbackend.repository.DistrictRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


/**
 * @author Sadman
 */
@Service
public class DistrictServiceImpl implements DistrictService {

    @Autowired
    DistrictRepository DistrictRepository;

    @Override
    public List<District> getAllDistricts() {
        return DistrictRepository.findAll();
    }

    @Override
    public District getDistrictById(int id) throws RecordNotFoundException {
        return DistrictRepository.findById(id).orElseThrow(() -> new RecordNotFoundException(id));
    }
}
