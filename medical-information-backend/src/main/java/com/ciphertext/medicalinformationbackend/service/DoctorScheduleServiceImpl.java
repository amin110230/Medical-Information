package com.ciphertext.medicalinformationbackend.service;

import com.ciphertext.medicalinformationbackend.exception.ResourceNotFoundException;
import com.ciphertext.medicalinformationbackend.iservice.DoctorScheduleService;
import com.ciphertext.medicalinformationbackend.model.DoctorSchedule;
import com.ciphertext.medicalinformationbackend.repository.DoctorScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Sadman
 */
@Service
public class DoctorScheduleServiceImpl implements DoctorScheduleService {

    @Autowired
    DoctorScheduleRepository DoctorScheduleRepository;

    @Override
    public List<DoctorSchedule> getAllDoctorSchedules() {
        return DoctorScheduleRepository.findAll();
    }

    @Override
    public DoctorSchedule getDoctorScheduleById(Long id) throws ResourceNotFoundException {
        return DoctorScheduleRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not found DoctorSchedule with id = " + id));
    }
}
