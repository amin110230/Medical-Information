package com.ciphertext.opencarebackend.repository;

import com.ciphertext.opencarebackend.model.Hospital;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Sadman
 */
@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Integer> {
    Page<Hospital> findByNumberOfBed(boolean published, Pageable pageable);

    Page<Hospital> findByNameContaining(String name, Pageable pageable);

    List<Hospital> findByNameContaining(String name, Sort sort);
}
