package com.ciphertext.opencarebackend.repository;

import com.ciphertext.opencarebackend.model.Institution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Sadman
 */
@Repository
public interface InstitutionRepository extends JpaRepository<Institution, Integer> {
}
