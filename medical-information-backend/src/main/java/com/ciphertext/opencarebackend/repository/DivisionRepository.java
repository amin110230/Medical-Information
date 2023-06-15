package com.ciphertext.medicalinformationbackend.repository;

import com.ciphertext.medicalinformationbackend.model.Division;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Sadman
 */
@Repository
public interface DivisionRepository extends JpaRepository<Division, Integer> {
}
