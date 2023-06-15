package com.ciphertext.opencarebackend.repository;

import com.ciphertext.opencarebackend.model.Union;
import com.ciphertext.opencarebackend.model.Upazila;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Sadman
 */
@Repository
public interface UnionRepository extends JpaRepository<Union, Integer> {
    List<Union> getAllByUpazila(Upazila upazila);
}
