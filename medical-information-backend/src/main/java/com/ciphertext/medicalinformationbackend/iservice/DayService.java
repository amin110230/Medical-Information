package com.ciphertext.medicalinformationbackend.iservice;

import com.ciphertext.medicalinformationbackend.exception.RecordNotFoundException;
import com.ciphertext.medicalinformationbackend.model.Day;

import java.util.List;

/**
 * @author Sadman
 */
public interface DayService {
    List<Day> getAllDays();
    Day getDayById(int id) throws RecordNotFoundException;
}
