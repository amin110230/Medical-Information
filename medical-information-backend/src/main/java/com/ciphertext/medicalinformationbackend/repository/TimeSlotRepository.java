package com.ciphertext.medicalinformationbackend.repository;

import com.ciphertext.medicalinformationbackend.model.Day;
import com.ciphertext.medicalinformationbackend.model.TimeSlot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Sadman
 */
@Repository
public interface TimeSlotRepository extends JpaRepository<TimeSlot, Integer> {
}
