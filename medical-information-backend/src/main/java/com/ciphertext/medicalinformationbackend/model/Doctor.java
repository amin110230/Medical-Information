package com.ciphertext.medicalinformationbackend.model;

import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.*;

import java.time.LocalDate;

/**
 * @author Sadman
 */
@Getter
@Setter
@Entity
@Table(name="doctor")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="bn_name")
    private String bnName;

    @Column(name="bmdc_no")
    private String bmdcNo;

    @Column(name="phone")
    private String phone;

    @Column(name="email")
    private String email;

    @Column(name="address")
    private String address;

    @Column(name="start_date")
    private LocalDate startDate;

    @Column(name="description")
    private String description;

    @Column(name="image")
    private byte[] image;

    @Column(name = "active")
    private Boolean active;
}
