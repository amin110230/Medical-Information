package com.ciphertext.medicalinformationbackend.controller.api;

import com.ciphertext.medicalinformationbackend.exception.RecordNotFoundException;
import com.ciphertext.medicalinformationbackend.iservice.InstitutionService;
import com.ciphertext.medicalinformationbackend.iservice.SpecialityService;
import com.ciphertext.medicalinformationbackend.model.Institution;
import com.ciphertext.medicalinformationbackend.model.Speciality;
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
public class SpecialityController {
    @Autowired
    SpecialityService service;

    @GetMapping("/specialties")
    public List<Speciality> getAllSpecialities(Model model) {
        return service.getAllSpecialities();
    }

    @GetMapping("/specialties/{id}")
    public ResponseEntity<Speciality> getSpecialityById(@PathVariable(value = "id") int specialityId)
            throws RecordNotFoundException {
        Speciality speciality = service.getSpecialityById(specialityId);
        return ResponseEntity.ok().body(speciality);
    }
}
