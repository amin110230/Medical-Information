package com.ciphertext.opencarebackend.repository;

import com.ciphertext.opencarebackend.model.District;
import com.ciphertext.opencarebackend.model.Upazila;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Sadman
 */
@Repository
public interface UpazilaRepository  extends JpaRepository<Upazila, Integer> {
    List<Upazila> getAllByDistrict(District district);
}
