package com.ciphertext.medicalinformationbackend.service;

import com.ciphertext.medicalinformationbackend.exception.RecordNotFoundException;
import com.ciphertext.medicalinformationbackend.iservice.MedicalSpecialityService;
import com.ciphertext.medicalinformationbackend.model.MedicalSpeciality;
import com.ciphertext.medicalinformationbackend.repository.MedicalSpecialityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Sadman
 */
@Service
public class MedicalMedicalSpecialityServiceImpl implements MedicalSpecialityService {

    @Autowired
    MedicalSpecialityRepository medicalSpecialityRepository;

    @Override
    public List<MedicalSpeciality> getAllSpecialities() {
        return medicalSpecialityRepository.findAll();
    }

    @Override
    public MedicalSpeciality getSpecialityById(int id) throws RecordNotFoundException {
        return medicalSpecialityRepository.findById(id).orElseThrow(() -> new RecordNotFoundException(id));
    }

    @Override
    public MedicalSpeciality createSpeciality(MedicalSpeciality medicalSpeciality) {
        return medicalSpecialityRepository.save(medicalSpeciality);
    }

    @Override
    public MedicalSpeciality updateSpeciality(MedicalSpeciality newMedicalSpeciality, int specialityId) {
        return medicalSpecialityRepository.findById(specialityId)
                .map(speciality -> {
                    speciality.setName(newMedicalSpeciality.getName());
                    speciality.setDescription(newMedicalSpeciality.getDescription());
                    return medicalSpecialityRepository.save(speciality);
                })
                .orElseGet(() -> {
                    newMedicalSpeciality.setId(specialityId);
                    return medicalSpecialityRepository.save(newMedicalSpeciality);
                });
    }

    @Override
    public ResponseEntity<Object> deleteSpecialityById(int specialityId) {
        medicalSpecialityRepository.deleteById(specialityId);
        if (medicalSpecialityRepository.findById(specialityId).isPresent()) {
            return ResponseEntity.unprocessableEntity().body("Failed to delete the specified record");
        } else return ResponseEntity.ok().body("Speciality is Deleted Successfully");
    }
}
