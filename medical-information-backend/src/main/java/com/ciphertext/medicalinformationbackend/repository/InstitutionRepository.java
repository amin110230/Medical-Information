package com.ciphertext.medicalinformationbackend.repository;

import com.ciphertext.medicalinformationbackend.model.Division;
import com.ciphertext.medicalinformationbackend.model.Institution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Sadman
 */
@Repository
public interface InstitutionRepository extends JpaRepository<Institution, Integer> {
}
