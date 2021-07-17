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
@Table(name="districts")
public class District {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "division_id")
    private Division division;

    @Column(name="name")
    private String name;

    @Column(name="bn_name")
    private String bnName;

    @Column(name="lat")
    private String lat;

    @Column(name="lon")
    private String lon;

    @Column(name="url")
    private String url;
}
