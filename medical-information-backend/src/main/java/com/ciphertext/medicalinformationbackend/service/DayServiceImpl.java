package com.ciphertext.medicalinformationbackend.service;

import com.ciphertext.medicalinformationbackend.exception.RecordNotFoundException;
import com.ciphertext.medicalinformationbackend.iservice.DayService;
import com.ciphertext.medicalinformationbackend.model.Day;
import com.ciphertext.medicalinformationbackend.repository.DayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Sadman
 */
@Service
public class DayServiceImpl implements DayService {

    @Autowired
    DayRepository dayRepository;

    @Override
    public List<Day> getAllDays() {
        return dayRepository.findAll();
    }

    @Override
    public Day getDayById(int id) throws RecordNotFoundException {
        return dayRepository.findById(id).orElseThrow(() -> new RecordNotFoundException(id));
    }
}
