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
@Table(name="days")
public class Day {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="name")
    private String name;

    @Column(name="bn_name")
    private String banglaName;

    @Column(name="st_name")
    private String shortName;
}
