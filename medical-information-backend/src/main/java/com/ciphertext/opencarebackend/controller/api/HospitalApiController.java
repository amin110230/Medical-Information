package com.ciphertext.medicalinformationbackend.controller.api;

import com.ciphertext.medicalinformationbackend.dto.out.HospitalDTO;
import com.ciphertext.medicalinformationbackend.exception.ResourceNotFoundException;
import com.ciphertext.medicalinformationbackend.iservice.HospitalService;
import com.ciphertext.medicalinformationbackend.model.Hospital;
import com.ciphertext.medicalinformationbackend.repository.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.data.domain.Sort.Order;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;


import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Sadman
 */
@RestController
@RequestMapping("/api/v1")
public class HospitalApiController {
    @Autowired
    HospitalService service;

    @Autowired
    HospitalRepository hospitalRepository;

    @GetMapping("/hospitals")
    public List<HospitalDTO> getAllHospitals(Model model) {
        return service.getAllHospitals();
    }

    private Sort.Direction getSortDirection(String direction) {
        if (direction.equals("asc")) {
            return Sort.Direction.ASC;
        } else if (direction.equals("desc")) {
            return Sort.Direction.DESC;
        }

        return Sort.Direction.ASC;
    }

    @GetMapping("/Hospitals")
    public ResponseEntity<Map<String, Object>> getAllHospitalsPage(
            @RequestParam(required = false) String name,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "id,desc") String[] sort) {

        try {
            List<Order> orders = new ArrayList<Order>();

            if (sort[0].contains(",")) {
                // will sort more than 2 fields
                // sortOrder="field, direction"
                for (String sortOrder : sort) {
                    String[] _sort = sortOrder.split(",");
                    orders.add(new Order(getSortDirection(_sort[1]), _sort[0]));
                }
            } else {
                // sort=[field, direction]
                orders.add(new Order(getSortDirection(sort[1]), sort[0]));
            }

            List<Hospital> hospitals = new ArrayList<Hospital>();
            Pageable pagingSort = PageRequest.of(page, size, Sort.by(orders));

            Page<Hospital> pageTuts;
            if (name == null)
                pageTuts = hospitalRepository.findAll(pagingSort);
            else
                pageTuts = hospitalRepository.findByNameContaining(name, pagingSort);

            hospitals = pageTuts.getContent();

            Map<String, Object> response = new HashMap<>();
            response.put("hospitals", hospitals);
            response.put("currentPage", pageTuts.getNumber());
            response.put("totalItems", pageTuts.getTotalElements());
            response.put("totalPages", pageTuts.getTotalPages());

            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/hospitals/{id}")
    public ResponseEntity<Hospital> getHospitalById(@PathVariable(value = "id") int hospitalId)
            throws ResourceNotFoundException {
        Hospital hospital = service.getHospitalById(hospitalId);
        return ResponseEntity.ok().body(hospital);
    }

    @PostMapping("/hospitals")
    public Hospital createHospital(@Valid @RequestBody Hospital hospital) {
        return service.createHospital(hospital);
    }

    @PutMapping("/hospitals/edit/{id}")
    public Hospital editHospitalById(@RequestBody Hospital newHospital, @PathVariable(value = "id") int hospitalId) {
        return service.updateHospital(newHospital, hospitalId);
    }

    @DeleteMapping("/hospitals/delete/{id}")
    @ResponseBody
    public ResponseEntity<Object> deleteHospitalsById(@PathVariable(value = "id") int hospitalId){
        return service.deleteHospitalById(hospitalId);
    }
}
