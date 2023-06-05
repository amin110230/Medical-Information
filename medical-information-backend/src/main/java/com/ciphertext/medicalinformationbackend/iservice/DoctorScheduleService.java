package com.ciphertext.medicalinformationbackend.iservice;

import com.ciphertext.medicalinformationbackend.exception.RecordNotFoundException;
import com.ciphertext.medicalinformationbackend.model.DoctorSchedule;

import java.util.List;

public interface DoctorScheduleService {
    List<DoctorSchedule> getAllDoctorSchedules();
    DoctorSchedule getDoctorScheduleById(Long id) throws RecordNotFoundException;
}
