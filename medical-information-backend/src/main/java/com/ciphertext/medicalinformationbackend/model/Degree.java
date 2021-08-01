package com.ciphertext.medicalinformationbackend.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

/**
 * @author Sadman
 */
@Getter
@Setter
@Entity
@Table(name="degrees")
public class Degree {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="name")
    private String name;

    @Column(name="abbreviation")
    private String abbreviation;
}
