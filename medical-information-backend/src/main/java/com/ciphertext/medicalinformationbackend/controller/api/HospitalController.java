package com.ciphertext.medicalinformationbackend.controller.api;

import com.ciphertext.medicalinformationbackend.exception.RecordNotFoundException;
import com.ciphertext.medicalinformationbackend.iservice.HospitalService;
import com.ciphertext.medicalinformationbackend.model.Hospital;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Sadman
 */
@RestController
@RequestMapping("/api")
public class HospitalController {
    @Autowired
    HospitalService service;

    @GetMapping("/hospitals")
    public List<Hospital> getAllDivisions(Model model) {
        return service.getAllHospitals();
    }

    @GetMapping("/hospitals/{id}")
    public ResponseEntity<Hospital> getDivisionById(@PathVariable(value = "id") int hospitalId)
            throws RecordNotFoundException {
        Hospital hospital = service.getHospitalById(hospitalId);
        return ResponseEntity.ok().body(hospital);
    }
}
