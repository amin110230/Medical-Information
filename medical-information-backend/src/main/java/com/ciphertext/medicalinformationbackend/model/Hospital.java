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
@Table(name="hospitals")
public class Hospital {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="name")
    private String name;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "district_id")
    private District district;

    @Column(name="number_of_bed")
    private String numberOfBed;
}
