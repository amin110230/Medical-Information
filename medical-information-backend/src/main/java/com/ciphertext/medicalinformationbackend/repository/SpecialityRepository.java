package com.ciphertext.medicalinformationbackend.repository;

import com.ciphertext.medicalinformationbackend.model.Institution;
import com.ciphertext.medicalinformationbackend.model.Speciality;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Sadman
 */
@Repository
public interface SpecialityRepository extends JpaRepository<Speciality, Integer> {
}
