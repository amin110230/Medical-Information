package com.ciphertext.medicalinformationbackend.repository;

import com.ciphertext.medicalinformationbackend.model.District;
import com.ciphertext.medicalinformationbackend.model.Union;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Sadman
 */
@Repository
public interface UnionRepository extends JpaRepository<Union, Integer> {
    List<Union> getAllByDistrict(District district);
}
