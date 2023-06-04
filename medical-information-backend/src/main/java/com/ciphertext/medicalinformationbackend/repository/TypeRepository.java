package com.ciphertext.medicalinformationbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Sadman
 */
@Repository
public interface TypeRepository extends JpaRepository<Type, Integer> {
}
