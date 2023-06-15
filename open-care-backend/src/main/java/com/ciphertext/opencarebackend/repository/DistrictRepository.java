package com.ciphertext.opencarebackend.repository;

import com.ciphertext.opencarebackend.model.District;
import com.ciphertext.opencarebackend.model.Division;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Sadman
 */
@Repository
public interface DistrictRepository extends JpaRepository<District, Integer> {
    List<District> getAllByDivision(Division division);
}
